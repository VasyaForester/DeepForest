import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import type { AppState, LessonRecord } from "./types";
import { loadState, saveState } from "./lib/storage";

interface Store {
  state: AppState;
  setName: (name: string) => void;
  saveRecord: (lessonId: string, record: LessonRecord) => void;
  resetProgress: () => void;
}

const Ctx = createContext<Store | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AppState>(() => loadState());

  const api = useMemo<Store>(
    () => ({
      state,
      setName: (name) => {
        const next = { ...state, name: name.trim() };
        setState(next);
        saveState(next);
      },
      saveRecord: (lessonId, record) => {
        const prev = state.records[lessonId];
        const keep = prev && prev.grade >= record.grade ? prev : record;
        const next = { ...state, records: { ...state.records, [lessonId]: keep } };
        setState(next);
        saveState(next);
      },
      resetProgress: () => {
        const next = { name: state.name, records: {} };
        setState(next);
        saveState(next);
      },
    }),
    [state],
  );

  return <Ctx.Provider value={api}>{children}</Ctx.Provider>;
}

export function useStore(): Store {
  const v = useContext(Ctx);
  if (!v) throw new Error("Store missing");
  return v;
}
