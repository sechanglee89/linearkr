/**
 * 공유 타입 정의
 * DOM 의존성 없는 순수 타입만 정의한다.
 */

/** 확장 설정 — chrome.storage.local에 저장되는 값 */
export interface Settings {
  /** 번역 활성화 여부 (기본값: true) */
  enabled: boolean;
  /** 표시 언어 (현재 ko만 지원) */
  language: "ko";
  /** 디버그 모드 — true이면 skip 이유를 console에 출력 */
  debug: boolean;
  /** 사전 버전 */
  dictionaryVersion: string;
}

export const DEFAULT_SETTINGS: Settings = {
  enabled: true,
  language: "ko",
  debug: false,
  dictionaryVersion: "0.1.0",
};

/** safety-rules.ts의 판단 결과 */
export interface SkipResult {
  shouldSkip: boolean;
  reason: string;
}

/** 번역 결과 */
export interface TranslationResult {
  translated: boolean;
  original: string;
  result: string;
}
