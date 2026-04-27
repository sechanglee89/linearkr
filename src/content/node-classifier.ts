/**
 * node-classifier.ts — Node/Element를 UI 후보 또는 skip 대상으로 분류한다.
 *
 * 이 모듈은 safety-rules.ts의 skip 판단을 통과한 후,
 * 해당 노드가 번역 대상이 될 수 있는 UI 후보인지 추가로 분류한다.
 *
 * 최종 번역 여부는 dictionary exact match에서 결정한다.
 * 이 분류기는 명백히 사용자 콘텐츠인 것을 조기에 걸러내는 역할만 한다.
 */

export type NodeClassification = "ui-candidate" | "skip";

/**
 * 텍스트 노드의 부모 엘리먼트가 UI 후보인지 분류한다.
 * safety-rules를 통과한 노드에 대해서만 호출해야 한다.
 */
export function classifyTextNode(node: Text): NodeClassification {
  const parent = node.parentElement;
  if (parent === null) return "skip";

  // 사용자 작성 콘텐츠 컨테이너로 알려진 Linear 특유 구조
  // NOTE: selector 기반 처리는 예외 처리로만 사용한다 (R-005 대응)
  if (isKnownUserContentContainer(parent)) {
    return "skip";
  }

  return "ui-candidate";
}

/**
 * 엘리먼트가 사용자 작성 콘텐츠 컨테이너인지 확인한다.
 * Linear의 DOM 구조 변경에 취약하지 않도록 selector 의존도를 최소화한다.
 * dictionary exact match가 최종 방어선이므로 여기서 완벽할 필요는 없다.
 */
function isKnownUserContentContainer(el: Element): boolean {
  // 이슈 제목 영역 — Linear의 issue title은 h1/heading 역할을 가짐
  if (el.getAttribute("data-testid")?.includes("issue-title")) {
    return true;
  }

  // 이미 aria-label이나 role로 식별 가능한 사용자 콘텐츠 영역
  const role = el.getAttribute("role");
  if (role === "textbox" || role === "document") {
    return true;
  }

  return false;
}
