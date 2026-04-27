/**
 * attribute-translator.ts — 엘리먼트 속성 번역 (순수 함수)
 *
 * 규칙:
 * - title, aria-label, placeholder 속성만 번역한다.
 * - value 속성은 절대 번역하지 않는다.
 * - data-* 속성은 번역하지 않는다.
 * - dictionary exact match만 적용한다.
 */
import { shouldSkipAttribute, TRANSLATED_ATTR } from "./safety-rules.js";

/** 번역 가능한 속성 목록 */
const TRANSLATABLE_ATTRS = ["title", "aria-label", "placeholder"] as const;
type TranslatableAttr = (typeof TRANSLATABLE_ATTRS)[number];

/**
 * 단일 엘리먼트의 속성을 번역한다.
 * @returns 번역된 속성 수
 */
export function translateAttributes(
  el: Element,
  dict: Map<string, string>,
  debug: boolean = false,
): number {
  let count = 0;

  for (const attr of TRANSLATABLE_ATTRS) {
    const raw = el.getAttribute(attr);
    if (raw === null) continue;

    const value = raw.trim();
    const skipResult = shouldSkipAttribute(el, value);

    if (skipResult.shouldSkip) {
      if (debug && value.length > 0) {
        console.log(
          "[LKH] skip attribute",
          attr,
          skipResult.reason,
          JSON.stringify(value),
        );
      }
      continue;
    }

    const translation = dict.get(value);
    if (translation === undefined) continue;

    // 이미 같은 값이면 DOM 변경하지 않음
    if (el.getAttribute(attr) === translation) continue;

    el.setAttribute(attr, translation);

    // idempotency 마킹
    el.setAttribute(TRANSLATED_ATTR, "true");

    if (debug) {
      console.log(
        "[LKH] translated attr",
        attr,
        JSON.stringify(value),
        "→",
        JSON.stringify(translation),
      );
    }

    count++;
  }

  return count;
}

/**
 * 엘리먼트 하위의 모든 엘리먼트에 대해 속성 번역을 수행한다.
 * @returns 번역된 속성 수 합계
 */
export function translateAttributesInSubtree(
  root: Element,
  dict: Map<string, string>,
  debug: boolean = false,
): number {
  let count = 0;

  // root 자신도 처리
  count += translateAttributes(root, dict, debug);

  // 하위 모든 엘리먼트 처리
  const elements = root.querySelectorAll<Element>("*");
  for (const el of elements) {
    count += translateAttributes(el, dict, debug);
  }

  return count;
}
