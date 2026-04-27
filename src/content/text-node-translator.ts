/**
 * text-node-translator.ts — Text 노드 번역 (순수 함수)
 *
 * 규칙:
 * - dictionary exact match만 번역한다. 부분/유사 매칭 없음.
 * - 번역 후 부모 엘리먼트에 data-lkh-translated 마킹 (idempotency)
 * - 두 번 실행해도 중복 번역되지 않는다.
 */
import { shouldSkipTextNode, TRANSLATED_ATTR } from "./safety-rules.js";
import { classifyTextNode } from "./node-classifier.js";

/**
 * 텍스트 노드를 번역 시도한다.
 * @returns true if 번역이 실행됨, false if skip
 */
export function translateTextNode(
  node: Text,
  dict: Map<string, string>,
  debug: boolean = false,
): boolean {
  const raw = node.textContent ?? "";
  const text = raw.trim();

  // safety-rules 통과 여부 확인
  const skipResult = shouldSkipTextNode(node, text);
  if (skipResult.shouldSkip) {
    if (debug) {
      console.log(
        "[LKH] skip text node:",
        skipResult.reason,
        JSON.stringify(text),
      );
    }
    return false;
  }

  // node-classifier 분류
  const classification = classifyTextNode(node);
  if (classification === "skip") {
    if (debug) {
      console.log("[LKH] skip by classifier:", JSON.stringify(text));
    }
    return false;
  }

  // dictionary exact match
  const translation = dict.get(text);
  if (translation === undefined) {
    // discovery logging — debug 모드에서 미매칭 UI 텍스트 파악용
    // 숫자만인 문자열, 1~2글자 단순 기호, 공백만인 텍스트는 노이즈이므로 제외
    if (debug && text.length >= 2 && !/^\d+$/.test(text)) {
      console.log("[LKH] no-match:", JSON.stringify(text));
    }
    return false;
  }

  // 이미 같은 값이면 DOM 변경하지 않음 (불필요한 mutation 방지)
  if (node.textContent === translation) {
    return false;
  }

  // 번역 적용
  node.textContent = translation;

  // idempotency 마킹 — 부모 엘리먼트에 설정
  const parent = node.parentElement;
  if (parent !== null) {
    parent.setAttribute(TRANSLATED_ATTR, "true");
  }

  if (debug) {
    console.log(
      "[LKH] translated:",
      JSON.stringify(text),
      "→",
      JSON.stringify(translation),
    );
  }

  return true;
}

/**
 * 엘리먼트 하위의 모든 텍스트 노드를 순회하며 번역한다.
 * @returns 번역된 노드 수
 */
export function translateTextNodes(
  root: Element,
  dict: Map<string, string>,
  debug: boolean = false,
): number {
  let count = 0;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);

  let node = walker.nextNode() as Text | null;
  while (node !== null) {
    if (translateTextNode(node, dict, debug)) {
      count++;
    }
    node = walker.nextNode() as Text | null;
  }

  return count;
}
