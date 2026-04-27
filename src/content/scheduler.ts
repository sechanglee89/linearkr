/**
 * scheduler.ts — debounce 기반 작업 스케줄러
 *
 * MutationObserver에서 들어온 변경 작업을 안전하게 처리한다.
 * Linear 같은 SPA는 DOM 변경이 매우 빠르게 발생하므로
 * debounce로 과도한 DOM scan을 방지한다.
 *
 * requestIdleCallback을 사용하지 않는다 — dictionary 룩업은 Map O(1)이므로
 * idle 대기 없이 즉시 실행해도 blocking 위험이 없다.
 * idle 대기는 FOUC(flash of untranslated content)의 주요 원인이다.
 */

const DEFAULT_DEBOUNCE_MS = 16; // ~1 frame

type Task = () => void;

/**
 * 스케줄러 인스턴스를 생성한다.
 * 여러 곳에서 schedule()을 호출해도 debounce_ms 이내에 하나로 병합된다.
 */
export function createScheduler(debounceMs: number = DEFAULT_DEBOUNCE_MS) {
  let timerId: ReturnType<typeof setTimeout> | null = null;
  let pendingTask: Task | null = null;

  function flush(): void {
    const task = pendingTask;
    pendingTask = null;
    timerId = null;
    if (task !== null) {
      task();
    }
  }

  return {
    /**
     * 작업을 예약한다. 이전 예약이 있으면 덮어쓴다(debounce).
     */
    schedule(task: Task): void {
      pendingTask = task;

      if (timerId !== null) {
        clearTimeout(timerId);
      }
      timerId = setTimeout(flush, debounceMs);
    },

    /**
     * 예약된 작업을 즉시 취소한다.
     */
    cancel(): void {
      if (timerId !== null) {
        clearTimeout(timerId);
        timerId = null;
      }
      pendingTask = null;
    },
  };
}

export type Scheduler = ReturnType<typeof createScheduler>;
