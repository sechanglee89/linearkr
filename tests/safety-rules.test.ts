/**
 * tests/safety-rules.test.ts
 * 5중 방어선이 올바르게 동작하는지 검증한다.
 * 가장 중요한 테스트 파일이다.
 */
import { describe, it, expect, beforeEach } from "vitest";
import {
  shouldSkipTextNode,
  shouldSkipAttribute,
  TRANSLATED_ATTR,
} from "../src/content/safety-rules.js";

/** 테스트용 텍스트 노드 생성 헬퍼 */
function makeTextNode(text: string, parentTag: string = "span"): Text {
  const parent = document.createElement(parentTag);
  const node = document.createTextNode(text);
  parent.appendChild(node);
  return node;
}

/** 텍스트 노드를 특정 부모 안에 중첩 생성하는 헬퍼 */
function makeNestedTextNode(text: string, ancestors: string[]): Text {
  let current: HTMLElement = document.createElement(ancestors[0] ?? "div");
  const root = current;
  for (let i = 1; i < ancestors.length; i++) {
    const child = document.createElement(ancestors[i] as string);
    current.appendChild(child);
    current = child;
  }
  const node = document.createTextNode(text);
  current.appendChild(node);
  document.body.appendChild(root);
  return node;
}

describe("shouldSkipTextNode", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
  });

  // ── 정상 케이스 ────────────────────────────────────────────────
  it("일반 UI 텍스트는 skip하지 않는다", () => {
    const node = makeTextNode("Inbox");
    const result = shouldSkipTextNode(node, "Inbox");
    expect(result.shouldSkip).toBe(false);
    expect(result.reason).toBe("ok");
  });

  it("짧은 UI 라벨은 skip하지 않는다", () => {
    const node = makeTextNode("In Progress");
    const result = shouldSkipTextNode(node, "In Progress");
    expect(result.shouldSkip).toBe(false);
  });

  // ── 빈 값 게이트 ───────────────────────────────────────────────
  it("빈 문자열은 skip한다", () => {
    const node = makeTextNode("");
    const result = shouldSkipTextNode(node, "");
    expect(result.shouldSkip).toBe(true);
    expect(result.reason).toBe("empty-text");
  });

  // ── 길이 게이트 ───────────────────────────────────────────────
  it("300자 초과 문자열은 skip한다", () => {
    const longText = "a".repeat(301);
    const node = makeTextNode(longText);
    const result = shouldSkipTextNode(node, longText);
    expect(result.shouldSkip).toBe(true);
    expect(result.reason).toMatch(/too-long/);
  });

  it("정확히 300자는 skip하지 않는다", () => {
    const text = "a".repeat(300);
    const node = makeTextNode(text);
    const result = shouldSkipTextNode(node, text);
    expect(result.shouldSkip).toBe(false);
  });

  it("301자는 skip한다", () => {
    const text = "a".repeat(301);
    const node = makeTextNode(text);
    const result = shouldSkipTextNode(node, text);
    expect(result.shouldSkip).toBe(true);
  });

  // ── 태그 게이트 ───────────────────────────────────────────────
  it("input 안의 텍스트는 skip한다", () => {
    const node = makeNestedTextNode("Inbox", ["div", "input"]);
    const result = shouldSkipTextNode(node, "Inbox");
    expect(result.shouldSkip).toBe(true);
    expect(result.reason).toContain("skip-tag");
  });

  it("textarea 안의 텍스트는 skip한다", () => {
    const node = makeNestedTextNode("Hello", ["div", "textarea"]);
    const result = shouldSkipTextNode(node, "Hello");
    expect(result.shouldSkip).toBe(true);
  });

  it("code 태그 안의 텍스트는 skip한다", () => {
    const node = makeNestedTextNode("const x = 1", ["pre", "code"]);
    const result = shouldSkipTextNode(node, "const x = 1");
    expect(result.shouldSkip).toBe(true);
  });

  it("pre 태그 안의 텍스트는 skip한다", () => {
    const node = makeNestedTextNode("some code", ["div", "pre"]);
    const result = shouldSkipTextNode(node, "some code");
    expect(result.shouldSkip).toBe(true);
  });

  it("script 태그 안의 텍스트는 skip한다", () => {
    const node = makeNestedTextNode("alert(1)", ["div", "script"]);
    const result = shouldSkipTextNode(node, "alert(1)");
    expect(result.shouldSkip).toBe(true);
  });

  // ── contenteditable 게이트 ───────────────────────────────────
  it("contenteditable 영역 안의 텍스트는 skip한다", () => {
    const outer = document.createElement("div");
    outer.setAttribute("contenteditable", "true");
    const inner = document.createElement("p");
    const node = document.createTextNode("이슈 제목입니다");
    inner.appendChild(node);
    outer.appendChild(inner);
    document.body.appendChild(outer);

    const result = shouldSkipTextNode(node, "이슈 제목입니다");
    expect(result.shouldSkip).toBe(true);
    expect(result.reason).toContain("editor-area");
  });

  it("ProseMirror 클래스 영역 안의 텍스트는 skip한다", () => {
    const editor = document.createElement("div");
    editor.className = "ProseMirror";
    const p = document.createElement("p");
    const node = document.createTextNode("이슈 본문 내용");
    p.appendChild(node);
    editor.appendChild(p);
    document.body.appendChild(editor);

    const result = shouldSkipTextNode(node, "이슈 본문 내용");
    expect(result.shouldSkip).toBe(true);
    expect(result.reason).toContain("editor-area");
  });

  // ── Idempotency 게이트 ───────────────────────────────────────
  it("이미 번역 마킹된 엘리먼트의 자식 텍스트는 skip한다", () => {
    const parent = document.createElement("span");
    parent.setAttribute(TRANSLATED_ATTR, "true");
    const node = document.createTextNode("받은함");
    parent.appendChild(node);

    const result = shouldSkipTextNode(node, "받은함");
    expect(result.shouldSkip).toBe(true);
    expect(result.reason).toBe("already-translated");
  });
});

describe("shouldSkipAttribute", () => {
  it("일반 UI 라벨은 skip하지 않는다", () => {
    const el = document.createElement("button");
    const result = shouldSkipAttribute(el, "Inbox");
    expect(result.shouldSkip).toBe(false);
  });

  it("빈 값은 skip한다", () => {
    const el = document.createElement("button");
    const result = shouldSkipAttribute(el, "");
    expect(result.shouldSkip).toBe(true);
  });

  it("300자 초과 값은 skip한다", () => {
    const el = document.createElement("button");
    const longVal = "x".repeat(301);
    const result = shouldSkipAttribute(el, longVal);
    expect(result.shouldSkip).toBe(true);
  });

  it("이미 번역 마킹된 엘리먼트는 skip한다", () => {
    const el = document.createElement("button");
    el.setAttribute(TRANSLATED_ATTR, "true");
    const result = shouldSkipAttribute(el, "Settings");
    expect(result.shouldSkip).toBe(true);
  });

  it("contenteditable 영역 안의 엘리먼트 속성은 skip한다", () => {
    const outer = document.createElement("div");
    outer.setAttribute("contenteditable", "true");
    const btn = document.createElement("button");
    btn.setAttribute("title", "Settings");
    outer.appendChild(btn);
    document.body.appendChild(outer);

    const result = shouldSkipAttribute(btn, "Settings");
    expect(result.shouldSkip).toBe(true);
  });
});
