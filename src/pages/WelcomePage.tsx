import { useState, type FormEvent } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Crest } from "../components/Crest";
import { useStore } from "../state";

export function WelcomePage() {
  const { state, setName } = useStore();
  const nav = useNavigate();
  const [name, setLocal] = useState(state.name);
  const [err, setErr] = useState("");

  if (state.name) return <Navigate to="/programs" replace />;

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const n = name.trim();
    if (n.length < 2) {
      setErr("Укажите имя — оно появится на дипломе.");
      return;
    }
    setName(n);
    nav("/programs");
  }

  return (
    <div className="main">
    <section className="card hero">
      <Crest />
      <div>
        <h1>Deep Forest Academy</h1>
        <p className="muted">Онлайн-тренажер по математике</p>
        <form onSubmit={onSubmit}>
          <label className="field">
            Имя для диплома
            <input
              value={name}
              onChange={(e) => setLocal(e.target.value)}
              placeholder="Например, Анна Лесная"
              autoFocus
            />
          </label>
          {err && <p style={{ color: "var(--danger)" }}>{err}</p>}
          <button className="btn" type="submit">
            Поступить в академию
          </button>
        </form>
      </div>
    </section>
    </div>
  );
}
