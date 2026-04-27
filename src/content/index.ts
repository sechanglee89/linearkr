/**
 * content/index.ts — content script entry point
 *
 * 역할:
 * - chrome.storage.local에서 설정 로드
 * - enabled일 때만 번역 실행
 * - MutationObserver로 SPA 변경 감지
 * - chrome.storage.onChanged로 popup 설정 변경 즉시 반영
 *
 * FOUC 방지 전략 — Early Observer:
 * - document_end에 주입되므로 React가 아직 렌더링 전이다.
 * - settings 로드(async) 동안 DOM 변경을 early observer로 누적한다.
 * - settings 로드 후 enabled이면 누적된 노드를 즉시 번역하고 main observer를 시작한다.
 */
import { loadSettings, onSettingsChanged } from "../shared/storage.js";
import { dictionary } from "../dictionary/ko.js";
import { createScheduler } from "./scheduler.js";
import { createObserver } from "./observer.js";
import { translatePage, translateElements } from "./translator.js";

async function init(): Promise<void> {
  // 개발 빌드에서만 출력
  if (__IS_DEV_BUILD__) {
    console.log(
      `[LKH] content script loaded. dictionary: ${dictionary.size} entries`,
    );
  }

  // --- Early Observer: settings 로드 전 DOM 변경 누적 ---
  // document_end 시점에 React는 아직 렌더링 중이므로
  // settings가 준비되기 전에 추가되는 노드를 놓치지 않기 위해 미리 관찰한다.
  const earlyNodes: Element[] = [];
  const earlyObserver = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") continue;
      for (const node of mutation.addedNodes) {
        if (node.nodeType === Node.ELEMENT_NODE) {
          earlyNodes.push(node as Element);
        }
      }
    }
  });
  earlyObserver.observe(document.documentElement, {
    childList: true,
    subtree: true,
  });
  // -------------------------------------------------------

  const settings = await loadSettings();
  earlyObserver.disconnect(); // settings 확보 후 early observer 중단

  if (__IS_DEV_BUILD__) {
    console.log(
      `[LKH] settings loaded — enabled: ${settings.enabled}, debug: ${settings.debug}`,
    );
  }

  // 프로덕션 빌드에서는 debug 항상 false — 어떤 로그도 출력하지 않음
  let debug = __IS_DEV_BUILD__ && settings.debug;
  let observer: ReturnType<typeof createObserver> | null = null;

  function startTranslation(): void {
    if (observer !== null) return; // 이미 실행 중

    // early observer가 누적한 노드 먼저 번역 (settings 로드 중 추가된 노드)
    if (earlyNodes.length > 0) {
      translateElements(earlyNodes, dictionary, debug);
      earlyNodes.length = 0;
    }

    // 초기 전체 번역 (early observer 이전에 이미 DOM에 있던 노드)
    const count = translatePage(dictionary, debug);
    if (__IS_DEV_BUILD__) {
      console.log(`[LKH] initial scan done — translated: ${count} items`);
    }
    if (debug) {
      console.log(`[LKH] debug mode on. watching DOM for changes...`);
    }

    // SPA 변경 감지
    const scheduler = createScheduler();
    observer = createObserver((nodes) => {
      translateElements(nodes, dictionary, debug);
    }, scheduler);
    observer.observe();
    if (debug) {
      console.log("[LKH] MutationObserver started");
    }
  }

  function stopTranslation(): void {
    if (observer !== null) {
      observer.disconnect();
      observer = null;
    }
    // NOTE: 이미 번역된 텍스트는 페이지 리로드 전까지 복원하지 않는다.
    // 복원 기능은 MVP 범위 밖이다.
  }

  // 초기 상태 적용
  if (settings.enabled) {
    startTranslation();
  } else {
    // disabled 상태에서는 early nodes 버림
    earlyNodes.length = 0;
  }

  // popup에서 설정 변경 시 즉시 반영
  onSettingsChanged((changes) => {
    if ("enabled" in changes) {
      const enabled = changes["enabled"]?.newValue as boolean | undefined;
      if (enabled === true) {
        startTranslation();
      } else if (enabled === false) {
        stopTranslation();
      }
    }

    if ("debug" in changes) {
      const nextDebug =
        __IS_DEV_BUILD__ &&
        ((changes["debug"]?.newValue as boolean | undefined) ?? false);
      debug = nextDebug;

      // debug가 켜지는 순간 현재 페이지를 재스캔해서 no-match 로그를 즉시 출력한다.
      // 이미 번역된 노드는 idempotency 마킹으로 건너뛰므로 DOM 변경은 없다.
      if (nextDebug && observer !== null) {
        console.log("[LKH] debug ON — rescanning page for no-match items...");
        translatePage(dictionary, true);
      }
    }
  });
}

// content script 진입점
init().catch((err: unknown) => {
  // 조용히 실패 — 확장 오류가 Linear 사용에 영향을 주지 않도록
  if (__IS_DEV_BUILD__) {
    console.error("[LKH] init failed:", err);
  }
});
