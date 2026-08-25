import { Certificate } from "../components/Certificate";
import { useLessons } from "../data/lessons";
import { programGpa } from "../lib/progress";
import { useStore } from "../state";
import { Link } from "react-router-dom";

export function DiplomaPage() {
  const { state } = useStore();
  const lessons = useLessons();
  const gpa = programGpa(lessons, state.records);
  const done = Object.keys(state.records).length;
  const date = new Intl.DateTimeFormat("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date());

  if (gpa === null) {
    return (
      <section className="card locked-panel">
        <h1>Диплом ещё не готов</h1>
        <p className="muted">
          Сертификат Deep Forest Academy выдаётся после всех занятий программы «Математика».
          Сейчас сдано {done} из {lessons.length}.
        </p>
        <Link className="btn" to="/program/mathematics">
          Продолжить учёбу
        </Link>
      </section>
    );
  }

  return (
    <div className="diploma-wrap">
      <div className="no-print" style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
        <h1 style={{ margin: 0 }}>Диплом</h1>
        <button className="btn secondary" type="button" onClick={() => window.print()}>
          Печать / PDF
        </button>
      </div>
      <Certificate name={state.name} gpa={gpa} date={date} />
    </div>
  );
}
