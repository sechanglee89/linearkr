/**
 * tests/attribute-translator.test.ts
 */
import { describe, it, expect, beforeEach } from "vitest";
import { translateAttributes } from "../src/content/attribute-translator.js";
import { TRANSLATED_ATTR } from "../src/content/safety-rules.js";
import { dictionary } from "../src/dictionary/ko.js";

describe("translateAttributes", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
  });

  it("title 속성을 번역한다", () => {
    const el = document.createElement("button");
    el.setAttribute("title", "Settings");
    document.body.appendChild(el);

    const count = translateAttributes(el, dictionary);
    expect(count).toBeGreaterThan(0);
    expect(el.getAttribute("title")).toBe("설정");
  });

  it("aria-label 속성을 번역한다", () => {
    const el = document.createElement("button");
    el.setAttribute("aria-label", "Inbox");
    document.body.appendChild(el);

    translateAttributes(el, dictionary);
    expect(el.getAttribute("aria-label")).toBe("받은함");
  });

  it("placeholder 속성을 번역한다 — input이 아닌 커스텀 컴포넌트에서", () => {
    // NOTE: input 자체는 SKIP_TAGS에 포함되어 skip됨
    // div 등 커스텀 컴포넌트의 placeholder는 번역 가능
    const el = document.createElement("div");
    el.setAttribute("placeholder", "Search");
    document.body.appendChild(el);

    const count = translateAttributes(el, dictionary);
    expect(count).toBeGreaterThan(0);
    expect(el.getAttribute("placeholder")).toBe("검색");
  });

  it("input 태그의 placeholder는 번역하지 않는다", () => {
    const el = document.createElement("input");
    el.setAttribute("placeholder", "Search");
    document.body.appendChild(el);

    const count = translateAttributes(el, dictionary);
    expect(count).toBe(0);
    expect(el.getAttribute("placeholder")).toBe("Search");
  });

  it("value 속성은 절대 번역하지 않는다", () => {
    const el = document.createElement("input");
    el.setAttribute("value", "Settings");
    document.body.appendChild(el);

    translateAttributes(el, dictionary);
    // value는 번역 대상이 아님
    expect(el.getAttribute("value")).toBe("Settings");
  });

  it("data-* 속성은 번역하지 않는다", () => {
    const el = document.createElement("div");
    el.setAttribute("data-label", "Settings");
    document.body.appendChild(el);

    translateAttributes(el, dictionary);
    expect(el.getAttribute("data-label")).toBe("Settings");
  });

  it("dictionary에 없는 속성값은 번역하지 않는다", () => {
    const el = document.createElement("button");
    el.setAttribute("aria-label", "My custom button");
    document.body.appendChild(el);

    translateAttributes(el, dictionary);
    expect(el.getAttribute("aria-label")).toBe("My custom button");
  });

  it("번역 후 data-lkh-translated 마킹이 추가된다", () => {
    const el = document.createElement("button");
    el.setAttribute("title", "Settings");
    document.body.appendChild(el);

    translateAttributes(el, dictionary);
    expect(el.hasAttribute(TRANSLATED_ATTR)).toBe(true);
  });

  it("이미 마킹된 엘리먼트는 다시 번역하지 않는다 — idempotent", () => {
    const el = document.createElement("button");
    el.setAttribute("title", "Settings");
    document.body.appendChild(el);

    translateAttributes(el, dictionary);
    expect(el.getAttribute("title")).toBe("설정");

    // 다시 실행 — 이미 마킹되어 있으므로 skip
    el.setAttribute("title", "Settings"); // 원복 시도
    const count = translateAttributes(el, dictionary);
    // 이미 마킹되어 있으므로 번역하지 않음
    expect(count).toBe(0);
  });

  it("빈 속성값은 번역하지 않는다", () => {
    const el = document.createElement("button");
    el.setAttribute("aria-label", "");
    document.body.appendChild(el);

    const count = translateAttributes(el, dictionary);
    expect(count).toBe(0);
    expect(el.getAttribute("aria-label")).toBe("");
  });

  it("60자 초과 속성값은 번역하지 않는다", () => {
    const el = document.createElement("button");
    const longVal = "x".repeat(61);
    el.setAttribute("aria-label", longVal);
    document.body.appendChild(el);

    translateAttributes(el, dictionary);
    expect(el.getAttribute("aria-label")).toBe(longVal);
  });
});
