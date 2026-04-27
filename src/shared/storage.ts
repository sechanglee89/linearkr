/**
 * chrome.storage.local 접근 헬퍼
 * 외부 네트워크 요청 없음. 로컬 스토리지만 사용.
 */
import { type Settings, DEFAULT_SETTINGS } from "./types.js";

export async function loadSettings(): Promise<Settings> {
  return new Promise((resolve) => {
    chrome.storage.local.get(
      Object.keys(DEFAULT_SETTINGS),
      (items: Partial<Settings>) => {
        resolve({ ...DEFAULT_SETTINGS, ...items } as Settings);
      },
    );
  });
}

export async function saveSettings(partial: Partial<Settings>): Promise<void> {
  return new Promise((resolve) => {
    chrome.storage.local.set(partial, resolve);
  });
}

export function onSettingsChanged(
  callback: (changes: { [key: string]: chrome.storage.StorageChange }) => void,
): void {
  chrome.storage.onChanged.addListener((changes, area) => {
    if (area === "local") {
      callback(changes);
    }
  });
}
