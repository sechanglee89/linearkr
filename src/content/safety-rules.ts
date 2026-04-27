/**
 * safety-rules.ts — 번역 skip 여부를 판단하는 핵심 방어 모듈
 *
 * 이 모듈은 이 프로젝트에서 가장 중요하다.
 * "번역하지 말아야 할 것을 절대 번역하지 않는다"는 원칙의 코드 표현이다.
 *
 * 5중 방어선:
 *  1. 길이 게이트  — 60자 초과 즉시 skip
 *  2. 빈 값 게이트 — 빈 문자열 skip
 *  3. 태그 게이트  — 편집/코드 관련 태그 조상 skip
 *  4. 편집 영역 게이트 — contenteditable / ProseMirror / editor 조상 skip
 *  5. Idempotency 게이트 — 이미 번역된 노드 skip
 *
 * DOM 의존 로직. 순수 함수로 설계하되 Node를 받는다.
 */
import { type SkipResult } from "../shared/types.js";

/** 번역 대상에서 제외할 태그명 (소문자) — 텍스트 노드 및 속성 공통 */
const SKIP_TAGS_TEXT = new Set([
  "input",
  "textarea",
  "select",
  "option",
  "code",
  "pre",
  "script",
  "style",
  "svg",
  "canvas",
]);

/**
 * 속성 번역 시 추가로 skip할 태그 — 텍스트 노드 skip 태그에는 포함되지 않는 것
 * button의 title/aria-label은 번역 가능하므로 포함하지 않음
 */
const SKIP_TAGS_ATTR = new Set([
  "input",
  "textarea",
  "select",
  "option",
  "code",
  "pre",
  "script",
  "style",
  "svg",
  "canvas",
]);

/** ProseMirror/editor 컨테이너를 식별하는 클래스/속성 패턴 */
const EDITOR_SELECTORS = [
  ".ProseMirror",
  "[data-type='editor']",
  // NOTE: [contenteditable='true']만 매칭한다.
  // [contenteditable] (값 무관)은 contenteditable="false" 인 Linear UI 버튼/라벨도
  // editor 영역으로 잘못 분류하므로 사용하지 않는다.
  "[contenteditable='true']",
  "[data-gramm]", // Grammarly 편집 영역
  ".linear-editor",
  "[data-editor]",
  ".description-editor",
  ".comment-editor",
  ".tiptap",
];

/** 번역 완료 마킹 속성 이름 */
export const TRANSLATED_ATTR = "data-lkh-translated";

/** 최대 번역 허용 길이 — Linear UI 설명/빈 화면 문장 커버를 위해 200자로 설정 */
const MAX_LENGTH = 300; // Linear UI 설명/빈 화면 문장 커버를 위해 300자로 설정

/**
 * 텍스트 노드에 대해 번역을 skip해야 하는지 판단한다.
 * @param node - 번역 대상 텍스트 노드
 * @param text - 이미 trim된 텍스트 (불필요한 재처리 방지)
 */
export function shouldSkipTextNode(node: Text, text: string): SkipResult {
  // 1. 빈 값 게이트
  if (text.length === 0) {
    return { shouldSkip: true, reason: "empty-text" };
  }

  // 2. 길이 게이트
  if (text.length > MAX_LENGTH) {
    return { shouldSkip: true, reason: `too-long:${text.length}` };
  }

  const parent = node.parentElement;
  if (parent === null) {
    return { shouldSkip: true, reason: "no-parent" };
  }

  // 3. Idempotency 게이트 — 이미 번역된 노드
  if (parent.hasAttribute(TRANSLATED_ATTR)) {
    return { shouldSkip: true, reason: "already-translated" };
  }

  // 4. 태그 게이트 + 편집 영역 게이트 — 조상 트리 탐색
  const skipReason = findSkipReasonInAncestors(parent, SKIP_TAGS_TEXT);
  if (skipReason !== null) {
    return { shouldSkip: true, reason: skipReason };
  }

  return { shouldSkip: false, reason: "ok" };
}

/**
 * 엘리먼트 속성(attribute)에 대해 번역을 skip해야 하는지 판단한다.
 * @param el - 대상 엘리먼트
 * @param value - 속성값 (이미 trim된 값)
 */
export function shouldSkipAttribute(el: Element, value: string): SkipResult {
  // 1. 빈 값 게이트
  if (value.length === 0) {
    return { shouldSkip: true, reason: "empty-text" };
  }

  // 2. 길이 게이트
  if (value.length > MAX_LENGTH) {
    return { shouldSkip: true, reason: `too-long:${value.length}` };
  }

  // 3. 이미 번역된 엘리먼트
  if (el.hasAttribute(TRANSLATED_ATTR)) {
    return { shouldSkip: true, reason: "already-translated" };
  }

  // 4. 태그 게이트 + 편집 영역 게이트
  // NOTE: 속성 번역은 el 자신의 태그도 확인 (텍스트 노드와 달리 el 자신을 대상으로 함)
  const skipReason = findSkipReasonInAncestors(el, SKIP_TAGS_ATTR);
  if (skipReason !== null) {
    return { shouldSkip: true, reason: skipReason };
  }

  return { shouldSkip: false, reason: "ok" };
}

/**
 * 엘리먼트부터 조상을 탐색하며 skip 이유를 반환한다.
 * skip하지 않아도 되면 null을 반환한다.
 */
function findSkipReasonInAncestors(
  el: Element,
  skipTags: Set<string>,
): string | null {
  let current: Element | null = el;

  while (current !== null) {
    const tagName = current.tagName.toLowerCase();

    // 태그 게이트
    if (skipTags.has(tagName)) {
      return `skip-tag:${tagName}`;
    }

    // 편집 영역 게이트
    if (isEditorElement(current)) {
      return `editor-area:${tagName}`;
    }

    current = current.parentElement;
  }

  return null;
}

/**
 * 엘리먼트가 editor/contenteditable 영역인지 확인한다.
 * NOTE: "Description" 필드 라벨 텍스트 자체는 skip하지 않는다.
 * 라벨이 아닌 editor DOM 컨테이너만 skip한다.
 */
function isEditorElement(el: Element): boolean {
  // contenteditable 속성 확인
  const ce = el.getAttribute("contenteditable");
  if (ce === "true" || ce === "") {
    return true;
  }

  // EDITOR_SELECTORS 패턴과 일치 여부 확인
  for (const selector of EDITOR_SELECTORS) {
    try {
      if (el.matches(selector)) {
        return true;
      }
    } catch {
      // 잘못된 selector는 조용히 무시
    }
  }

  return false;
}
