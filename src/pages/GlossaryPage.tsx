import { Link } from "react-router-dom";
import { MathText } from "../components/MathText";
import { GLOSSARY } from "../data/glossary";

export function GlossaryPage() {
  return (
    <article>
      <p className="muted">
        <Link to="/program/mathematics">Математика</Link>
      </p>
      <h1>Словарь</h1>
      <p className="muted">
        Короткие значения слов, как ими пользуются в этом курсе. Латинские строки на дипломе — часть
        церемонии Академии; здесь язык русский.
      </p>
      {GLOSSARY.map((section) => (
        <section key={section.title} className="theory">
          <h3>{section.title}</h3>
          <dl className="glossary-list">
            {section.entries.map((e) => (
              <div key={e.term} className="glossary-item">
                <dt>{e.term}</dt>
                <dd>
                  <MathText text={e.text} />
                </dd>
              </div>
            ))}
          </dl>
        </section>
      ))}
    </article>
  );
}
