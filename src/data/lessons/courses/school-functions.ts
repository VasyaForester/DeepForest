import { makeLesson } from "../../makeLesson";
import type { Lesson } from "../../../types";

export const lessons: Lesson[] = [
  makeLesson("school-functions", 0, "Функция, область определения, график", {
    theory: String.raw`Функция — это соответствие, при котором каждому числу $x$ из некоторого множества $D$ ставится ровно одно число $y$. Пишут $y=f(x)$, где буквой $f$ обозначают само соответствие. Множество $D$ называют областью определения и обозначают $D(f)$; множество всех получающихся значений $y$ называют областью значений и обозначают $E(f)$.

График функции — множество точек плоскости с координатами $(x; f(x))$, где $x$ пробегает $D(f)$. Вертикальная прямая пересекает график не более чем в одной точке: иначе одному $x$ соответствовало бы несколько $y$, а это уже не функция.

Чтобы найти область определения, исключают те $x$, при которых выражение не имеет смысла: знаменатель не может быть равен нулю, под корнем чётной степени не может стоять отрицательное число, аргумент логарифма должен быть положительным.`,
    examples: [
      {
        title: "Область определения дроби",
        problem: String.raw`Найдите область определения функции $f(x)=\dfrac{1}{x-2}$.`,
        solution: String.raw`Знаменатель не равен нулю: $x-2\neq 0$, то есть $x\neq 2$. Значит, $D(f)=\mathbb{R}\setminus\{2\}$.`,
      },
      {
        title: "Область определения корня",
        problem: String.raw`Найдите область определения функции $f(x)=\sqrt{x-1}$.`,
        solution: String.raw`Подкоренное выражение неотрицательно: $x-1\geq 0$, откуда $x\geq 1$. Итак, $D(f)=[1;+\infty)$.`,
      },
    ],
    sample: {
      id: "fn01-s",
      type: "open",
      prompt: String.raw`Найдите наибольшее число, входящее в область определения функции $f(x)=\sqrt{4-x^{2}}$.`,
      accepted: ["2", "2.0"],
      explanation: String.raw`Нужно $4-x^{2}\geq 0$, то есть $x^{2}\leq 4$, откуда $x\in[-2;2]$. Наибольшее значение равно $2$.`,
      solution: String.raw`Условие $4-x^{2}\geq 0$ равносильно $x^{2}\leq 4$, то есть $-2\leq x\leq 2$. Область определения — отрезок $[-2;2]$, его правый конец равен $2$.`,
    },
    problems: [
      {
        id: "fn01-q1",
        type: "choice",
        prompt: String.raw`Какое множество является областью определения функции $f(x)=\dfrac{1}{x}$?`,
        options: [
          String.raw`Все действительные числа`,
          String.raw`Все $x$, кроме $x=0$`,
          String.raw`Только $x>0$`,
          String.raw`Только $x\geq 0$`,
        ],
        answerIndex: 1,
        explanation: String.raw`Знаменатель $x\neq 0$, других ограничений нет.`,
      },
      {
        id: "fn01-q2",
        type: "open",
        prompt: String.raw`Вычислите $f(3)$, если $f(x)=2x+1$.`,
        accepted: ["7", "7.0"],
        explanation: String.raw`$f(3)=2\cdot 3+1=7$.`,
      },
      {
        id: "fn01-q3",
        type: "choice",
        prompt: String.raw`График какой зависимости не является графиком функции $y=f(x)$?`,
        options: [
          String.raw`Прямая $y=2x-1$`,
          String.raw`Парабола $y=x^{2}$`,
          String.raw`Окружность $x^{2}+y^{2}=1$`,
          String.raw`Прямая $y=3$`,
        ],
        answerIndex: 2,
        explanation: String.raw`Окружность пересекается вертикальной прямой $x=0$ в двух точках: одному $x$ соответствуют два $y$.`,
      },
      {
        id: "fn01-q4",
        type: "open",
        prompt: String.raw`Вычислите $f(-2)$, если $f(x)=x^{2}$.`,
        accepted: ["4", "4.0"],
        explanation: String.raw`$f(-2)=(-2)^{2}=4$.`,
      },
      {
        id: "fn01-q5",
        type: "choice",
        prompt: String.raw`Область определения $f(x)=\sqrt{x}$ — это`,
        options: [
          String.raw`$x>0$`,
          String.raw`$x\geq 0$`,
          String.raw`все действительные $x$`,
          String.raw`$x\leq 0$`,
        ],
        answerIndex: 1,
        explanation: String.raw`Под корнем $x\geq 0$; при $x=0$ функция определена: $\sqrt{0}=0$.`,
      },
      {
        id: "fn01-q6",
        type: "open",
        prompt: String.raw`Какое число не входит в область определения функции $f(x)=\dfrac{5}{x+3}$?`,
        accepted: ["-3", "-3.0"],
        explanation: String.raw`Знаменатель равен нулю при $x=-3$.`,
      },
      {
        id: "fn01-q7",
        type: "choice",
        prompt: String.raw`Если точка $(2;5)$ лежит на графике $y=f(x)$, то`,
        options: [
          String.raw`$f(5)=2$`,
          String.raw`$f(2)=5$`,
          String.raw`$f(2)=2$`,
          String.raw`$f(5)=5$`,
        ],
        answerIndex: 1,
        explanation: String.raw`Абсцисса — аргумент, ордината — значение: $f(2)=5$.`,
      },
      {
        id: "fn01-q8",
        type: "open",
        prompt: String.raw`Найдите $f(0)$, если $f(x)=x+5$.`,
        accepted: ["5", "5.0"],
        explanation: String.raw`$f(0)=0+5=5$.`,
      },
    ],
    sources: [
      {
        authors: "Алимов Ш.А., Колягин Ю.М., Ткачёва М.В. и др.",
        title: "Алгебра и начала анализа. 10–11 классы",
        note: "Определение функции, область определения, график",
      },
      {
        authors: "Никольский С.М., Потапов М.К., Решетников Н.Н., Шевкин А.В.",
        title: "Алгебра и начала математического анализа. 10–11 классы",
        note: "Функции и графики",
      },
    ],
  }),

  makeLesson("school-functions", 1, "Линейная и квадратичная функции", {
    theory: String.raw`Линейная функция задана формулой $y=kx+b$. Число $k$ называют угловым коэффициентом: оно показывает наклон прямой. При $k>0$ функция возрастает, при $k<0$ убывает. График — прямая; она пересекает ось $Oy$ в точке $(0;b)$.

Квадратичная функция $y=ax^{2}+bx+c$ при $a\neq 0$ имеет графиком параболу. Ветви направлены вверх при $a>0$ и вниз при $a<0$. Абсциссу вершины находят по формуле $x_{0}=-\dfrac{b}{2a}$, ординату — подстановкой: $y_{0}=f(x_{0})$. Ось симметрии — вертикальная прямая $x=x_{0}$.

Корни квадратного трёхчлена (если они есть) — точки пересечения параболы с осью $Ox$. Их находят через дискриминант $D=b^{2}-4ac$.`,
    examples: [
      {
        title: "Пересечения прямой с осями",
        problem: String.raw`Для функции $y=2x-1$ найдите точки пересечения графика с осями координат.`,
        solution: String.raw`С осью $Oy$: $x=0$, $y=-1$, точка $(0;-1)$. С осью $Ox$: $y=0$, $2x-1=0$, $x=\dfrac{1}{2}$, точка $\left(\dfrac{1}{2};0\right)$.`,
      },
      {
        title: "Вершина параболы",
        problem: String.raw`Найдите координаты вершины параболы $y=x^{2}-4x+3$.`,
        solution: String.raw`$x_{0}=-\dfrac{-4}{2\cdot 1}=2$, $y_{0}=2^{2}-4\cdot 2+3=4-8+3=-1$. Вершина $(2;-1)$.`,
      },
    ],
    sample: {
      id: "fn02-s",
      type: "open",
      prompt: String.raw`Найдите ординату вершины параболы $y=x^{2}-6x+5$.`,
      accepted: ["-4", "-4.0"],
      explanation: String.raw`$x_{0}=3$, $y_{0}=9-18+5=-4$.`,
      solution: String.raw`Абсцисса вершины $x_{0}=-\dfrac{-6}{2}=3$. Тогда $y_{0}=3^{2}-6\cdot 3+5=9-18+5=-4$.`,
    },
    problems: [
      {
        id: "fn02-q1",
        type: "choice",
        prompt: String.raw`Угловой коэффициент прямой $y=3x-2$ равен`,
        options: ["$-2$", "$3$", "$1$", "$0$"],
        answerIndex: 1,
        explanation: String.raw`В записи $y=kx+b$ коэффициент $k=3$.`,
      },
      {
        id: "fn02-q2",
        type: "open",
        prompt: String.raw`Найдите абсциссу вершины параболы $y=x^{2}-4x$.`,
        accepted: ["2", "2.0"],
        explanation: String.raw`$x_{0}=-\dfrac{-4}{2}=2$.`,
      },
      {
        id: "fn02-q3",
        type: "choice",
        prompt: String.raw`Ветви параболы $y=-2x^{2}+1$ направлены`,
        options: [
          "вверх, так как свободный член положителен",
          "вниз, так как $a=-2<0$",
          "вверх, так как $|a|=2>0$",
          "горизонтально",
        ],
        answerIndex: 1,
        explanation: String.raw`Знак старшего коэффициента $a$ определяет направление ветвей.`,
      },
      {
        id: "fn02-q4",
        type: "open",
        prompt: String.raw`Вычислите $f(1)$, если $f(x)=x^{2}-4x+3$.`,
        accepted: ["0", "0.0"],
        explanation: String.raw`$f(1)=1-4+3=0$.`,
      },
      {
        id: "fn02-q5",
        type: "choice",
        prompt: String.raw`Дискриминант трёхчлена $x^{2}-5x+6$ равен`,
        options: ["$1$", "$11$", "$25$", "$-1$"],
        answerIndex: 0,
        explanation: String.raw`$D=25-24=1$.`,
      },
      {
        id: "fn02-q6",
        type: "open",
        prompt: String.raw`Найдите ординату точки пересечения прямой $y=4x-7$ с осью $Oy$.`,
        accepted: ["-7", "-7.0"],
        explanation: String.raw`При $x=0$ получаем $y=-7$.`,
      },
      {
        id: "fn02-q7",
        type: "choice",
        prompt: String.raw`Ось симметрии параболы $y=x^{2}-6x+2$ — прямая`,
        options: [String.raw`$x=3$`, String.raw`$x=-3$`, String.raw`$x=6$`, String.raw`$y=3$`],
        answerIndex: 0,
        explanation: String.raw`$x_{0}=-\dfrac{-6}{2}=3$.`,
      },
      {
        id: "fn02-q8",
        type: "open",
        prompt: String.raw`Найдите меньший корень уравнения $x^{2}-5x+6=0$.`,
        accepted: ["2", "2.0"],
        explanation: String.raw`$(x-2)(x-3)=0$, корни $2$ и $3$. Меньший равен $2$.`,
      },
    ],
    sources: [
      {
        authors: "Мордкович А.Г.",
        title: "Алгебра и начала математического анализа",
        note: "Линейная и квадратичная функции, парабола",
      },
      {
        authors: "Колмогоров А.Н., Абрамов А.М., Дудницын Ю.П. и др.",
        title: "Алгебра и начала анализа. 10–11 классы",
        note: "Элементарные функции",
      },
    ],
  }),

  makeLesson("school-functions", 2, "Преобразования графиков", {
    theory: String.raw`От графика $y=f(x)$ новые графики получают геометрическими преобразованиями: сдвигами, отражениями и растяжениями.

Параллельный перенос: график $y=f(x)+a$ сдвинут относительно исходного на $a$ вверх (если $a<0$ — вниз); график $y=f(x-a)$ сдвинут на $a$ вправо (если $a<0$ — влево).

Отражения: $y=-f(x)$ — симметрия относительно оси $Ox$; $y=f(-x)$ — относительно оси $Oy$. Растяжения: $y=kf(x)$ при $|k|>1$ растягивает график от оси $Ox$, при $0<|k|<1$ сжимает к ней. Функция $y=f(kx)$ при $|k|>1$ сжимает график к оси $Oy$.`,
    examples: [
      {
        title: "Сдвиг параболы",
        problem: String.raw`Как получить график $y=(x-2)^{2}+3$ из графика $y=x^{2}$?`,
        solution: String.raw`Сначала $y=(x-2)^{2}$ — сдвиг $y=x^{2}$ на $2$ вправо, затем $+3$ — сдвиг на $3$ вверх. Вершина переходит из $(0;0)$ в $(2;3)$.`,
      },
      {
        title: "Отражение модуля",
        problem: String.raw`Опишите график $y=-|x|$ относительно графика $y=|x|$.`,
        solution: String.raw`Умножение на $-1$ даёт отражение относительно оси $Ox$: «уголок» оказывается под осью абсцисс, вершина по-прежнему в начале координат.`,
      },
    ],
    sample: {
      id: "fn03-s",
      type: "open",
      prompt: String.raw`График $y=x^{2}+4$ получается из графика $y=x^{2}$ сдвигом вверх. На сколько единиц?`,
      accepted: ["4", "4.0"],
      explanation: String.raw`Добавление константы $4$ сдвигает график на $4$ вверх.`,
      solution: String.raw`Преобразование $y=f(x)+a$ при $a=4$ — параллельный перенос вдоль оси $Oy$ на $4$ единицы вверх. Каждая точка $(x;x^{2})$ переходит в $(x;x^{2}+4)$.`,
    },
    problems: [
      {
        id: "fn03-q1",
        type: "choice",
        prompt: String.raw`График $y=f(x-3)$ получается из графика $y=f(x)$ сдвигом`,
        options: ["на $3$ влево", "на $3$ вправо", "на $3$ вверх", "на $3$ вниз"],
        answerIndex: 1,
        explanation: String.raw`Замена $x$ на $x-3$ сдвигает график вправо на $3$.`,
      },
      {
        id: "fn03-q2",
        type: "open",
        prompt: String.raw`График $y=\sqrt{x}+5$ получается из $y=\sqrt{x}$ сдвигом вверх. На сколько единиц?`,
        accepted: ["5", "5.0"],
        explanation: String.raw`Константа $+5$ даёт сдвиг вверх на $5$.`,
      },
      {
        id: "fn03-q3",
        type: "choice",
        prompt: String.raw`График $y=-f(x)$ получается из графика $y=f(x)$`,
        options: [
          "сдвигом вниз",
          "отражением относительно оси $Oy$",
          "отражением относительно оси $Ox$",
          "растяжением вдоль $Oy$",
        ],
        answerIndex: 2,
        explanation: String.raw`Смена знака значения — симметрия относительно оси абсцисс.`,
      },
      {
        id: "fn03-q4",
        type: "open",
        prompt: String.raw`Точка $(1;2)$ лежит на графике $y=f(x)$. Найдите ординату той же абсциссы на графике $y=f(x)+3$.`,
        accepted: ["5", "5.0"],
        explanation: String.raw`Новое значение $2+3=5$.`,
      },
      {
        id: "fn03-q5",
        type: "choice",
        prompt: String.raw`График $y=f(x+1)$ получается из $y=f(x)$ сдвигом`,
        options: ["на $1$ вправо", "на $1$ влево", "на $1$ вверх", "на $1$ вниз"],
        answerIndex: 1,
        explanation: String.raw`$x+1=x-(-1)$: сдвиг влево на $1$.`,
      },
      {
        id: "fn03-q6",
        type: "open",
        prompt: String.raw`Вершина параболы $y=x^{2}$ — точка $(0;0)$. Найдите абсциссу вершины $y=(x-7)^{2}$.`,
        accepted: ["7", "7.0"],
        explanation: String.raw`Сдвиг вправо на $7$: вершина $(7;0)$.`,
      },
      {
        id: "fn03-q7",
        type: "choice",
        prompt: String.raw`Какое преобразование переводит $y=x^{2}$ в $y=4x^{2}$?`,
        options: [
          "сдвиг вверх на $4$",
          "сдвиг вправо на $4$",
          "растяжение от оси $Ox$ с коэффициентом $4$",
          "сжатие к оси $Oy$ с коэффициентом $4$",
        ],
        answerIndex: 2,
        explanation: String.raw`$y=4f(x)$ — вертикальное растяжение с коэффициентом $4$.`,
      },
    ],
    sources: [
      {
        authors: "Алимов Ш.А., Колягин Ю.М., Ткачёва М.В. и др.",
        title: "Алгебра и начала анализа. 10–11 классы",
        note: "Преобразования графиков функций",
      },
      {
        authors: "Мордкович А.Г.",
        title: "Алгебра и начала математического анализа",
        note: "Геометрические преобразования графиков",
      },
    ],
  }),

  makeLesson("school-functions", 3, "Обратная функция", {
    theory: String.raw`Функцию $f$ называют обратимой, если разным аргументам соответствуют разные значения (говорят также, что функция взаимно однозначна). Тогда существует обратная функция, которую обозначают $f^{-1}$: она «меняет местами» аргумент и значение, то есть $f^{-1}(f(x))=x$ и $f(f^{-1}(y))=y$.

Область определения обратной функции совпадает с областью значений исходной, и наоборот. Графики $y=f(x)$ и $y=f^{-1}(x)$ симметричны относительно прямой $y=x$.

Чтобы найти формулу обратной функции, в равенстве $y=f(x)$ выражают $x$ через $y$ и меняют обозначения: пишут $y=f^{-1}(x)$. Непрерывная монотонная функция на промежутке всегда обратима.`,
    examples: [
      {
        title: "Формула обратной функции",
        problem: String.raw`Найдите функцию, обратную к $f(x)=3x-6$.`,
        solution: String.raw`Пусть $y=3x-6$. Тогда $3x=y+6$, $x=\dfrac{y+6}{3}$. Обратная функция $f^{-1}(x)=\dfrac{x+6}{3}$.`,
      },
      {
        title: "Значение обратной функции",
        problem: String.raw`Известно, что $f(4)=11$ и $f$ обратима. Найдите $f^{-1}(11)$.`,
        solution: String.raw`По определению $f^{-1}$ «меняет местами» аргумент и значение: если $f(4)=11$, то $f^{-1}(11)=4$.`,
      },
    ],
    sample: {
      id: "fn04-s",
      type: "open",
      prompt: String.raw`Найдите $f^{-1}(8)$, если $f(x)=2x$.`,
      accepted: ["4", "4.0"],
      explanation: String.raw`$2x=8$, $x=4$, поэтому $f^{-1}(8)=4$.`,
      solution: String.raw`Решаем $f(x)=8$: $2x=8$, $x=4$. Значит, $f^{-1}(8)=4$. Иначе: $f^{-1}(x)=\dfrac{x}{2}$, $f^{-1}(8)=4$.`,
    },
    problems: [
      {
        id: "fn04-q1",
        type: "choice",
        prompt: String.raw`Графики взаимно обратных функций симметричны относительно прямой`,
        options: [String.raw`$y=0$`, String.raw`$x=0$`, String.raw`$y=x$`, String.raw`$y=-x$`],
        answerIndex: 2,
        explanation: String.raw`Точки $(a;b)$ и $(b;a)$ симметричны относительно $y=x$.`,
      },
      {
        id: "fn04-q2",
        type: "open",
        prompt: String.raw`Найдите $f^{-1}(10)$, если $f(x)=x+7$.`,
        accepted: ["3", "3.0"],
        explanation: String.raw`$x+7=10$, $x=3$.`,
      },
      {
        id: "fn04-q3",
        type: "choice",
        prompt: String.raw`Какая из функций не является обратимой на $\mathbb{R}$?`,
        options: [
          String.raw`$f(x)=2x+1$`,
          String.raw`$f(x)=x^{3}$`,
          String.raw`$f(x)=x^{2}$`,
          String.raw`$f(x)=-x$`,
        ],
        answerIndex: 2,
        explanation: String.raw`У $x^{2}$ значения совпадают при $x$ и $-x$, например $f(2)=f(-2)=4$.`,
      },
      {
        id: "fn04-q4",
        type: "open",
        prompt: String.raw`Если $f(2)=5$ и $f$ обратима, найдите $f^{-1}(5)$.`,
        accepted: ["2", "2.0"],
        explanation: String.raw`По определению обратной функции $f^{-1}(5)=2$.`,
      },
      {
        id: "fn04-q5",
        type: "choice",
        prompt: String.raw`Обратная к $f(x)=2x+1$ — это`,
        options: [
          String.raw`$f^{-1}(x)=2x-1$`,
          String.raw`$f^{-1}(x)=\dfrac{x-1}{2}$`,
          String.raw`$f^{-1}(x)=\dfrac{x+1}{2}$`,
          String.raw`$f^{-1}(x)=\dfrac{1}{2x+1}$`,
        ],
        answerIndex: 1,
        explanation: String.raw`Из $y=2x+1$ следует $x=\dfrac{y-1}{2}$.`,
      },
      {
        id: "fn04-q6",
        type: "open",
        prompt: String.raw`Найдите $f^{-1}(27)$, если $f(x)=x^{3}$.`,
        accepted: ["3", "3.0"],
        explanation: String.raw`Кубический корень: $3^{3}=27$.`,
      },
      {
        id: "fn04-q7",
        type: "choice",
        prompt: String.raw`Область определения $f^{-1}$ совпадает с`,
        options: [
          "областью определения $f$",
          "областью значений $f$",
          "множеством всех целых чисел",
          "графиком $f$",
        ],
        answerIndex: 1,
        explanation: String.raw`$D(f^{-1})=E(f)$, $E(f^{-1})=D(f)$.`,
      },
    ],
    sources: [
      {
        authors: "Колмогоров А.Н., Абрамов А.М., Дудницын Ю.П. и др.",
        title: "Алгебра и начала анализа. 10–11 классы",
        note: "Обратная функция",
      },
      {
        authors: "Никольский С.М., Потапов М.К., Решетников Н.Н., Шевкин А.В.",
        title: "Алгебра и начала математического анализа. 10–11 классы",
        note: "Взаимно обратные функции",
      },
    ],
  }),

  makeLesson("school-functions", 4, "Показательная функция и уравнения", {
    theory: String.raw`Показательная функция $y=a^{x}$ определена при $a>0$, $a\neq 1$, для всех действительных $x$. Область значений — промежуток $(0;+\infty)$. При $a>1$ функция возрастает, при $0<a<1$ убывает. График проходит через точку $(0;1)$, потому что $a^{0}=1$.

Основные свойства степеней: $a^{x}\cdot a^{y}=a^{x+y}$, $\dfrac{a^{x}}{a^{y}}=a^{x-y}$, $(a^{x})^{y}=a^{xy}$, $a^{-x}=\dfrac{1}{a^{x}}$.

Показательное уравнение $a^{f(x)}=a^{g(x)}$ при $a>0$, $a\neq 1$ равносильно $f(x)=g(x)$. Если основания различны, их приводят к одному: например, $4=2^{2}$, $8=2^{3}$, $9=3^{2}$, $27=3^{3}$.`,
    examples: [
      {
        title: "Одинаковые основания",
        problem: String.raw`Решите уравнение $2^{x}=16$.`,
        solution: String.raw`$16=2^{4}$, поэтому $2^{x}=2^{4}$, откуда $x=4$.`,
      },
      {
        title: "Сдвиг показателя",
        problem: String.raw`Решите уравнение $3^{x+1}=81$.`,
        solution: String.raw`$81=3^{4}$, значит $x+1=4$, $x=3$.`,
      },
    ],
    sample: {
      id: "fn05-s",
      type: "open",
      prompt: String.raw`Решите уравнение $5^{x}=125$.`,
      accepted: ["3", "3.0"],
      explanation: String.raw`$125=5^{3}$, поэтому $x=3$.`,
      solution: String.raw`Представим правую часть как степень пятёрки: $125=5^{3}$. Получаем $5^{x}=5^{3}$. Показательная функция с основанием $5>1$ взаимно однозначна, следовательно $x=3$.`,
    },
    problems: [
      {
        id: "fn05-q1",
        type: "choice",
        prompt: String.raw`Значение $2^{0}$ равно`,
        options: ["$0$", "$1$", "$2$", "не определено"],
        answerIndex: 1,
        explanation: String.raw`Для $a>0$ верно $a^{0}=1$.`,
      },
      {
        id: "fn05-q2",
        type: "open",
        prompt: String.raw`Решите уравнение $2^{x}=32$.`,
        accepted: ["5", "5.0"],
        explanation: String.raw`$32=2^{5}$, $x=5$.`,
      },
      {
        id: "fn05-q3",
        type: "choice",
        prompt: String.raw`Функция $y=\left(\dfrac{1}{2}\right)^{x}$ на $\mathbb{R}$`,
        options: ["возрастает", "убывает", "постоянна", "не монотонна"],
        answerIndex: 1,
        explanation: String.raw`Основание $0<\dfrac{1}{2}<1$, показательная функция убывает.`,
      },
      {
        id: "fn05-q4",
        type: "open",
        prompt: String.raw`Решите уравнение $4^{x}=8$.`,
        accepted: ["3/2", "1.5", "frac{3}{2}"],
        explanation: String.raw`$2^{2x}=2^{3}$, $2x=3$, $x=\dfrac{3}{2}$.`,
      },
      {
        id: "fn05-q5",
        type: "choice",
        prompt: String.raw`Корень уравнения $9^{x}=27$ равен`,
        options: [
          String.raw`$\dfrac{1}{2}$`,
          String.raw`$\dfrac{3}{2}$`,
          String.raw`$2$`,
          String.raw`$3$`,
        ],
        answerIndex: 1,
        explanation: String.raw`$3^{2x}=3^{3}$, $2x=3$, $x=\dfrac{3}{2}$.`,
      },
      {
        id: "fn05-q6",
        type: "open",
        prompt: String.raw`Решите уравнение $2^{x}=\dfrac{1}{8}$.`,
        accepted: ["-3", "-3.0"],
        explanation: String.raw`$\dfrac{1}{8}=2^{-3}$, $x=-3$.`,
      },
      {
        id: "fn05-q7",
        type: "choice",
        prompt: String.raw`Точка пересечения графика $y=3^{x}$ с осью $Oy$ имеет ординату`,
        options: ["$0$", "$1$", "$3$", "$3^{x}$"],
        answerIndex: 1,
        explanation: String.raw`При $x=0$ имеем $3^{0}=1$.`,
      },
      {
        id: "fn05-q8",
        type: "open",
        prompt: String.raw`Решите уравнение $\left(\dfrac{1}{2}\right)^{x}=4$.`,
        accepted: ["-2", "-2.0"],
        explanation: String.raw`$4=2^{2}=\left(\dfrac{1}{2}\right)^{-2}$, $x=-2$.`,
      },
    ],
    sources: [
      {
        authors: "Алимов Ш.А., Колягин Ю.М., Ткачёва М.В. и др.",
        title: "Алгебра и начала анализа. 10–11 классы",
        note: "Показательная функция и показательные уравнения",
      },
      {
        authors: "Никольский С.М., Потапов М.К., Решетников Н.Н., Шевкин А.В.",
        title: "Алгебра и начала математического анализа. 10–11 классы",
        note: "Степень с действительным показателем",
      },
    ],
  }),

  makeLesson("school-functions", 5, "Логарифмы: определение и свойства", {
    theory: String.raw`Логарифм $\log_{a} b$ при $a>0$, $a\neq 1$, $b>0$ — это показатель степени, в которую нужно возвести основание $a$, чтобы получить число $b$. Равенство $\log_{a} b=c$ означает $a^{c}=b$. В частности, $\log_{a} a=1$ и $\log_{a} 1=0$. Десятичный логарифм пишут $\lg b=\log_{10} b$, натуральный — $\ln b=\log_{e} b$, где $e$ — основание натуральных логарифмов.

Основные тождества: $a^{\log_{a} b}=b$ и $\log_{a}(a^{x})=x$. Свойства (при допустимых $x$ и $y$): $\log_{a}(xy)=\log_{a} x+\log_{a} y$, $\log_{a}\dfrac{x}{y}=\log_{a} x-\log_{a} y$, $\log_{a}(x^{p})=p\log_{a} x$.

Формула перехода к другому основанию $c$: $\log_{a} b=\dfrac{\log_{c} b}{\log_{c} a}$. Следствие: $\log_{a} b=\dfrac{1}{\log_{b} a}$.`,
    examples: [
      {
        title: "По определению",
        problem: String.raw`Вычислите $\log_{2} 8$.`,
        solution: String.raw`$2^{3}=8$, поэтому $\log_{2} 8=3$.`,
      },
      {
        title: "Сумма логарифмов",
        problem: String.raw`Вычислите $\log_{3} 9+\log_{3} 3$.`,
        solution: String.raw`$\log_{3} 9=2$, $\log_{3} 3=1$, сумма равна $3$. Иначе: $\log_{3}(9\cdot 3)=\log_{3} 27=3$.`,
      },
    ],
    sample: {
      id: "fn06-s",
      type: "open",
      prompt: String.raw`Вычислите $\lg 1000$.`,
      accepted: ["3", "3.0"],
      explanation: String.raw`$10^{3}=1000$, поэтому $\lg 1000=3$.`,
      solution: String.raw`По определению десятичного логарифма $\lg 1000=\log_{10} 1000$. Так как $10^{3}=1000$, ответ равен $3$.`,
    },
    problems: [
      {
        id: "fn06-q1",
        type: "choice",
        prompt: String.raw`Значение $\log_{5} 1$ равно`,
        options: ["$5$", "$1$", "$0$", "не определено"],
        answerIndex: 2,
        explanation: String.raw`$a^{0}=1$, значит $\log_{a} 1=0$.`,
      },
      {
        id: "fn06-q2",
        type: "open",
        prompt: String.raw`Вычислите $\log_{2} 32$.`,
        accepted: ["5", "5.0"],
        explanation: String.raw`$2^{5}=32$.`,
      },
      {
        id: "fn06-q3",
        type: "choice",
        prompt: String.raw`Равенство $\log_{7} 7$ даёт`,
        options: ["$0$", "$1$", "$7$", "$49$"],
        answerIndex: 1,
        explanation: String.raw`$\log_{a} a=1$.`,
      },
      {
        id: "fn06-q4",
        type: "open",
        prompt: String.raw`Вычислите $\log_{2} 16-\log_{2} 2$.`,
        accepted: ["3", "3.0"],
        explanation: String.raw`$4-1=3$, или $\log_{2}\dfrac{16}{2}=\log_{2} 8=3$.`,
      },
      {
        id: "fn06-q5",
        type: "choice",
        prompt: String.raw`Значение $\log_{2}\dfrac{1}{8}$ равно`,
        options: ["$3$", "$-3$", String.raw`$\dfrac{1}{3}$`, "$8$"],
        answerIndex: 1,
        explanation: String.raw`$\dfrac{1}{8}=2^{-3}$, логарифм равен $-3$.`,
      },
      {
        id: "fn06-q6",
        type: "open",
        prompt: String.raw`Вычислите $\log_{8} 2$.`,
        accepted: ["1/3", "frac{1}{3}"],
        explanation: String.raw`$8^{1/3}=2$, поэтому $\log_{8} 2=\dfrac{1}{3}$.`,
      },
      {
        id: "fn06-q7",
        type: "choice",
        prompt: String.raw`Формула $\log_{a}(xy)$ при допустимых значениях равна`,
        options: [
          String.raw`$\log_{a} x\cdot\log_{a} y$`,
          String.raw`$\log_{a} x+\log_{a} y$`,
          String.raw`$\log_{a} x-\log_{a} y$`,
          String.raw`$\log_{xy} a$`,
        ],
        answerIndex: 1,
        explanation: String.raw`Логарифм произведения равен сумме логарифмов.`,
      },
      {
        id: "fn06-q8",
        type: "open",
        prompt: String.raw`Вычислите $\ln e$.`,
        accepted: ["1", "1.0"],
        explanation: String.raw`$\ln e=\log_{e} e=1$.`,
      },
    ],
    sources: [
      {
        authors: "Мордкович А.Г.",
        title: "Алгебра и начала математического анализа",
        note: "Определение и свойства логарифмов",
      },
      {
        authors: "Алимов Ш.А., Колягин Ю.М., Ткачёва М.В. и др.",
        title: "Алгебра и начала анализа. 10–11 классы",
        note: "Логарифмическая функция",
      },
    ],
  }),

  makeLesson("school-functions", 6, "Логарифмические уравнения", {
    theory: String.raw`Простейшее логарифмическое уравнение $\log_{a} f(x)=b$ при $a>0$, $a\neq 1$ равносильно $f(x)=a^{b}$, причём нужно $f(x)>0$. Условие $f(x)>0$ выполняется само: степень с положительным основанием всегда положительна.

Уравнение $\log_{a} f(x)=\log_{a} g(x)$ равносильно системе $f(x)=g(x)$, $f(x)>0$ (тогда автоматически и $g(x)>0$). Перед потенцированием полезно свернуть сумму и разность логарифмов: $\log_{a} f+\log_{a} g=\log_{a}(fg)$.

Обязательно проверяют область определения: аргументы логарифмов положительны, основания удовлетворяют $a>0$, $a\neq 1$. Посторонние корни отбрасывают.`,
    examples: [
      {
        title: "Простейшее уравнение",
        problem: String.raw`Решите уравнение $\log_{2}(x-1)=3$.`,
        solution: String.raw`По определению $x-1=2^{3}=8$, $x=9$. Проверка: $9-1=8>0$, корень подходит.`,
      },
      {
        title: "Сумма логарифмов",
        problem: String.raw`Решите уравнение $\log_{3}(x+1)+\log_{3}(x-1)=1$.`,
        solution: String.raw`Область: $x+1>0$ и $x-1>0$, то есть $x>1$. Сворачиваем: $\log_{3}(x^{2}-1)=1$, $x^{2}-1=3$, $x^{2}=4$, $x=\pm 2$. Условию $x>1$ удовлетворяет только $x=2$.`,
      },
    ],
    sample: {
      id: "fn07-s",
      type: "open",
      prompt: String.raw`Решите уравнение $\log_{5} x=2$.`,
      accepted: ["25", "25.0"],
      explanation: String.raw`$x=5^{2}=25$.`,
      solution: String.raw`По определению логарифма $x=5^{2}=25$. Аргумент положителен: $25>0$. Проверка: $\log_{5} 25=2$.`,
    },
    problems: [
      {
        id: "fn07-q1",
        type: "choice",
        prompt: String.raw`Корень уравнения $\log_{2}(x+3)=2$ равен`,
        options: ["$1$", "$4$", "$-1$", "$7$"],
        answerIndex: 0,
        explanation: String.raw`$x+3=4$, $x=1$. Проверка: $1+3=4>0$.`,
      },
      {
        id: "fn07-q2",
        type: "open",
        prompt: String.raw`Решите уравнение $\lg x=2$.`,
        accepted: ["100", "100.0"],
        explanation: String.raw`$x=10^{2}=100$.`,
      },
      {
        id: "fn07-q3",
        type: "choice",
        prompt: String.raw`Уравнение $\log_{3} x+\log_{3} 9=3$ имеет корень`,
        options: ["$1$", "$3$", "$9$", "$27$"],
        answerIndex: 1,
        explanation: String.raw`$\log_{3} x+2=3$, $\log_{3} x=1$, $x=3$.`,
      },
      {
        id: "fn07-q4",
        type: "open",
        prompt: String.raw`Решите уравнение $\ln x=0$.`,
        accepted: ["1", "1.0"],
        explanation: String.raw`$x=e^{0}=1$.`,
      },
      {
        id: "fn07-q5",
        type: "choice",
        prompt: String.raw`Корень уравнения $\log_{2}(3x-1)=\log_{2}(x+5)$ равен`,
        options: ["$1$", "$2$", "$3$", "$4$"],
        answerIndex: 2,
        explanation: String.raw`$3x-1=x+5$, $2x=6$, $x=3$. Проверка: $8=8>0$.`,
      },
      {
        id: "fn07-q6",
        type: "open",
        prompt: String.raw`Решите уравнение $\log_{3}(x-2)=2$.`,
        accepted: ["11", "11.0"],
        explanation: String.raw`$x-2=9$, $x=11$.`,
      },
      {
        id: "fn07-q7",
        type: "choice",
        prompt: String.raw`Сколько корней имеет уравнение $\log_{2}(x-1)+\log_{2}(x+1)=1$ на области определения?`,
        options: ["ни одного", "один", "два", "бесконечно много"],
        answerIndex: 1,
        explanation: String.raw`Область $x>1$, уравнение $x^{2}-1=2$, $x^{2}=3$, $x=\sqrt{3}$ (положительный корень больше $1$).`,
      },
    ],
    sources: [
      {
        authors: "Никольский С.М., Потапов М.К., Решетников Н.Н., Шевкин А.В.",
        title: "Алгебра и начала математического анализа. 10–11 классы",
        note: "Логарифмические уравнения",
      },
      {
        authors: "Колмогоров А.Н., Абрамов А.М., Дудницын Ю.П. и др.",
        title: "Алгебра и начала анализа. 10–11 классы",
        note: "Методы решения логарифмических уравнений",
      },
    ],
  }),

  makeLesson("school-functions", 7, "Показательные и логарифмические неравенства", {
    theory: String.raw`Направление неравенства зависит от основания. Если $a>1$, то $a^{f}>a^{g}$ равносильно $f>g$; если $0<a<1$, знак меняется: $a^{f}>a^{g}$ равносильно $f<g$. Здесь $f$ и $g$ — выражения, стоящие в показателях.

Для логарифмов с основанием $a>1$ неравенство $\log_{a} f>\log_{a} g$ равносильно $f>g$ при $f>0$, $g>0$. Если $0<a<1$, знак снова меняется. Простейшее неравенство $\log_{a} f>b$ при $a>1$ даёт $f>a^{b}$ (и по-прежнему $f>0$).

Всегда учитывают область определения: для логарифма аргумент положителен. Показательная функция принимает только положительные значения, поэтому сравнение $a^{x}$ с неположительным числом разбирают отдельно (например, $2^{x}>0$ верно при всех $x$).`,
    examples: [
      {
        title: "Показательное неравенство",
        problem: String.raw`Решите неравенство $2^{x}>8$.`,
        solution: String.raw`$8=2^{3}$. Основание $2>1$, функция возрастает, поэтому $x>3$.`,
      },
      {
        title: "Логарифмическое неравенство",
        problem: String.raw`Решите неравенство $\log_{2} x<3$.`,
        solution: String.raw`Область $x>0$. Далее $\log_{2} x<\log_{2} 8$, основание больше $1$, значит $0<x<8$.`,
      },
    ],
    sample: {
      id: "fn08-s",
      type: "open",
      prompt: String.raw`Найдите наибольшее целое решение неравенства $2^{x}<16$.`,
      accepted: ["3", "3.0"],
      explanation: String.raw`$2^{x}<2^{4}$, $x<4$. Наибольшее целое — $3$.`,
      solution: String.raw`$16=2^{4}$. Основание $2>1$, поэтому $2^{x}<2^{4}$ равносильно $x<4$. Среди целых чисел, меньших $4$, наибольшее равно $3$. Проверка: $2^{3}=8<16$, $2^{4}=16$ нестрогое равенство не входит.`,
    },
    problems: [
      {
        id: "fn08-q1",
        type: "choice",
        prompt: String.raw`Решением неравенства $3^{x}<9$ является`,
        options: [String.raw`$x<2$`, String.raw`$x>2$`, String.raw`$x<3$`, String.raw`$x>9$`],
        answerIndex: 0,
        explanation: String.raw`$9=3^{2}$, основание $3>1$, поэтому $x<2$.`,
      },
      {
        id: "fn08-q2",
        type: "open",
        prompt: String.raw`Найдите наименьшее целое число $x$, удовлетворяющее $2^{x}\geq 8$.`,
        accepted: ["3", "3.0"],
        explanation: String.raw`$x\geq 3$; наименьшее целое равно $3$.`,
      },
      {
        id: "fn08-q3",
        type: "choice",
        prompt: String.raw`Неравенство $\log_{3} x>2$ при $x>0$ равносильно`,
        options: [String.raw`$x>9$`, String.raw`$x<9$`, String.raw`$x>2$`, String.raw`$0<x<9$`],
        answerIndex: 0,
        explanation: String.raw`Основание $3>1$: $x>3^{2}=9$.`,
      },
      {
        id: "fn08-q4",
        type: "open",
        prompt: String.raw`Найдите наибольшее целое решение неравенства $\left(\dfrac{1}{2}\right)^{x}>\dfrac{1}{8}$.`,
        accepted: ["2", "2.0"],
        explanation: String.raw`Основание меньше $1$: $x<3$. Наибольшее целое — $2$.`,
      },
      {
        id: "fn08-q5",
        type: "choice",
        prompt: String.raw`Решение неравенства $2^{x-1}\leq 4$ — это`,
        options: [String.raw`$x\leq 3$`, String.raw`$x\geq 3$`, String.raw`$x\leq 2$`, String.raw`$x\geq 1$`],
        answerIndex: 0,
        explanation: String.raw`$2^{x-1}\leq 2^{2}$, $x-1\leq 2$, $x\leq 3$.`,
      },
      {
        id: "fn08-q6",
        type: "open",
        prompt: String.raw`Найдите наименьшее целое $x$, удовлетворяющее $\log_{2} x>3$ (учтите $x>0$).`,
        accepted: ["9", "9.0"],
        explanation: String.raw`$x>8$, наименьшее целое — $9$.`,
      },
      {
        id: "fn08-q7",
        type: "choice",
        prompt: String.raw`Неравенство $\log_{1/2} x>-1$ равносильно`,
        options: [
          String.raw`$x>2$`,
          String.raw`$0<x<2$`,
          String.raw`$x>1$`,
          String.raw`$x<\dfrac{1}{2}$`,
        ],
        answerIndex: 1,
        explanation: String.raw`$-1=\log_{1/2} 2$. Основание меньше $1$, знак меняется: $0<x<2$.`,
      },
      {
        id: "fn08-q8",
        type: "open",
        prompt: String.raw`Найдите наименьшее целое решение неравенства $\log_{2}(x-1)\geq 1$.`,
        accepted: ["3", "3.0"],
        explanation: String.raw`Область $x>1$; $x-1\geq 2$, $x\geq 3$. Наименьшее целое — $3$.`,
      },
    ],
    sources: [
      {
        authors: "Алимов Ш.А., Колягин Ю.М., Ткачёва М.В. и др.",
        title: "Алгебра и начала анализа. 10–11 классы",
        note: "Показательные и логарифмические неравенства",
      },
      {
        authors: "Мордкович А.Г.",
        title: "Алгебра и начала математического анализа",
        note: "Метод интервалов для монотонных функций",
      },
    ],
  }),

  makeLesson("school-functions", 8, "Чётность, нечётность, периодичность", {
    theory: String.raw`Функцию $f$ называют чётной, если область определения симметрична относительно нуля и $f(-x)=f(x)$ для всех $x$ из $D(f)$. График чётной функции симметричен относительно оси ординат. Примеры: $x^{2}$, $\cos x$, $|x|$.

Функцию называют нечётной, если $f(-x)=-f(x)$; график симметричен относительно начала координат. Примеры: $x^{3}$, $\sin x$, $\mathrm{tg}\, x$. Сумма двух чётных функций чётна, двух нечётных — нечётна; произведение двух нечётных чётно.

Функцию называют периодической с периодом $T\neq 0$, если $f(x+T)=f(x)$ на области определения. Если $T$ — период, то $kT$ при целом $k\neq 0$ тоже период. Основной (наименьший положительный) период синуса и косинуса равен $2\pi$, тангенса — $\pi$. Постоянная функция формально и чётна, и нечётна одновременно.`,
    examples: [
      {
        title: "Чётность",
        problem: String.raw`Проверьте, что $f(x)=x^{4}-3x^{2}+1$ чётна.`,
        solution: String.raw`$f(-x)=(-x)^{4}-3(-x)^{2}+1=x^{4}-3x^{2}+1=f(x)$. Область $\mathbb{R}$ симметрична.`,
      },
      {
        title: "Период",
        problem: String.raw`Найдите основной период функции $y=\sin 2x$.`,
        solution: String.raw`$\sin 2(x+T)=\sin(2x+2T)=\sin 2x$ при $2T=2\pi$, откуда $T=\pi$. Это наименьший положительный период.`,
      },
    ],
    sample: {
      id: "fn09-s",
      type: "open",
      prompt: String.raw`Найдите основной период функции $y=\cos 3x$ (в виде числа, кратного $\pi$: ответ запишите как коэффициент при $\pi$, то есть $T/\pi$).`,
      accepted: ["2/3", "0.666", "0,666", "0.67", "0,67"],
      explanation: String.raw`$3T=2\pi$, $T=\dfrac{2\pi}{3}$, значит $T/\pi=\dfrac{2}{3}$.`,
      solution: String.raw`Равенство $\cos 3(x+T)=\cos(3x+3T)=\cos 3x$ выполняется при $3T=2\pi k$ с наименьшим положительным $T=\dfrac{2\pi}{3}$. Отношение $T/\pi=\dfrac{2}{3}$.`,
    },
    problems: [
      {
        id: "fn09-q1",
        type: "choice",
        prompt: String.raw`Функция $f(x)=x^{2}$ является`,
        options: [
          String.raw`нечётной`,
          String.raw`чётной`,
          String.raw`периодической с периодом $1$`,
          String.raw`ни чётной, ни нечётной`,
        ],
        answerIndex: 1,
        explanation: String.raw`$f(-x)=(-x)^{2}=x^{2}=f(x)$.`,
      },
      {
        id: "fn09-q2",
        type: "open",
        prompt: String.raw`Вычислите $f(-2)$, если $f$ чётна и $f(2)=7$.`,
        accepted: ["7", "7.0"],
        explanation: String.raw`Для чётной функции $f(-2)=f(2)=7$.`,
      },
      {
        id: "fn09-q3",
        type: "choice",
        prompt: String.raw`Функция $f(x)=x^{3}$ является`,
        options: [
          String.raw`чётной`,
          String.raw`нечётной`,
          String.raw`постоянной`,
          String.raw`периодической`,
        ],
        answerIndex: 1,
        explanation: String.raw`$f(-x)=-x^{3}=-f(x)$.`,
      },
      {
        id: "fn09-q4",
        type: "open",
        prompt: String.raw`Вычислите $f(-3)$, если $f$ нечётна и $f(3)=5$.`,
        accepted: ["-5", "-5.0"],
        explanation: String.raw`$f(-3)=-f(3)=-5$.`,
      },
      {
        id: "fn09-q5",
        type: "choice",
        prompt: String.raw`Основной период функции $y=\sin x$ равен`,
        options: [
          String.raw`$\pi$`,
          String.raw`$2\pi$`,
          String.raw`$\dfrac{\pi}{2}$`,
          String.raw`$1$`,
        ],
        answerIndex: 1,
        explanation: String.raw`Наименьший положительный период синуса равен $2\pi$.`,
      },
      {
        id: "fn09-q6",
        type: "open",
        prompt: String.raw`Найдите основной период $y=\sin 4x$. В ответе укажите $T/\pi$.`,
        accepted: ["1/2", "0.5", "0,5"],
        explanation: String.raw`$4T=2\pi$, $T=\pi/2$, $T/\pi=1/2$.`,
      },
    ],
    sources: [
      {
        authors: "Алимов Ш.А., Колягин Ю.М., Ткачёва М.В. и др.",
        title: "Алгебра и начала анализа. 10–11 классы",
        note: "чётные, нечётные и периодические функции",
      },
      {
        authors: "Мордкович А.Г.",
        title: "Алгебра и начала математического анализа",
        note: "свойства функций, период",
      },
    ],
  }),

  makeLesson("school-functions", 9, "Степенная функция", {
    theory: String.raw`Степенная функция $y=x^{a}$ при действительном показателе $a$ определяется на своей естественной области. При натуральном $n$ функция $y=x^{n}$ задана на всей прямой: при чётном $n$ она чётна, график похож на параболу; при нечётном $n$ она нечётна и проходит через все квадранты по диагонали.

При $a=\dfrac{1}{n}$ получают корень: $y=\sqrt[n]{x}$. Для чётного $n$ область определения — $[0;+\infty)$, для нечётного — вся прямая. Функция $y=x^{-1}=\dfrac{1}{x}$ имеет вертикальную асимптоту $x=0$ и горизонтальную $y=0$; график — гипербола.

На луче $x>0$ функция $x^{a}$ возрастает при $a>0$ и убывает при $a<0$. При допустимых значениях верны тождества $x^{a}x^{b}=x^{a+b}$ и $(x^{a})^{b}=x^{ab}$. Точка $(1;1)$ лежит на графике любой степени $x^{a}$ при $x>0$.`,
    examples: [
      {
        title: "Чётная степень",
        problem: String.raw`Сравните $f(2)$ и $f(-2)$ для $f(x)=x^{4}$.`,
        solution: String.raw`$2^{4}=16$ и $(-2)^{4}=16$. Функция чётна, значения равны.`,
      },
      {
        title: "Гипербола",
        problem: String.raw`Вычислите $f(4)$ и $f\bigl(\dfrac{1}{4}\bigr)$ для $f(x)=\dfrac{1}{x}$.`,
        solution: String.raw`$f(4)=\dfrac{1}{4}$, $f(1/4)=4$. Произведение значений равно $1$.`,
      },
    ],
    sample: {
      id: "fn10-s",
      type: "open",
      prompt: String.raw`Вычислите $16^{1/2}$.`,
      accepted: ["4", "4.0"],
      explanation: String.raw`$16^{1/2}=\sqrt{16}=4$.`,
      solution: String.raw`По определению $a^{1/2}=\sqrt{a}$ при $a\geq 0$. Имеем $\sqrt{16}=4$, поскольку $4^{2}=16$ и корень неотрицателен.`,
    },
    problems: [
      {
        id: "fn10-q1",
        type: "choice",
        prompt: String.raw`Функция $y=x^{4}$ является`,
        options: [
          String.raw`нечётной`,
          String.raw`чётной`,
          String.raw`линейной`,
          String.raw`периодической`,
        ],
        answerIndex: 1,
        explanation: String.raw`Чётная степень: $f(-x)=f(x)$.`,
      },
      {
        id: "fn10-q2",
        type: "open",
        prompt: String.raw`Вычислите $8^{2/3}$.`,
        accepted: ["4", "4.0"],
        explanation: String.raw`$(\sqrt[3]{8})^{2}=2^{2}=4$.`,
      },
      {
        id: "fn10-q3",
        type: "choice",
        prompt: String.raw`Область определения $y=\sqrt{x}$ — это`,
        options: [
          String.raw`$x>0$`,
          String.raw`$x\geq 0$`,
          String.raw`все действительные $x$`,
          String.raw`$x\leq 0$`,
        ],
        answerIndex: 1,
        explanation: String.raw`Под корнём чётной степени $x\geq 0$.`,
      },
      {
        id: "fn10-q4",
        type: "open",
        prompt: String.raw`Вычислите $f(2)$, если $f(x)=x^{-1}$.`,
        accepted: ["1/2", "0.5", "0,5"],
        explanation: String.raw`$2^{-1}=\dfrac{1}{2}$.`,
      },
      {
        id: "fn10-q5",
        type: "choice",
        prompt: String.raw`График $y=\dfrac{1}{x}$ — это`,
        options: [
          String.raw`парабола`,
          String.raw`прямая`,
          String.raw`гипербола`,
          String.raw`окружность`,
        ],
        answerIndex: 2,
        explanation: String.raw`Степенная функция с показателем $-1$ имеет график-гиперболу.`,
      },
      {
        id: "fn10-q6",
        type: "open",
        prompt: String.raw`Вычислите $(-2)^{3}$.`,
        accepted: ["-8", "-8.0"],
        explanation: String.raw`$(-2)^{3}=-8$; нечётная степень сохраняет знак.`,
      },
    ],
    sources: [
      {
        authors: "Колмогоров А.Н., Абрамов А.М., Дудницын Ю.П. и др.",
        title: "Алгебра и начала математического анализа. 10–11 классы",
        note: "степенная функция",
      },
      {
        authors: "Никольский С.М., Потапов М.К., Решетников Н.Н., Шевкин А.В.",
        title: "Алгебра и начала математического анализа. 10–11 классы",
        note: "степенная функция и её график",
      },
    ],
  }),
];
