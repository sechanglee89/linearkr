/**
 * observer.ts — MutationObserver 등록/해제
 *
 * Linear는 SPA이므로 DOM이 동적으로 변경된다.
 * addedNodes 중심으로 처리하여 신규 추가된 노드만 번역한다.
 * characterData 감지는 비활성화 — 타이핑 중 텍스트 감시 방지.
 *
 * FOUC 방지 전략:
 * - MutationObserver 콜백은 레이아웃/페인트 이전에 동기로 실행된다.
 * - 소규모 배치(< SYNC_THRESHOLD)는 콜백 내에서 즉시 동기 번역한다.
 *   → 브라우저가 영어를 페인트할 기회가 없어진다.
 * - 대규모 배치(≥ SYNC_THRESHOLD)는 scheduler(debounce)로 처리한다.
 */
import { type Scheduler } from "./scheduler.js";

/** 이 값 미만의 배치는 동기 번역, 이상이면 scheduler 사용 */
const SYNC_THRESHOLD = 150;

type TranslateHandler = (nodes: Element[]) => void;

/**
 * MutationObserver를 생성하고 observe/disconnect를 반환한다.
 * @param onAdded - 새로 추가된 엘리먼트 배열을 받는 핸들러
 * @param scheduler - debounce 스케줄러
 */
export function createObserver(
  onAdded: TranslateHandler,
  scheduler: Scheduler,
): { observe: () => void; disconnect: () => void } {
  // pendingNodes를 observer 스코프에서 지속 축적한다.
  // schedule()은 이전 task를 덮어쓰므로, 매 mutation마다 새 클로저를 만들면
  // 100ms 이내 복수 배치의 첫 번째가 유실된다.
  // flush는 한 번만 정의해서 항상 같은 참조를 전달한다 — 덮어써도 실행 시
  // 지금까지 누적된 전체 pendingNodes를 처리한다.
  let pendingNodes: Element[] = [];

  function flush(): void {
    if (pendingNodes.length === 0) return;
    const batch = pendingNodes;
    pendingNodes = [];
    onAdded(batch);
  }

  const observer = new MutationObserver((mutations) => {
    const newNodes: Element[] = [];
    for (const mutation of mutations) {
      if (mutation.type !== "childList") continue;

      for (const node of mutation.addedNodes) {
        if (node.nodeType === Node.ELEMENT_NODE) {
          newNodes.push(node as Element);
        }
      }
    }

    if (newNodes.length === 0) return;

    if (newNodes.length < SYNC_THRESHOLD) {
      // 소규모 배치: MutationObserver 콜백 내 동기 번역
      // 브라우저 페인트 이전에 실행되므로 FOUC가 발생하지 않는다.
      onAdded(newNodes);
    } else {
      // 대규모 배치: scheduler로 debounce 처리
      for (const node of newNodes) {
        pendingNodes.push(node);
      }
      scheduler.schedule(flush);
    }
  });

  return {
    observe(): void {
      observer.observe(document.body, {
        childList: true,
        subtree: true,
        // characterData: false (기본값) — 타이핑 중 감지 방지
      });
    },
    disconnect(): void {
      observer.disconnect();
      scheduler.cancel();
      pendingNodes = [];
    },
  };
}
