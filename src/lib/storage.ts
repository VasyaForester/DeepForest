import type { AppState } from "../types";

const KEY = "dfa-math-v1";

const empty: AppState = { name: "", records: {} };

export function loadState(): AppState {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return empty;
    const parsed = JSON.parse(raw) as AppState;
    if (typeof parsed.name !== "string" || typeof parsed.records !== "object") {
      return empty;
    }
    return { name: parsed.name, records: parsed.records ?? {} };
  } catch {
    return empty;
  }
}

export function saveState(state: AppState): void {
  localStorage.setItem(KEY, JSON.stringify(state));
}

export function resetState(name: string): AppState {
  const next = { name, records: {} };
  saveState(next);
  return next;
}
