import { Link } from "react-router-dom";
import { courses, PROGRAM } from "../data/curriculum";
import { useLessons } from "../data/lessons";
import {
  currentGpa,
  isCourseComplete,
  isCourseUnlocked,
  isSchoolComplete,
  lessonsOf,
} from "../lib/progress";
import { formatGpa, letterFromGrade } from "../lib/grading";
import { useStore } from "../state";

export function ProgramMathPage() {
  const { state } = useStore();
  const lessons = useLessons();
  const gpa = currentGpa(state.records);
  const schoolDone = isSchoolComplete(lessons, state.records);
  const school = courses.filter((c) => c.phase === "school");
  const uni = courses.filter((c) => c.phase === "university");

  return (
    <div>
      <p className="pill">Программа</p>
      <h1>{PROGRAM.title}</h1>
      <p className="muted">
        {lessons.length} занятий. Школьный цикл открывается по курсам. Высшая математика — после
        полного закрытия школы; линал, матан, тервер, дискретная математика и теория чисел идут
        параллельно. Статистика, диффуры, ТФКП, топология, численные методы и оптимизация
        открываются по пререквизитам.
      </p>
      {gpa !== null && (
        <p>
          Текущий GPA: <strong>{formatGpa(gpa)}/4.0</strong> ({letterFromGrade(gpa)})
        </p>
      )}

      <h2>Школьная программа</h2>
      <div className="grid">
        {school.map((c) => {
          const list = lessonsOf(lessons, c.id);
          const unlocked = isCourseUnlocked(c, lessons, state.records);
          const complete = isCourseComplete(c.id, lessons, state.records);
          const done = list.filter((l) => state.records[l.id]).length;
          return (
            <Link
              key={c.id}
              to={unlocked ? `/course/${c.id}` : "#"}
              className="card"
              style={{ color: "inherit", opacity: unlocked ? 1 : 0.55, pointerEvents: unlocked ? "auto" : "none" }}
            >
              <span className={`pill ${complete ? "ok" : unlocked ? "" : "lock"}`}>
                {complete ? "Закрыт" : unlocked ? "Открыт" : "Закрыт до предыдущего курса"}
              </span>
              <h3>
                {c.title}
              </h3>
              <p className="muted">{c.description}</p>
              <p>
                {done}/{list.length} занятий
              </p>
            </Link>
          );
        })}
      </div>

      <h2>Высшая математика</h2>
      {!schoolDone && (
        <p className="muted">Откроется, когда будут сданы все школьные занятия.</p>
      )}
      <div className="grid">
        {uni.map((c) => {
          const list = lessonsOf(lessons, c.id);
          const unlocked = isCourseUnlocked(c, lessons, state.records);
          const complete = isCourseComplete(c.id, lessons, state.records);
          const done = list.filter((l) => state.records[l.id]).length;
          return (
            <Link
              key={c.id}
              to={unlocked ? `/course/${c.id}` : "#"}
              className="card"
              style={{ color: "inherit", opacity: unlocked ? 1 : 0.55, pointerEvents: unlocked ? "auto" : "none" }}
            >
              <span className={`pill ${complete ? "ok" : unlocked ? "" : "lock"}`}>
                {complete ? "Закрыт" : unlocked ? "Открыт" : "Ожидает пререквизиты"}
              </span>
              <h3>{c.title}</h3>
              <p className="muted">{c.subtitle}</p>
              <p className="muted">{c.description}</p>
              <p>
                {done}/{list.length} занятий
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
