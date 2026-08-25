import { Crest } from "./Crest";
import { RectorSignature } from "./Signature";
import { formatGpa } from "../lib/grading";

export function Certificate({ name, gpa, date }: { name: string; gpa: number; date: string }) {
  return (
    <article className="diploma">
      <p className="latin">Deep Forest Academy · Collegium Mathematicum</p>
      <Crest className="diploma-crest" />
      <h1>Диплом</h1>
      <p className="muted">учебная программа «Математика»</p>
      <p className="body">
        Уважаемый {name}, поздравляем с успешным окончанием учебной программы «Математика»
        Deep Forest Academy. Ваш GPA — {formatGpa(gpa)}/4.0. Желаем дальнейших открытий на
        тропах анализа, алгебры и геометрии.
      </p>
      <div className="sign-row">
        <div className="sign-block">
          <div className="muted">Дата</div>
          <strong>{date}</strong>
        </div>
        <div className="sign-block">
          <RectorSignature />
          <div>Ректор</div>
          <strong>Vasya Forester</strong>
        </div>
      </div>
    </article>
  );
}
