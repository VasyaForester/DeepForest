import { Link, Navigate, useParams } from "react-router-dom";
import { courseById, isCourseUnlocked, isLessonUnlocked, lessonsOf } from "../lib/progress";
import { useLessons } from "../data/lessons";
import { useStore } from "../state";
import { letterFromGrade } from "../lib/grading";

export function CoursePage() {
  const { courseId } = useParams();
  const lessons = useLessons();
  const { state } = useStore();
  const course = courseId ? courseById(courseId) : undefined;
  if (!course) return <Navigate to="/program/mathematics" replace />;
  const list = lessonsOf(lessons, course.id);
  const unlocked = isCourseUnlocked(course, lessons, state.records);

  if (!unlocked) {
    return (
      <section className="card locked-panel">
        <h1>{course.title}</h1>
        <p className="muted">
          Курс ещё закрыт. Завершите школьную программу и указанные пререквизиты.
        </p>
        <Link className="btn secondary" to="/program/mathematics">
          К программе
        </Link>
      </section>
    );
  }

  return (
    <div>
      <p className="muted">
        <Link to="/program/mathematics">Математика</Link> / {course.phase === "school" ? "школа" : "вуз"}
      </p>
      <h1>{course.title}</h1>
      <p className="muted">{course.description}</p>
      <div className="lesson-list">
        {list.map((l, i) => {
          const rec = state.records[l.id];
          const open = isLessonUnlocked(l, lessons, state.records);
          const inner = (
            <>
              <div className="num">{i + 1}</div>
              <div>
                <strong>{l.title}</strong>
              </div>
              <div>
                {rec ? (
                  <span className="pill ok">
                    {rec.grade.toFixed(1)} ({letterFromGrade(rec.grade)})
                  </span>
                ) : open ? (
                  <span className="pill">Открыт</span>
                ) : (
                  <span className="pill lock">Закрыт</span>
                )}
              </div>
            </>
          );
          if (!open) {
            return (
              <div key={l.id} className="lesson-row locked">
                {inner}
              </div>
            );
          }
          return (
            <Link key={l.id} className="lesson-row" to={`/lesson/${l.id}`}>
              {inner}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
