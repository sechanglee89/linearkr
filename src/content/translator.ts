/**
 * translator.ts — text node 번역과 attribute 번역을 조율하는 orchestrator
 */
import { translateTextNodes } from "./text-node-translator.js";
import { translateAttributesInSubtree } from "./attribute-translator.js";

/**
 * 엘리먼트 배열에 대해 텍스트 노드 번역과 속성 번역을 수행한다.
 * @returns 번역된 항목 수 합계
 */
export function translateElements(
  elements: Element[],
  dict: Map<string, string>,
  debug: boolean = false,
): number {
  let count = 0;

  for (const el of elements) {
    count += translateTextNodes(el, dict, debug);
    count += translateAttributesInSubtree(el, dict, debug);
  }

  return count;
}

/**
 * 초기 전체 페이지 번역 — document.body를 대상으로 1회 실행
 */
export function translatePage(
  dict: Map<string, string>,
  debug: boolean = false,
): number {
  if (document.body === null) return 0;
  let count = 0;
  count += translateTextNodes(document.body, dict, debug);
  count += translateAttributesInSubtree(document.body, dict, debug);
  return count;
}
