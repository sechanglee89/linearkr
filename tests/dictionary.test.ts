/**
 * tests/dictionary.test.ts
 * dictionary/ko.ts가 policy 기준에 맞는지 검증한다.
 */
import { describe, it, expect } from "vitest";
import { dictionary, DICTIONARY_VERSION } from "../src/dictionary/ko.js";

// docs/glossary.md에서 review 항목만 추출 (safe로 변경된 항목은 제거)
const REVIEW_ITEMS = [
  "Create",
  "Relation",
  "Blocking",
  "Blocked",
  "Lead",
  "Health",
];

describe("dictionary", () => {
  it("딕셔너리에 항목이 있다", () => {
    expect(dictionary.size).toBeGreaterThan(0);
  });

  it("모든 키가 비어있지 않다", () => {
    for (const key of dictionary.keys()) {
      expect(key.trim().length, `빈 키 발견: "${key}"`).toBeGreaterThan(0);
    }
  });

  it("모든 번역값이 비어있지 않다", () => {
    for (const [key, value] of dictionary) {
      expect(value.trim().length, `빈 번역값 — 키: "${key}"`).toBeGreaterThan(
        0,
      );
    }
  });

  it("번역값이 300자를 초과하지 않는다", () => {
    for (const [key, value] of dictionary) {
      expect(
        value.length,
        `번역값 300자 초과 — 키: "${key}", 값: "${value}"`,
      ).toBeLessThanOrEqual(300);
    }
  });

  it("Map이므로 키 중복이 없다 (Map 구조 보장)", () => {
    // Map은 키 중복을 허용하지 않으므로 size와 entries 수가 같다
    let count = 0;
    for (const _ of dictionary) count++;
    expect(count).toBe(dictionary.size);
  });

  it("confidence: review 항목이 포함되지 않는다", () => {
    for (const reviewItem of REVIEW_ITEMS) {
      expect(
        dictionary.has(reviewItem),
        `review 항목이 dictionary에 포함됨: "${reviewItem}"`,
      ).toBe(false);
    }
  });

  it("DICTIONARY_VERSION이 정의되어 있다", () => {
    expect(DICTIONARY_VERSION).toBeTruthy();
    expect(typeof DICTIONARY_VERSION).toBe("string");
  });
});
