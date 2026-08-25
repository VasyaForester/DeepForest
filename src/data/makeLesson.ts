import type { Lesson } from "../types";
import { lessonId } from "./curriculum";

export function makeLesson(
  courseId: string,
  index: number,
  title: string,
  body: Omit<Lesson, "id" | "title" | "courseId">,
): Lesson {
  return {
    id: lessonId(courseId, index),
    courseId,
    title,
    ...body,
  };
}
