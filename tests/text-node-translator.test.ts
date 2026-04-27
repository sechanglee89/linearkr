/**
 * tests/text-node-translator.test.ts
 */
import { describe, it, expect, beforeEach } from "vitest";
import { translateTextNode } from "../src/content/text-node-translator.js";
import { TRANSLATED_ATTR } from "../src/content/safety-rules.js";
import { dictionary } from "../src/dictionary/ko.js";

function makeTextNode(text: string, parentTag: string = "span"): Text {
  const parent = document.createElement(parentTag);
  const node = document.createTextNode(text);
  parent.appendChild(node);
  document.body.appendChild(parent);
  return node;
}

describe("translateTextNode", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
  });

  it("dictionary에 있는 텍스트는 번역한다", () => {
    const node = makeTextNode("Inbox");
    const result = translateTextNode(node, dictionary);
    expect(result).toBe(true);
    expect(node.textContent).toBe("받은함");
  });

  it("번역 후 부모 엘리먼트에 data-lkh-translated가 마킹된다", () => {
    const node = makeTextNode("Inbox");
    translateTextNode(node, dictionary);
    expect(node.parentElement?.hasAttribute(TRANSLATED_ATTR)).toBe(true);
  });

  it("dictionary에 없는 텍스트는 번역하지 않는다", () => {
    const node = makeTextNode("My custom issue title");
    const result = translateTextNode(node, dictionary);
    expect(result).toBe(false);
    expect(node.textContent).toBe("My custom issue title");
  });

  it("부분 일치는 번역하지 않는다 — exact match만 허용", () => {
    // "Inbox" 전체가 아니라 "Inbo"는 번역하지 않음
    const node = makeTextNode("Inbo");
    const result = translateTextNode(node, dictionary);
    expect(result).toBe(false);
    expect(node.textContent).toBe("Inbo");
  });

  it("'Inbox extra'는 번역하지 않는다 — 정확히 일치해야 함", () => {
    const node = makeTextNode("Inbox extra");
    const result = translateTextNode(node, dictionary);
    expect(result).toBe(false);
    expect(node.textContent).toBe("Inbox extra");
  });

  it("idempotent — 두 번 실행해도 중복 번역되지 않는다", () => {
    const node = makeTextNode("Inbox");
    translateTextNode(node, dictionary);
    expect(node.textContent).toBe("받은함");

    // 두 번째 실행 — 이미 마킹되었으므로 skip
    const secondResult = translateTextNode(node, dictionary);
    expect(secondResult).toBe(false);
    expect(node.textContent).toBe("받은함");
  });

  it("빈 문자열은 번역하지 않는다", () => {
    const node = makeTextNode("");
    const result = translateTextNode(node, dictionary);
    expect(result).toBe(false);
  });

  it("60자 초과 텍스트는 번역하지 않는다", () => {
    const longText = "a".repeat(61);
    const node = makeTextNode(longText);
    const result = translateTextNode(node, dictionary);
    expect(result).toBe(false);
  });

  it("input 태그 안의 텍스트는 번역하지 않는다", () => {
    const input = document.createElement("input");
    document.body.appendChild(input);
    // input은 텍스트 노드를 자식으로 직접 가지지 않지만, 방어 테스트
    const span = document.createElement("span");
    const node = document.createTextNode("Inbox");
    span.appendChild(node);
    input.appendChild(span);

    const result = translateTextNode(node, dictionary);
    expect(result).toBe(false);
  });

  it("contenteditable 영역 안의 텍스트는 번역하지 않는다", () => {
    const editor = document.createElement("div");
    editor.setAttribute("contenteditable", "true");
    const p = document.createElement("p");
    const node = document.createTextNode("Inbox");
    p.appendChild(node);
    editor.appendChild(p);
    document.body.appendChild(editor);

    const result = translateTextNode(node, dictionary);
    expect(result).toBe(false);
  });

  it("사용자 이슈 제목처럼 보이는 긴 텍스트는 번역하지 않는다", () => {
    const node = makeTextNode("Fix the authentication bug on the login page");
    const result = translateTextNode(node, dictionary);
    expect(result).toBe(false);
  });
});
