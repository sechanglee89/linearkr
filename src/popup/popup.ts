/**
 * popup.ts — 팝업 UI 로직
 *
 * on/off 토글, debug 모드 토글을 chrome.storage.local과 동기화한다.
 */
import { loadSettings, saveSettings } from "../shared/storage.js";

async function initPopup(): Promise<void> {
  const settings = await loadSettings();

  // 프로덕션/릴리스 빌드에서는 디버그 행 숨김
  if (!__IS_DEV_BUILD__) {
    const debugRow = document.getElementById("debug-row");
    if (debugRow !== null) {
      debugRow.style.display = "none";
    }
  }

  const toggleBtn = document.getElementById(
    "toggle-enabled",
  ) as HTMLButtonElement | null;
  const toggleStateText = document.getElementById(
    "toggle-state-text",
  ) as HTMLElement | null;
  const debugCheckbox = document.getElementById(
    "toggle-debug",
  ) as HTMLInputElement | null;

  if (
    toggleBtn === null ||
    toggleStateText === null ||
    debugCheckbox === null
  ) {
    return;
  }

  // 초기 상태 반영
  applyEnabledState(settings.enabled, toggleBtn, toggleStateText);
  debugCheckbox.checked = settings.debug;

  // enabled 토글
  toggleBtn.addEventListener("click", async () => {
    const current = toggleBtn.getAttribute("aria-checked") === "true";
    const next = !current;
    applyEnabledState(next, toggleBtn, toggleStateText);
    await saveSettings({ enabled: next });
  });

  // debug 토글
  debugCheckbox.addEventListener("change", async () => {
    await saveSettings({ debug: debugCheckbox.checked });
  });
}

function applyEnabledState(
  enabled: boolean,
  btn: HTMLButtonElement,
  stateText: HTMLElement,
): void {
  btn.setAttribute("aria-checked", String(enabled));
  btn.classList.toggle("is-on", enabled);
  stateText.textContent = enabled ? "켜짐" : "꺼짐";
}

initPopup().catch((err: unknown) => {
  console.error("[LKH] popup init failed:", err);
});
