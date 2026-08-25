import { makeLesson } from "../../makeLesson";
import type { Lesson } from "../../../types";

export const lessons: Lesson[] = [
  makeLesson("school-trig", 0, "Тригонометрический круг", {
    theory: String.raw`Единичная окружность (тригонометрический круг) — окружность радиуса $1$ с центром в начале координат. Точке, соответствующей углу $\alpha$ (отложенному от луча $Ox$ против часовой стрелки), приписывают координаты $(\cos\alpha;\,\sin\alpha)$. Таким образом, косинус — абсцисса, синус — ордината.

Радианная мера: развёрнутый угол равен $\pi$, полный оборот — $2\pi$. Стандартные углы: $0$, $\dfrac{\pi}{6}$, $\dfrac{\pi}{4}$, $\dfrac{\pi}{3}$, $\dfrac{\pi}{2}$, $\pi$, $\dfrac{3\pi}{2}$, $2\pi$.

Знаки функций по четвертям: в I все положительны; во II положителен синус; в III — тангенс (и котангенс); в IV — косинус. Тангенс $\tan\alpha=\dfrac{\sin\alpha}{\cos\alpha}$ не определён, когда $\cos\alpha=0$, то есть при $\alpha=\dfrac{\pi}{2}+\pi k$, $k\in\mathbb{Z}$.`,
    examples: [
      {
        title: "Координаты точки на круге",
        problem: String.raw`Найдите координаты точки единичной окружности, соответствующей углу $\dfrac{\pi}{3}$.`,
        solution: String.raw`$\cos\dfrac{\pi}{3}=\dfrac{1}{2}$, $\sin\dfrac{\pi}{3}=\dfrac{\sqrt{3}}{2}$. Точка $\left(\dfrac{1}{2};\,\dfrac{\sqrt{3}}{2}\right)$.`,
      },
      {
        title: "Знак в четверти",
        problem: String.raw`Определите знак $\sin\alpha$, если угол $\alpha$ лежит в третьей четверти.`,
        solution: String.raw`В III четверти ординаты точек отрицательны, поэтому $\sin\alpha<0$.`,
      },
    ],
    sample: {
      id: "tr01-s",
      type: "open",
      prompt: String.raw`Найдите $\sin\dfrac{\pi}{2}$.`,
      accepted: ["1", "1.0"],
      explanation: String.raw`Точка $\dfrac{\pi}{2}$ имеет координаты $(0;1)$, ордината равна $1$.`,
      solution: String.raw`Углу $\dfrac{\pi}{2}$ на единичной окружности соответствует точка $(0;1)$. Синус — ордината этой точки, следовательно $\sin\dfrac{\pi}{2}=1$.`,
    },
    problems: [
      {
        id: "tr01-q1",
        type: "choice",
        prompt: String.raw`На единичной окружности косинус угла — это`,
        options: [
          "ордината точки",
          "абсцисса точки",
          "радиус окружности",
          "длина дуги",
        ],
        answerIndex: 1,
        explanation: String.raw`По определению $\cos\alpha$ — абсцисса точки круга.`,
      },
      {
        id: "tr01-q2",
        type: "open",
        prompt: String.raw`Найдите $\cos 0$.`,
        accepted: ["1", "1.0"],
        explanation: String.raw`Точка угла $0$ есть $(1;0)$, абсцисса равна $1$.`,
      },
      {
        id: "tr01-q3",
        type: "choice",
        prompt: String.raw`В какой четверти синус положителен, а косинус отрицателен?`,
        options: ["I", "II", "III", "IV"],
        answerIndex: 1,
        explanation: String.raw`II четверть: $x<0$, $y>0$.`,
      },
      {
        id: "tr01-q4",
        type: "open",
        prompt: String.raw`Найдите $\sin\pi$.`,
        accepted: ["0", "0.0"],
        explanation: String.raw`Точка $\pi$ есть $(-1;0)$, ордината равна $0$.`,
      },
      {
        id: "tr01-q5",
        type: "choice",
        prompt: String.raw`Тангенс не определён, когда`,
        options: [
          String.raw`$\sin\alpha=0$`,
          String.raw`$\cos\alpha=0$`,
          String.raw`$\alpha=0$`,
          String.raw`$\alpha=\pi$`,
        ],
        answerIndex: 1,
        explanation: String.raw`$\tan\alpha=\dfrac{\sin\alpha}{\cos\alpha}$; знаменатель равен нулю при $\cos\alpha=0$.`,
      },
      {
        id: "tr01-q6",
        type: "open",
        prompt: String.raw`Найдите $\cos\pi$.`,
        accepted: ["-1", "-1.0"],
        explanation: String.raw`Точка $\pi$ — $(-1;0)$.`,
      },
      {
        id: "tr01-q7",
        type: "choice",
        prompt: String.raw`Полный оборот в радианах равен`,
        options: [String.raw`$\pi$`, String.raw`$2\pi$`, String.raw`$\dfrac{\pi}{2}$`, "$180$"],
        answerIndex: 1,
        explanation: String.raw`$360^{\circ}=2\pi$ радиан.`,
      },
      {
        id: "tr01-q8",
        type: "open",
        prompt: String.raw`Найдите $\sin 0$.`,
        accepted: ["0", "0.0"],
        explanation: String.raw`Точка $(1;0)$, ордината $0$.`,
      },
    ],
    sources: [
      {
        authors: "Алимов Ш.А., Колягин Ю.М., Ткачёва М.В. и др.",
        title: "Алгебра и начала анализа. 10–11 классы",
        note: "Единичная окружность, синус и косинус числа",
      },
      {
        authors: "Никольский С.М., Потапов М.К., Решетников Н.Н., Шевкин А.В.",
        title: "Алгебра и начала математического анализа. 10–11 классы",
        note: "Тригонометрический круг",
      },
    ],
  }),

  makeLesson("school-trig", 1, "Основное тождество и табличные значения", {
    theory: String.raw`Основное тригонометрическое тождество: $\sin^{2}\alpha+\cos^{2}\alpha=1$ для всех $\alpha$, при которых обе функции определены (то есть для всех действительных $\alpha$). Следствия: $1+\tan^{2}\alpha=\dfrac{1}{\cos^{2}\alpha}$ и $1+\cot^{2}\alpha=\dfrac{1}{\sin^{2}\alpha}$ там, где знаменатели не равны нулю.

Табличные значения:
$\sin 0^{\circ}=0$, $\cos 0^{\circ}=1$;
$\sin 30^{\circ}=\dfrac{1}{2}$, $\cos 30^{\circ}=\dfrac{\sqrt{3}}{2}$, $\tan 30^{\circ}=\dfrac{1}{\sqrt{3}}$;
$\sin 45^{\circ}=\dfrac{\sqrt{2}}{2}$, $\cos 45^{\circ}=\dfrac{\sqrt{2}}{2}$, $\tan 45^{\circ}=1$;
$\sin 60^{\circ}=\dfrac{\sqrt{3}}{2}$, $\cos 60^{\circ}=\dfrac{1}{2}$, $\tan 60^{\circ}=\sqrt{3}$;
$\sin 90^{\circ}=1$, $\cos 90^{\circ}=0$.

В радианах те же углы: $30^{\circ}=\dfrac{\pi}{6}$, $45^{\circ}=\dfrac{\pi}{4}$, $60^{\circ}=\dfrac{\pi}{3}$, $90^{\circ}=\dfrac{\pi}{2}$.`,
    examples: [
      {
        title: "Дополнение до единицы",
        problem: String.raw`Известно, что $\sin\alpha=\dfrac{3}{5}$ и угол $\alpha$ острый. Найдите $\cos\alpha$.`,
        solution: String.raw`$\cos^{2}\alpha=1-\sin^{2}\alpha=1-\dfrac{9}{25}=\dfrac{16}{25}$. Так как $\alpha$ острый, $\cos\alpha>0$, поэтому $\cos\alpha=\dfrac{4}{5}$.`,
      },
      {
        title: "Табличное значение",
        problem: String.raw`Найдите $\sin 30^{\circ}$.`,
        solution: String.raw`По таблице $\sin 30^{\circ}=\dfrac{1}{2}$.`,
      },
    ],
    sample: {
      id: "tr02-s",
      type: "open",
      prompt: String.raw`Найдите $\cos 60^{\circ}$.`,
      accepted: ["1/2", "0.5", "frac{1}{2}"],
      explanation: String.raw`Табличное значение: $\cos 60^{\circ}=\dfrac{1}{2}$.`,
      solution: String.raw`Угол $60^{\circ}$ входит в стандартную таблицу. Косинус этого угла равен $\dfrac{1}{2}$. Тот же результат даёт $\cos\dfrac{\pi}{3}=\dfrac{1}{2}$.`,
    },
    problems: [
      {
        id: "tr02-q1",
        type: "choice",
        prompt: String.raw`Значение $\sin 90^{\circ}$ равно`,
        options: ["$0$", String.raw`$\dfrac{1}{2}$`, "$1$", "не определено"],
        answerIndex: 2,
        explanation: String.raw`$\sin 90^{\circ}=1$.`,
      },
      {
        id: "tr02-q2",
        type: "open",
        prompt: String.raw`Найдите $\sin\dfrac{\pi}{6}$.`,
        accepted: ["1/2", "0.5", "frac{1}{2}"],
        explanation: String.raw`$\dfrac{\pi}{6}=30^{\circ}$, $\sin 30^{\circ}=\dfrac{1}{2}$.`,
      },
      {
        id: "tr02-q3",
        type: "choice",
        prompt: String.raw`Значение $\tan 45^{\circ}$ равно`,
        options: ["$0$", String.raw`$\dfrac{1}{2}$`, "$1$", String.raw`$\sqrt{3}$`],
        answerIndex: 2,
        explanation: String.raw`$\sin 45^{\circ}=\cos 45^{\circ}$, поэтому тангенс равен $1$.`,
      },
      {
        id: "tr02-q4",
        type: "open",
        prompt: String.raw`Найдите $\cos\dfrac{\pi}{3}$.`,
        accepted: ["1/2", "0.5", "frac{1}{2}"],
        explanation: String.raw`$\dfrac{\pi}{3}=60^{\circ}$, $\cos 60^{\circ}=\dfrac{1}{2}$.`,
      },
      {
        id: "tr02-q5",
        type: "choice",
        prompt: String.raw`Если $\cos\alpha=\dfrac{5}{13}$ и $\alpha$ острый, то $\sin\alpha$ равен`,
        options: [
          String.raw`$\dfrac{12}{13}$`,
          String.raw`$\dfrac{5}{12}$`,
          String.raw`$\dfrac{13}{5}$`,
          String.raw`$\dfrac{8}{13}$`,
        ],
        answerIndex: 0,
        explanation: String.raw`$\sin^{2}\alpha=1-\dfrac{25}{169}=\dfrac{144}{169}$, $\sin\alpha=\dfrac{12}{13}$.`,
      },
      {
        id: "tr02-q6",
        type: "open",
        prompt: String.raw`Найдите $\cos 90^{\circ}$.`,
        accepted: ["0", "0.0"],
        explanation: String.raw`$\cos 90^{\circ}=0$.`,
      },
      {
        id: "tr02-q7",
        type: "choice",
        prompt: String.raw`Основное тождество утверждает, что`,
        options: [
          String.raw`$\sin\alpha+\cos\alpha=1$`,
          String.raw`$\sin^{2}\alpha+\cos^{2}\alpha=1$`,
          String.raw`$\sin\alpha\cdot\cos\alpha=1$`,
          String.raw`$\tan\alpha+\cot\alpha=1$`,
        ],
        answerIndex: 1,
        explanation: String.raw`Сумма квадратов синуса и косинуса равна $1$.`,
      },
      {
        id: "tr02-q8",
        type: "open",
        prompt: String.raw`Найдите $\tan 60^{\circ}$. Ответ запишите в виде $\sqrt{n}$, указав $n$.`,
        accepted: ["3", "3.0"],
        explanation: String.raw`$\tan 60^{\circ}=\sqrt{3}$, поэтому $n=3$.`,
      },
    ],
    sources: [
      {
        authors: "Колмогоров А.Н., Абрамов А.М., Дудницын Ю.П. и др.",
        title: "Алгебра и начала анализа. 10–11 классы",
        note: "Основное тождество, таблица значений",
      },
      {
        authors: "Мордкович А.Г.",
        title: "Алгебра и начала математического анализа",
        note: "Соотношения между тригонометрическими функциями",
      },
    ],
  }),

  makeLesson("school-trig", 2, "Формулы сложения и двойного угла", {
    theory: String.raw`Формулы сложения:
$\sin(\alpha+\beta)=\sin\alpha\cos\beta+\cos\alpha\sin\beta$,
$\sin(\alpha-\beta)=\sin\alpha\cos\beta-\cos\alpha\sin\beta$,
$\cos(\alpha+\beta)=\cos\alpha\cos\beta-\sin\alpha\sin\beta$,
$\cos(\alpha-\beta)=\cos\alpha\cos\beta+\sin\alpha\sin\beta$,
$\tan(\alpha\pm\beta)=\dfrac{\tan\alpha\pm\tan\beta}{1\mp\tan\alpha\tan\beta}$ (где выражения определены).

Формулы двойного угла получают подстановкой $\beta=\alpha$:
$\sin 2\alpha=2\sin\alpha\cos\alpha$,
$\cos 2\alpha=\cos^{2}\alpha-\sin^{2}\alpha=2\cos^{2}\alpha-1=1-2\sin^{2}\alpha$,
$\tan 2\alpha=\dfrac{2\tan\alpha}{1-\tan^{2}\alpha}$.`,
    examples: [
      {
        title: "Синус суммы",
        problem: String.raw`Вычислите $\sin 75^{\circ}$, представив угол как $45^{\circ}+30^{\circ}$.`,
        solution: String.raw`$\sin 75^{\circ}=\sin 45^{\circ}\cos 30^{\circ}+\cos 45^{\circ}\sin 30^{\circ}=\dfrac{\sqrt{2}}{2}\cdot\dfrac{\sqrt{3}}{2}+\dfrac{\sqrt{2}}{2}\cdot\dfrac{1}{2}=\dfrac{\sqrt{6}+\sqrt{2}}{4}$.`,
      },
      {
        title: "Двойной угол",
        problem: String.raw`Дано $\sin\alpha=\dfrac{3}{5}$, $\cos\alpha=\dfrac{4}{5}$. Найдите $\sin 2\alpha$.`,
        solution: String.raw`$\sin 2\alpha=2\sin\alpha\cos\alpha=2\cdot\dfrac{3}{5}\cdot\dfrac{4}{5}=\dfrac{24}{25}$.`,
      },
    ],
    sample: {
      id: "tr03-s",
      type: "open",
      prompt: String.raw`Вычислите $2\sin\dfrac{\pi}{6}\cos\dfrac{\pi}{6}$.`,
      accepted: [
        "√3/2",
        "sqrt{3}/2",
        "frac{sqrt{3}}{2}",
        "frac{√3}{2}",
        "\\frac{\\sqrt{3}}{2}",
      ],
      explanation: String.raw`$2\cdot\dfrac{1}{2}\cdot\dfrac{\sqrt{3}}{2}=\dfrac{\sqrt{3}}{2}$. Это же $\sin\dfrac{\pi}{3}$.`,
      solution: String.raw`По формуле двойного угла это $\sin\dfrac{\pi}{3}$. Напрямую: $\sin\dfrac{\pi}{6}=\dfrac{1}{2}$, $\cos\dfrac{\pi}{6}=\dfrac{\sqrt{3}}{2}$, произведение $2\cdot\dfrac{1}{2}\cdot\dfrac{\sqrt{3}}{2}=\dfrac{\sqrt{3}}{2}$.`,
    },
    problems: [
      {
        id: "tr03-q1",
        type: "choice",
        prompt: String.raw`Формула $\sin 2\alpha$ имеет вид`,
        options: [
          String.raw`$\sin^{2}\alpha+\cos^{2}\alpha$`,
          String.raw`$2\sin\alpha\cos\alpha$`,
          String.raw`$\sin\alpha\cos\alpha$`,
          String.raw`$2\sin\alpha$`,
        ],
        answerIndex: 1,
        explanation: String.raw`$\sin 2\alpha=2\sin\alpha\cos\alpha$.`,
      },
      {
        id: "tr03-q2",
        type: "open",
        prompt: String.raw`Найдите $\sin 2\alpha$, если $\sin\alpha=\dfrac{3}{5}$ и $\cos\alpha=\dfrac{4}{5}$.`,
        accepted: ["24/25", "0.96", "frac{24}{25}"],
        explanation: String.raw`$2\cdot\dfrac{3}{5}\cdot\dfrac{4}{5}=\dfrac{24}{25}$.`,
      },
      {
        id: "tr03-q3",
        type: "choice",
        prompt: String.raw`Значение $\cos 2\alpha$ при $\cos\alpha=\dfrac{3}{5}$ равно`,
        options: [
          String.raw`$\dfrac{7}{25}$`,
          String.raw`$-\dfrac{7}{25}$`,
          String.raw`$\dfrac{9}{25}$`,
          String.raw`$\dfrac{6}{5}$`,
        ],
        answerIndex: 1,
        explanation: String.raw`$\cos 2\alpha=2\cos^{2}\alpha-1=2\cdot\dfrac{9}{25}-1=-\dfrac{7}{25}$.`,
      },
      {
        id: "tr03-q4",
        type: "open",
        prompt: String.raw`Найдите $\tan 2\alpha$, если $\tan\alpha=\dfrac{1}{2}$.`,
        accepted: ["4/3", "frac{4}{3}"],
        explanation: String.raw`$\dfrac{2\cdot(1/2)}{1-(1/2)^{2}}=\dfrac{1}{3/4}=\dfrac{4}{3}$.`,
      },
      {
        id: "tr03-q5",
        type: "choice",
        prompt: String.raw`$\cos(\alpha+\beta)$ равно`,
        options: [
          String.raw`$\cos\alpha\cos\beta+\sin\alpha\sin\beta$`,
          String.raw`$\cos\alpha\cos\beta-\sin\alpha\sin\beta$`,
          String.raw`$\sin\alpha\cos\beta+\cos\alpha\sin\beta$`,
          String.raw`$\cos\alpha+\cos\beta$`,
        ],
        answerIndex: 1,
        explanation: String.raw`Косинус суммы: разность произведений косинусов и синусов.`,
      },
      {
        id: "tr03-q6",
        type: "open",
        prompt: String.raw`Вычислите $\sin\dfrac{\pi}{2}$ по формуле синуса суммы $\dfrac{\pi}{6}+\dfrac{\pi}{3}$.`,
        accepted: ["1", "1.0"],
        explanation: String.raw`$\dfrac{1}{2}\cdot\dfrac{1}{2}+\dfrac{\sqrt{3}}{2}\cdot\dfrac{\sqrt{3}}{2}=\dfrac{1}{4}+\dfrac{3}{4}=1$.`,
      },
      {
        id: "tr03-q7",
        type: "choice",
        prompt: String.raw`Если $\sin\alpha=\cos\alpha=\dfrac{\sqrt{2}}{2}$, то $\sin 2\alpha$ равен`,
        options: ["$0$", String.raw`$\dfrac{1}{2}$`, "$1$", String.raw`$\sqrt{2}$`],
        answerIndex: 2,
        explanation: String.raw`$2\cdot\dfrac{\sqrt{2}}{2}\cdot\dfrac{\sqrt{2}}{2}=1$ (угол $\alpha=\dfrac{\pi}{4}$, двойной — $\dfrac{\pi}{2}$).`,
      },
    ],
    sources: [
      {
        authors: "Алимов Ш.А., Колягин Ю.М., Ткачёва М.В. и др.",
        title: "Алгебра и начала анализа. 10–11 классы",
        note: "Формулы сложения и двойного угла",
      },
      {
        authors: "Никольский С.М., Потапов М.К., Решетников Н.Н., Шевкин А.В.",
        title: "Алгебра и начала математического анализа. 10–11 классы",
        note: "Преобразования тригонометрических выражений",
      },
    ],
  }),

  makeLesson("school-trig", 3, "Тригонометрические уравнения", {
    theory: String.raw`Простейшие уравнения решают через общие семейства решений ($k\in\mathbb{Z}$).

$\sin x=a$ при $|a|\leq 1$: $x=(-1)^{k}\arcsin a+\pi k$. Эквивалентная запись: $x=\arcsin a+2\pi k$ или $x=\pi-\arcsin a+2\pi k$.

$\cos x=a$ при $|a|\leq 1$: $x=\pm\arccos a+2\pi k$.

$\tan x=a$ (для любого $a$): $x=\arctan a+\pi k$.

Частные случаи: $\sin x=0$ даёт $x=\pi k$; $\sin x=1$ даёт $x=\dfrac{\pi}{2}+2\pi k$; $\cos x=0$ даёт $x=\dfrac{\pi}{2}+\pi k$; $\cos x=-1$ даёт $x=\pi+2\pi k$. Если $|a|>1$, уравнений $\sin x=a$ и $\cos x=a$ решений нет.`,
    examples: [
      {
        title: "Уравнение с синусом",
        problem: String.raw`Решите уравнение $\sin x=\dfrac{1}{2}$.`,
        solution: String.raw`$\arcsin\dfrac{1}{2}=\dfrac{\pi}{6}$. Семейства: $x=\dfrac{\pi}{6}+2\pi k$ и $x=\dfrac{5\pi}{6}+2\pi k$, $k\in\mathbb{Z}$.`,
      },
      {
        title: "Уравнение с косинусом",
        problem: String.raw`Решите уравнение $\cos x=0$.`,
        solution: String.raw`$\arccos 0=\dfrac{\pi}{2}$, поэтому $x=\pm\dfrac{\pi}{2}+2\pi k$, что объединяют в $x=\dfrac{\pi}{2}+\pi k$, $k\in\mathbb{Z}$.`,
      },
    ],
    sample: {
      id: "tr04-s",
      type: "open",
      prompt: String.raw`Найдите наименьший положительный корень уравнения $\sin x=\dfrac{1}{2}$.`,
      accepted: ["π/6", "pi/6", "frac{π}{6}", "frac{pi}{6}", "\\frac{\\pi}{6}"],
      explanation: String.raw`Наименьший положительный корень — $\dfrac{\pi}{6}$ (второй в периоде — $\dfrac{5\pi}{6}$).`,
      solution: String.raw`Общее решение: $x=\dfrac{\pi}{6}+2\pi k$ и $x=\dfrac{5\pi}{6}+2\pi k$. При $k=0$ положительные корни — $\dfrac{\pi}{6}$ и $\dfrac{5\pi}{6}$. Наименьший из них равен $\dfrac{\pi}{6}$. Проверка: $\sin\dfrac{\pi}{6}=\dfrac{1}{2}$.`,
    },
    problems: [
      {
        id: "tr04-q1",
        type: "choice",
        prompt: String.raw`Общее решение уравнения $\sin x=1$ имеет вид`,
        options: [
          String.raw`$x=\pi k$`,
          String.raw`$x=\dfrac{\pi}{2}+2\pi k$`,
          String.raw`$x=\pi+2\pi k$`,
          String.raw`$x=2\pi k$`,
        ],
        answerIndex: 1,
        explanation: String.raw`Синус равен $1$ в точках $\dfrac{\pi}{2}+2\pi k$.`,
      },
      {
        id: "tr04-q2",
        type: "open",
        prompt: String.raw`Вычислите $\sin\dfrac{\pi}{6}$.`,
        accepted: ["1/2", "0.5", "frac{1}{2}"],
        explanation: String.raw`Табличное значение $\dfrac{1}{2}$.`,
      },
      {
        id: "tr04-q3",
        type: "choice",
        prompt: String.raw`Наименьший неотрицательный корень уравнения $\cos x=1$ равен`,
        options: ["$0$", String.raw`$\pi$`, String.raw`$\dfrac{\pi}{2}$`, String.raw`$2\pi$`],
        answerIndex: 0,
        explanation: String.raw`$x=2\pi k$; при $k=0$ получаем $0$.`,
      },
      {
        id: "tr04-q4",
        type: "open",
        prompt: String.raw`Найдите наименьший положительный корень уравнения $\tan x=1$.`,
        accepted: ["π/4", "pi/4", "frac{π}{4}", "frac{pi}{4}", "\\frac{\\pi}{4}"],
        explanation: String.raw`$x=\dfrac{\pi}{4}+\pi k$; при $k=0$ получаем $\dfrac{\pi}{4}$.`,
      },
      {
        id: "tr04-q5",
        type: "choice",
        prompt: String.raw`Уравнение $\cos x=2$`,
        options: [
          "имеет корень $x=0$",
          "не имеет решений",
          String.raw`имеет корни $x=\pm\arccos 2$`,
          "имеет ровно один корень",
        ],
        answerIndex: 1,
        explanation: String.raw`Значения косинуса лежат в $[-1;1]$, число $2$ вне этого отрезка.`,
      },
      {
        id: "tr04-q6",
        type: "open",
        prompt: String.raw`Найдите наименьший положительный корень уравнения $\cos x=\dfrac{1}{2}$.`,
        accepted: ["π/3", "pi/3", "frac{π}{3}", "frac{pi}{3}", "\\frac{\\pi}{3}"],
        explanation: String.raw`$x=\pm\dfrac{\pi}{3}+2\pi k$; наименьший положительный — $\dfrac{\pi}{3}$.`,
      },
      {
        id: "tr04-q7",
        type: "choice",
        prompt: String.raw`Общее решение $\sin x=0$ — это`,
        options: [
          String.raw`$x=\pi k$`,
          String.raw`$x=2\pi k$`,
          String.raw`$x=\dfrac{\pi}{2}+\pi k$`,
          String.raw`$x=\dfrac{\pi}{2}+2\pi k$`,
        ],
        answerIndex: 0,
        explanation: String.raw`Синус равен нулю в целых кратных $\pi$.`,
      },
      {
        id: "tr04-q8",
        type: "open",
        prompt: String.raw`Найдите наименьший положительный корень уравнения $\cos x=-1$.`,
        accepted: ["π", "pi", "\\pi"],
        explanation: String.raw`$x=\pi+2\pi k$; при $k=0$ получаем $\pi$.`,
      },
    ],
    sources: [
      {
        authors: "Мордкович А.Г.",
        title: "Алгебра и начала математического анализа",
        note: "Простейшие тригонометрические уравнения",
      },
      {
        authors: "Колмогоров А.Н., Абрамов А.М., Дудницын Ю.П. и др.",
        title: "Алгебра и начала анализа. 10–11 классы",
        note: "Общие формулы решений",
      },
    ],
  }),

  makeLesson("school-trig", 4, "Обратные тригонометрические функции", {
    theory: String.raw`Арксинус $\arcsin a$ при $a\in[-1;1]$ — единственное число $x\in\left[-\dfrac{\pi}{2};\,\dfrac{\pi}{2}\right]$ такое, что $\sin x=a$. Арккосинус $\arccos a$ — единственное $x\in[0;\,\pi]$ с $\cos x=a$. Арктангенс $\arctan a$ определён для всех действительных $a$ и принимает значения из $\left(-\dfrac{\pi}{2};\,\dfrac{\pi}{2}\right)$.

Табличные значения: $\arcsin\dfrac{1}{2}=\dfrac{\pi}{6}$, $\arcsin\dfrac{\sqrt{2}}{2}=\dfrac{\pi}{4}$, $\arcsin 1=\dfrac{\pi}{2}$, $\arcsin 0=0$, $\arcsin(-1)=-\dfrac{\pi}{2}$;
$\arccos\dfrac{1}{2}=\dfrac{\pi}{3}$, $\arccos 0=\dfrac{\pi}{2}$, $\arccos(-1)=\pi$, $\arccos 1=0$, $\arccos\left(-\dfrac{1}{2}\right)=\dfrac{2\pi}{3}$;
$\arctan 1=\dfrac{\pi}{4}$, $\arctan 0=0$, $\arctan\sqrt{3}=\dfrac{\pi}{3}$.

Тождества $\sin(\arcsin a)=a$ и $\cos(\arccos a)=a$ на $[-1;1]$; $\tan(\arctan a)=a$ на $\mathbb{R}$.`,
    examples: [
      {
        title: "Арксинус",
        problem: String.raw`Вычислите $\arcsin\dfrac{\sqrt{2}}{2}$.`,
        solution: String.raw`Ищем $x\in\left[-\dfrac{\pi}{2};\,\dfrac{\pi}{2}\right]$ с $\sin x=\dfrac{\sqrt{2}}{2}$. Это $x=\dfrac{\pi}{4}$.`,
      },
      {
        title: "Арккосинус отрицательного аргумента",
        problem: String.raw`Вычислите $\arccos\left(-\dfrac{1}{2}\right)$.`,
        solution: String.raw`На $[0;\,\pi]$ косинус равен $-\dfrac{1}{2}$ при $x=\dfrac{2\pi}{3}$.`,
      },
    ],
    sample: {
      id: "tr05-s",
      type: "open",
      prompt: String.raw`Вычислите $\arctan 1$.`,
      accepted: ["π/4", "pi/4", "frac{π}{4}", "frac{pi}{4}", "\\frac{\\pi}{4}"],
      explanation: String.raw`Тангенс равен $1$ при $\dfrac{\pi}{4}$, и это значение лежит в $\left(-\dfrac{\pi}{2};\,\dfrac{\pi}{2}\right)$.`,
      solution: String.raw`По определению $\arctan 1$ — число из интервала $\left(-\dfrac{\pi}{2};\,\dfrac{\pi}{2}\right)$, тангенс которого равен $1$. Таким числом является $\dfrac{\pi}{4}$, поскольку $\tan\dfrac{\pi}{4}=1$.`,
    },
    problems: [
      {
        id: "tr05-q1",
        type: "choice",
        prompt: String.raw`Область значений $\arcsin$ — это`,
        options: [
          String.raw`$[0;\,\pi]$`,
          String.raw`$\left[-\dfrac{\pi}{2};\,\dfrac{\pi}{2}\right]$`,
          String.raw`$(-\pi;\,\pi)$`,
          String.raw`$\mathbb{R}$`,
        ],
        answerIndex: 1,
        explanation: String.raw`По определению значения арксинуса лежат на $\left[-\dfrac{\pi}{2};\,\dfrac{\pi}{2}\right]$.`,
      },
      {
        id: "tr05-q2",
        type: "open",
        prompt: String.raw`Вычислите $\arcsin\dfrac{1}{2}$.`,
        accepted: ["π/6", "pi/6", "frac{π}{6}", "frac{pi}{6}", "\\frac{\\pi}{6}"],
        explanation: String.raw`$\sin\dfrac{\pi}{6}=\dfrac{1}{2}$ и $\dfrac{\pi}{6}$ в области значений арксинуса.`,
      },
      {
        id: "tr05-q3",
        type: "choice",
        prompt: String.raw`Значение $\arccos\dfrac{1}{2}$ равно`,
        options: [
          String.raw`$\dfrac{\pi}{6}$`,
          String.raw`$\dfrac{\pi}{3}$`,
          String.raw`$\dfrac{\pi}{4}$`,
          String.raw`$\dfrac{2\pi}{3}$`,
        ],
        answerIndex: 1,
        explanation: String.raw`$\cos\dfrac{\pi}{3}=\dfrac{1}{2}$, $\dfrac{\pi}{3}\in[0;\,\pi]$.`,
      },
      {
        id: "tr05-q4",
        type: "open",
        prompt: String.raw`Вычислите $\arccos 0$.`,
        accepted: ["π/2", "pi/2", "frac{π}{2}", "frac{pi}{2}", "\\frac{\\pi}{2}"],
        explanation: String.raw`$\cos\dfrac{\pi}{2}=0$.`,
      },
      {
        id: "tr05-q5",
        type: "choice",
        prompt: String.raw`Значение $\arcsin(-1)$ равно`,
        options: [
          String.raw`$\dfrac{\pi}{2}$`,
          String.raw`$-\dfrac{\pi}{2}$`,
          String.raw`$\pi$`,
          String.raw`$0$`,
        ],
        answerIndex: 1,
        explanation: String.raw`$\sin\left(-\dfrac{\pi}{2}\right)=-1$, значение в области арксинуса.`,
      },
      {
        id: "tr05-q6",
        type: "open",
        prompt: String.raw`Вычислите $\arccos(-1)$.`,
        accepted: ["π", "pi", "\\pi"],
        explanation: String.raw`$\cos\pi=-1$ и $\pi\in[0;\,\pi]$.`,
      },
      {
        id: "tr05-q7",
        type: "choice",
        prompt: String.raw`Значение $\arccos\left(-\dfrac{1}{2}\right)$ равно`,
        options: [
          String.raw`$-\dfrac{\pi}{3}$`,
          String.raw`$\dfrac{\pi}{3}$`,
          String.raw`$\dfrac{2\pi}{3}$`,
          String.raw`$\dfrac{5\pi}{6}$`,
        ],
        answerIndex: 2,
        explanation: String.raw`На $[0;\,\pi]$ это $\dfrac{2\pi}{3}$, а не $-\dfrac{\pi}{3}$.`,
      },
      {
        id: "tr05-q8",
        type: "open",
        prompt: String.raw`Вычислите $\arcsin 0$.`,
        accepted: ["0", "0.0"],
        explanation: String.raw`$\sin 0=0$.`,
      },
    ],
    sources: [
      {
        authors: "Никольский С.М., Потапов М.К., Решетников Н.Н., Шевкин А.В.",
        title: "Алгебра и начала математического анализа. 10–11 классы",
        note: "Обратные тригонометрические функции",
      },
      {
        authors: "Алимов Ш.А., Колягин Ю.М., Ткачёва М.В. и др.",
        title: "Алгебра и начала анализа. 10–11 классы",
        note: "Арксинус, арккосинус, арктангенс",
      },
    ],
  }),

  makeLesson("school-trig", 5, "Теоремы синусов и косинусов", {
    theory: String.raw`Теорема синусов: в любом треугольнике $\dfrac{a}{\sin A}=\dfrac{b}{\sin B}=\dfrac{c}{\sin C}=2R$, где $a,b,c$ — стороны, $A,B,C$ — противолежащие углы, $R$ — радиус описанной окружности.

Теорема косинусов: $c^{2}=a^{2}+b^{2}-2ab\cos C$ (и циклические перестановки). При $C=90^{\circ}$ получается теорема Пифагора: $c^{2}=a^{2}+b^{2}$. Угол $C$ острый, если $c^{2}<a^{2}+b^{2}$, и тупой, если $c^{2}>a^{2}+b^{2}$.

Площадь треугольника: $S=\dfrac{1}{2}ab\sin C$. Для прямоугольного треугольника с гипотенузой $c$ верно $R=\dfrac{c}{2}$.`,
    examples: [
      {
        title: "Теорема синусов",
        problem: String.raw`В треугольнике $a=2$, $\angle A=30^{\circ}$, $\angle B=45^{\circ}$. Найдите сторону $b$.`,
        solution: String.raw`$\dfrac{a}{\sin A}=\dfrac{b}{\sin B}$, поэтому $b=\dfrac{2\cdot\sin 45^{\circ}}{\sin 30^{\circ}}=\dfrac{2\cdot(\sqrt{2}/2)}{1/2}=2\sqrt{2}$.`,
      },
      {
        title: "Теорема косинусов",
        problem: String.raw`Стороны $a=5$, $b=5$, угол $C=60^{\circ}$. Найдите сторону $c$.`,
        solution: String.raw`$c^{2}=25+25-2\cdot 5\cdot 5\cdot\cos 60^{\circ}=50-50\cdot\dfrac{1}{2}=25$, $c=5$. Треугольник равносторонний.`,
      },
    ],
    sample: {
      id: "tr06-s",
      type: "open",
      prompt: String.raw`Найдите площадь треугольника со сторонами $a=6$, $b=8$ и углом $C=90^{\circ}$ между ними.`,
      accepted: ["24", "24.0"],
      explanation: String.raw`$S=\dfrac{1}{2}\cdot 6\cdot 8\cdot\sin 90^{\circ}=24$.`,
      solution: String.raw`Формула $S=\dfrac{1}{2}ab\sin C$. Здесь $\sin 90^{\circ}=1$, поэтому $S=\dfrac{1}{2}\cdot 6\cdot 8=24$. Это же площадь прямоугольного треугольника с катетами $6$ и $8$.`,
    },
    problems: [
      {
        id: "tr06-q1",
        type: "choice",
        prompt: String.raw`Теорема синусов утверждает, что $\dfrac{a}{\sin A}$ равно`,
        options: [
          "$R$",
          "$2R$",
          String.raw`$\dfrac{R}{2}$`,
          "площади треугольника",
        ],
        answerIndex: 1,
        explanation: String.raw`$\dfrac{a}{\sin A}=2R$, где $R$ — радиус описанной окружности.`,
      },
      {
        id: "tr06-q2",
        type: "open",
        prompt: String.raw`В прямоугольном треугольнике катеты равны $3$ и $4$. Найдите гипотенузу.`,
        accepted: ["5", "5.0"],
        explanation: String.raw`$c^{2}=9+16=25$, $c=5$ (теорема Пифагора — частный случай теоремы косинусов).`,
      },
      {
        id: "tr06-q3",
        type: "choice",
        prompt: String.raw`В треугольнике $a=5$, $b=5$, $C=60^{\circ}$. Сторона $c$ равна`,
        options: ["$5$", "$10$", String.raw`$5\sqrt{2}$`, String.raw`$5\sqrt{3}$`],
        answerIndex: 0,
        explanation: String.raw`$c^{2}=25+25-25=25$, $c=5$.`,
      },
      {
        id: "tr06-q4",
        type: "open",
        prompt: String.raw`Гипотенуза прямоугольного треугольника равна $10$. Найдите радиус описанной окружности.`,
        accepted: ["5", "5.0"],
        explanation: String.raw`Для прямоугольного треугольника $2R=c$, поэтому $R=5$.`,
      },
      {
        id: "tr06-q5",
        type: "choice",
        prompt: String.raw`В треугольнике $a=2$, $A=30^{\circ}$, $B=45^{\circ}$. Сторона $b$ равна`,
        options: [
          String.raw`$\sqrt{2}$`,
          String.raw`$2\sqrt{2}$`,
          "$4$",
          String.raw`$2\sqrt{3}$`,
        ],
        answerIndex: 1,
        explanation: String.raw`$b=\dfrac{2\sin 45^{\circ}}{\sin 30^{\circ}}=2\sqrt{2}$.`,
      },
      {
        id: "tr06-q6",
        type: "open",
        prompt: String.raw`Найдите площадь треугольника со сторонами $4$ и $5$ и углом $90^{\circ}$ между ними.`,
        accepted: ["10", "10.0"],
        explanation: String.raw`$S=\dfrac{1}{2}\cdot 4\cdot 5=10$.`,
      },
      {
        id: "tr06-q7",
        type: "choice",
        prompt: String.raw`По теореме косинусов угол $C$ прямой, если`,
        options: [
          String.raw`$c^{2}=a^{2}+b^{2}$`,
          String.raw`$c^{2}>a^{2}+b^{2}$`,
          String.raw`$c^{2}<a^{2}+b^{2}$`,
          String.raw`$c=a+b$`,
        ],
        answerIndex: 0,
        explanation: String.raw`При $\cos C=0$ получаем $c^{2}=a^{2}+b^{2}$.`,
      },
      {
        id: "tr06-q8",
        type: "open",
        prompt: String.raw`В треугольнике $A=30^{\circ}$, $a=3$. Найдите радиус описанной окружности $R$.`,
        accepted: ["3", "3.0"],
        explanation: String.raw`$2R=\dfrac{a}{\sin A}=\dfrac{3}{1/2}=6$, $R=3$.`,
      },
    ],
    sources: [
      {
        authors: "Атанасян Л.С., Бутузов В.Ф., Кадомцев С.Б. и др.",
        title: "Геометрия. 7–9 классы",
        note: "Теоремы синусов и косинусов, площадь треугольника",
      },
      {
        authors: "Алимов Ш.А., Колягин Ю.М., Ткачёва М.В. и др.",
        title: "Алгебра и начала анализа. 10–11 классы",
        note: "Применения тригонометрии в геометрии",
      },
    ],
  }),
];
