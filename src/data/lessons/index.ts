import type { Lesson } from "../../types";
import { courses } from "../curriculum";
import { applyLessonExtras } from "../lessonExtras";

const modules = import.meta.glob("./courses/*.ts", { eager: true }) as Record<
  string,
  { lessons: Lesson[] }
>;

function collect(): Lesson[] {
  const list: Lesson[] = [];
  for (const mod of Object.values(modules)) {
    if (mod.lessons) list.push(...mod.lessons);
  }
  const order = new Map(courses.map((c, i) => [c.id, i]));
  return list.sort((a, b) => {
    const d = (order.get(a.courseId) ?? 99) - (order.get(b.courseId) ?? 99);
    if (d !== 0) return d;
    return a.id.localeCompare(b.id, "en");
  });
}

export const lessons: Lesson[] = collect().map(applyLessonExtras);

export function getLessons(): Lesson[] {
  return lessons;
}

/** Совместимость с экранами приложения. */
export function useLessons(): Lesson[] {
  return lessons;
}
