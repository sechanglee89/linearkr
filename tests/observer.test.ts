/**
 * tests/observer.test.ts
 * MutationObserver 기반 동작 검증 — addedNodes 처리, debounce, characterData 무시
 */
import { describe, it, expect, beforeEach, vi } from "vitest";
import { createScheduler } from "../src/content/scheduler.js";
import { createObserver } from "../src/content/observer.js";

describe("createScheduler", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  it("schedule 호출 후 debounce 시간이 지나면 task가 실행된다", () => {
    const scheduler = createScheduler(100);
    const task = vi.fn();

    scheduler.schedule(task);
    expect(task).not.toHaveBeenCalled();

    vi.advanceTimersByTime(100);
    // requestIdleCallback은 jsdom에서 없을 수 있으므로 setTimeout fallback 경유
    vi.runAllTimers();

    expect(task).toHaveBeenCalledTimes(1);
  });

  it("debounce 시간 내에 여러 번 schedule하면 마지막 task만 실행된다", () => {
    const scheduler = createScheduler(100);
    const task1 = vi.fn();
    const task2 = vi.fn();
    const task3 = vi.fn();

    scheduler.schedule(task1);
    scheduler.schedule(task2);
    scheduler.schedule(task3);

    vi.runAllTimers();

    expect(task1).not.toHaveBeenCalled();
    expect(task2).not.toHaveBeenCalled();
    expect(task3).toHaveBeenCalledTimes(1);
  });

  it("cancel 후에는 task가 실행되지 않는다", () => {
    const scheduler = createScheduler(100);
    const task = vi.fn();

    scheduler.schedule(task);
    scheduler.cancel();

    vi.runAllTimers();

    expect(task).not.toHaveBeenCalled();
  });
});

describe("createObserver", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
    vi.useFakeTimers();
  });

  it("addedNodes가 발생하면 handler가 호출된다", async () => {
    const handler = vi.fn();
    const scheduler = createScheduler(10);
    const obs = createObserver(handler, scheduler);

    obs.observe();

    const div = document.createElement("div");
    document.body.appendChild(div);

    // MutationObserver는 microtask로 동작 — 타이머를 flush해야 함
    await Promise.resolve();
    vi.runAllTimers();
    vi.runAllTimers(); // requestIdleCallback fallback의 setTimeout도 flush

    expect(handler).toHaveBeenCalledTimes(1);
    const calledWith = handler.mock.calls[0]?.[0] as Element[];
    expect(calledWith).toContain(div);

    obs.disconnect();
  });

  it("disconnect 후에는 handler가 호출되지 않는다", async () => {
    const handler = vi.fn();
    const scheduler = createScheduler(10);
    const obs = createObserver(handler, scheduler);

    obs.observe();
    obs.disconnect();

    const div = document.createElement("div");
    document.body.appendChild(div);

    await Promise.resolve();
    vi.runAllTimers();

    expect(handler).not.toHaveBeenCalled();
  });

  it("Text 노드 추가(characterData 변경 아님)만 처리한다", async () => {
    const handler = vi.fn();
    const scheduler = createScheduler(10);
    const obs = createObserver(handler, scheduler);

    obs.observe();

    // 텍스트 노드 변경 (기존 노드의 characterData 변경) — 처리 안 해야 함
    const existing = document.createElement("p");
    existing.textContent = "hello";
    document.body.appendChild(existing);

    await Promise.resolve();
    vi.runAllTimers();
    vi.runAllTimers();

    // existing은 addedNode이므로 handler가 호출됨 (텍스트 변경이 아니라 엘리먼트 추가)
    handler.mockClear();

    // 이미 존재하는 노드의 텍스트 변경 — childList 변경 아님, characterData 변경
    existing.firstChild!.textContent = "world";

    await Promise.resolve();
    vi.runAllTimers();
    vi.runAllTimers();

    // characterData 변경은 observe 옵션에 없으므로 handler 호출 안 됨
    expect(handler).not.toHaveBeenCalled();

    obs.disconnect();
  });
});
