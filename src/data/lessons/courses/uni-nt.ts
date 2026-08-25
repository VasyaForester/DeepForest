import { makeLesson } from "../../makeLesson";
import type { Lesson } from "../../../types";

const src = [
  {
    authors: "Виноградов И.М.",
    title: "Основы теории чисел",
    note: "делимость, сравнения, первообразные корни, квадратичные вычеты",
  },
];

export const lessons: Lesson[] = [
  makeLesson("uni-nt", 0, "Делимость и алгоритм Евклида", {
    theory:
      "Целое $b$ делит $a$ (пишут $b\\mid a$), если $a=bq$ для некоторого $q\\in\\mathbb{Z}$. Делимость рефлексивна и транзитивна; если $b\\mid a$ и $b\\mid c$, то $b\\mid (ax+cy)$ для любых целых $x,y$. Теорема о делении с остатком: для $b>0$ существуют единственные $q,r$ с $a=bq+r$, $0\\leqslant r<b$. Наибольший общий делитель $d=(a,b)$ есть наименьшая положительная линейная комбинация $ax+by$ (тождество Безу). Алгоритм Евклида: $(a,b)=(b,a\\bmod b)$ до нулевого остатка; число шагов не превосходит порядка $\\log a$. Взаимная простота $(a,b)=1$ равносильна существованию $x,y$ с $ax+by=1$.",
    examples: [
      {
        title: "Евклид",
        problem: "Найдите $(84,30)$.",
        solution: "$84=2\\cdot 30+24$, $30=1\\cdot 24+6$, $24=4\\cdot 6+0$, значит $(84,30)=6$.",
      },
      {
        title: "Безу",
        problem: "Представьте $1$ как $5x+3y$.",
        solution: "$5\\cdot(-1)+3\\cdot 2=1$.",
      },
    ],
    sample: {
      id: "s",
      type: "open",
      prompt: "Найдите $(48,18)$.",
      accepted: ["6"],
      explanation: "$48=2\\cdot 18+12$, $18=1\\cdot 12+6$, $12=2\\cdot 6$.",
      solution: "Алгоритм Евклида: $48=2\\cdot 18+12$, $18=1\\cdot 12+6$, $12=2\\cdot 6+0$, НОД равен $6$.",
    },
    problems: [
      {
        id: "p1",
        type: "choice",
        prompt: "Верно ли, что $3\\mid 12$?",
        options: ["да", "нет"],
        answerIndex: 0,
        explanation: "$12=3\\cdot 4$.",
      },
      {
        id: "p2",
        type: "open",
        prompt: "Остаток при делении $17$ на $5$ равен",
        accepted: ["2"],
        explanation: "$17=3\\cdot 5+2$.",
      },
      {
        id: "p3",
        type: "open",
        prompt: "Найдите $(35,14)$.",
        accepted: ["7"],
        explanation: "$35=2\\cdot 14+7$, $14=2\\cdot 7$.",
      },
      {
        id: "p4",
        type: "choice",
        prompt: "$(a,b)=1$ означает, что уравнение $ax+by=1$",
        options: ["не имеет решений в целых", "имеет целые решения", "имеет решения только при $a=1$", "имеет решения в $\\mathbb{Q}$, но не в $\\mathbb{Z}$"],
        answerIndex: 1,
        explanation: "Тождество Безу для взаимно простых чисел.",
      },
      {
        id: "p5",
        type: "open",
        prompt: "Найдите $(100,35)$.",
        accepted: ["5"],
        explanation: "$100=2\\cdot 35+30$, $35=1\\cdot 30+5$, $30=6\\cdot 5$.",
      },
      {
        id: "p6",
        type: "choice",
        prompt: "Если $d\\mid a$ и $d\\mid b$, то $d$ делит",
        options: ["только $a$", "$ax+by$ для любых целых $x,y$", "только произведение $ab$", "сумму только при $x=y=1$"],
        answerIndex: 1,
        explanation: "Линейная комбинация сохраняет делимость.",
      },
    ],
    sources: src,
  }),

  makeLesson("uni-nt", 1, "Основная теорема арифметики", {
    theory:
      "Простое число $p>1$ имеет лишь делители $1$ и $p$. Каждое целое $n>1$ разлагается в произведение простых; разложение единственно с точностью до порядка множителей (основная теорема арифметики). Доказательство единственности опирается на лемму Евклида: если $p$ простое и $p\\mid ab$, то $p\\mid a$ или $p\\mid b$. Каноническая запись $n=p_1^{\\alpha_1}\\cdots p_k^{\\alpha_k}$ позволяет вычислять $(m,n)$ и $[m,n]$ по минимумам и максимумам показателей; $mn=(m,n)[m,n]$ для положительных $m,n$. Бесконечность множества простых — теорема Евклида: иначе $N=p_1\\cdots p_k+1$ имело бы простой делитель вне списка.",
    examples: [
      {
        title: "Каноническое разложение",
        problem: "Разложите $60$ на простые.",
        solution: "$60=2^{2}\\cdot 3\\cdot 5$.",
      },
      {
        title: "НОК",
        problem: "Найдите $[12,18]$.",
        solution: "$12=2^{2}\\cdot 3$, $18=2\\cdot 3^{2}$, НОК $2^{2}\\cdot 3^{2}=36$.",
      },
    ],
    sample: {
      id: "s",
      type: "open",
      prompt: "Сколько простых множителей с учётом кратности у $12$? (то есть $\\Omega(12)$)",
      accepted: ["3"],
      explanation: "$12=2^{2}\\cdot 3$, всего три простых фактора.",
      solution: "$12=2\\cdot 2\\cdot 3$, функция $\\Omega$ считает кратности: $3$.",
    },
    problems: [
      {
        id: "p1",
        type: "choice",
        prompt: "Лемма Евклида утверждает: если простое $p$ делит $ab$, то",
        options: ["$p$ делит $a+b$", "$p\\mid a$ или $p\\mid b$", "$p$ не делит ни $a$, ни $b$", "$ab/p$ простое"],
        answerIndex: 1,
        explanation: "Простое, делящее произведение, делит один из множителей.",
      },
      {
        id: "p2",
        type: "open",
        prompt: "Запишите $45$ как произведение степеней простых в каноническом виде... Найдите сумму показателей.",
        accepted: ["3"],
        explanation: "$45=3^{2}\\cdot 5$, сумма показателей $2+1=3$.",
      },
      {
        id: "p3",
        type: "open",
        prompt: "Найдите $[8,12]$.",
        accepted: ["24"],
        explanation: "$8=2^{3}$, $12=2^{2}\\cdot 3$, НОК $2^{3}\\cdot 3=24$.",
      },
      {
        id: "p4",
        type: "choice",
        prompt: "Число $1$ является простым?",
        options: ["да", "нет"],
        answerIndex: 1,
        explanation: "Простые по определению больше $1$ и имеют ровно два натуральных делителя.",
      },
      {
        id: "p5",
        type: "open",
        prompt: "Найдите $(12,18)\\cdot[12,18]/12$. Должно получиться $18$. Проверьте: вычислите $(12,18)\\cdot[12,18]$.",
        accepted: ["216"],
        explanation: "$6\\cdot 36=216=12\\cdot 18$.",
      },
      {
        id: "p6",
        type: "choice",
        prompt: "Разложение на простые единственно",
        options: ["с точностью до порядка множителей", "вообще не единственно", "только для чётных", "только в $\\mathbb{Q}$"],
        answerIndex: 0,
        explanation: "Основная теорема арифметики.",
      },
    ],
    sources: src,
  }),

  makeLesson("uni-nt", 2, "Сравнения по модулю", {
    theory:
      "Пишут $a\\equiv b\\pmod{m}$, если $m\\mid(a-b)$. Это отношение эквивалентности; классы вычетов образуют кольцо $\\mathbb{Z}/m\\mathbb{Z}$. Сравнения можно складывать и умножать: из $a\\equiv b$, $c\\equiv d$ следует $a+c\\equiv b+d$ и $ac\\equiv bd\\pmod{m}$. Сокращение: если $ac\\equiv bc\\pmod{m}$ и $(c,m)=d$, то $a\\equiv b\\pmod{m/d}$ при условии, что $d\\mid(a-b)$ автоматически. Линейное сравнение $ax\\equiv b\\pmod{m}$ разрешимо тогда и только тогда, когда $(a,m)\\mid b$; число решений по модулю $m$ равно $(a,m)$. Полная система вычетов — любой набор из $m$ попарно несравнимых целых.",
    examples: [
      {
        title: "Арифметика",
        problem: "Найдите $7\\cdot 8\\bmod 5$.",
        solution: "$56\\equiv 1\\pmod{5}$, либо $2\\cdot 3=6\\equiv 1$.",
      },
      {
        title: "Линейное сравнение",
        problem: "Решите $2x\\equiv 3\\pmod{5}$.",
        solution: "$(2,5)=1\\mid 3$. Умножим на обратный к $2$: $2\\cdot 3=6\\equiv 1$, $x\\equiv 9\\equiv 4\\pmod{5}$.",
      },
    ],
    sample: {
      id: "s",
      type: "open",
      prompt: "Найдите остаток $15\\bmod 7$ (число от $0$ до $6$).",
      accepted: ["1"],
      explanation: "$15=2\\cdot 7+1$.",
      solution: "$15-14=1$, поэтому $15\\equiv 1\\pmod{7}$.",
    },
    problems: [
      {
        id: "p1",
        type: "choice",
        prompt: "$a\\equiv b\\pmod{m}$ означает",
        options: ["$a=b$", "$m\\mid(a-b)$", "$a\\mid m$", "$(a,b)=m$"],
        answerIndex: 1,
        explanation: "Определение сравнения.",
      },
      {
        id: "p2",
        type: "open",
        prompt: "Вычислите $11\\bmod 4$.",
        accepted: ["3"],
        explanation: "$11=2\\cdot 4+3$.",
      },
      {
        id: "p3",
        type: "open",
        prompt: "Сравнение $3x\\equiv 1\\pmod{5}$ имеет решение $x\\equiv$ ?",
        accepted: ["2"],
        explanation: "$3\\cdot 2=6\\equiv 1\\pmod{5}$.",
      },
      {
        id: "p4",
        type: "choice",
        prompt: "$ax\\equiv b\\pmod{m}$ разрешимо тогда и только тогда, когда",
        options: ["$(a,m)=1$", "$(a,m)\\mid b$", "$m\\mid a$", "$b=0$"],
        answerIndex: 1,
        explanation: "Критерий разрешимости линейного сравнения.",
      },
      {
        id: "p5",
        type: "open",
        prompt: "Сколько решений по модулю $6$ у $2x\\equiv 4\\pmod{6}$?",
        accepted: ["2"],
        explanation: "$(2,6)=2\\mid 4$, число решений равно $2$.",
      },
      {
        id: "p6",
        type: "choice",
        prompt: "Кольцо $\\mathbb{Z}/m\\mathbb{Z}$ является полем тогда и только тогда, когда $m$",
        options: ["чётное", "простое", "составное", "равно $1$"],
        answerIndex: 1,
        explanation: "Обратные существуют у всех ненулевых классов $\\Leftrightarrow$ $m$ простое.",
      },
    ],
    sources: src,
  }),

  makeLesson("uni-nt", 3, "Китайская теорема об остатках", {
    theory:
      "Если $m_1,\\ldots,m_k$ попарно взаимно просты, система $x\\equiv a_i\\pmod{m_i}$ имеет единственное решение по модулю $M=m_1\\cdots m_k$. Конструкция: $M_i=M/m_i$, выбирают $y_i$ с $M_i y_i\\equiv 1\\pmod{m_i}$, тогда $x=\\sum a_i M_i y_i$. Изоморфизм колец $\\mathbb{Z}/M\\mathbb{Z}\\simeq\\prod\\mathbb{Z}/m_i\\mathbb{Z}$ — кольцевая формулировка. Если модули не взаимно просты, система разрешима при совместимости сравнений на НОД пар модулей. КТО применяют к вычислениям с большими модулями, интерполяции и криптографии.",
    examples: [
      {
        title: "Два сравнения",
        problem: "$x\\equiv 2\\pmod{3}$, $x\\equiv 3\\pmod{5}$. Найдите $x\\bmod 15$.",
        solution: "$x=5k+3$, $5k+3\\equiv 2\\pmod{3}$, $2k\\equiv-1\\equiv 2\\pmod{3}$, $k\\equiv 1$, $x\\equiv 8\\pmod{15}$.",
      },
      {
        title: "Проверка",
        problem: "Удовлетворяет ли $x=8$ системе выше?",
        solution: "$8\\equiv 2\\pmod{3}$, $8\\equiv 3\\pmod{5}$ — да.",
      },
    ],
    sample: {
      id: "s",
      type: "open",
      prompt: "$x\\equiv 1\\pmod{2}$, $x\\equiv 2\\pmod{3}$. Найдите $x\\bmod 6$ (число $0\\leqslant x<6$).",
      accepted: ["5"],
      explanation: "Нечётное и $x=3k+2$: при $k=1$ получаем $5$.",
      solution: "$x=3k+2$ нечётно $\\Leftrightarrow$ $k$ нечётно. Наименьший положительный: $k=1$, $x=5$.",
    },
    problems: [
      {
        id: "p1",
        type: "choice",
        prompt: "Для единственности решения по модулю $m_1 m_2$ достаточно",
        options: ["$m_1=m_2$", "$(m_1,m_2)=1$", "$a_1=a_2$", "$m_1\\mid a_1$"],
        answerIndex: 1,
        explanation: "Попарная взаимная простота модулей.",
      },
      {
        id: "p2",
        type: "open",
        prompt: "$x\\equiv 0\\pmod{4}$, $x\\equiv 1\\pmod{3}$. Найдите $x\\bmod 12$.",
        accepted: ["4"],
        explanation: "Кратно $4$ и $4\\equiv 1\\pmod{3}$.",
      },
      {
        id: "p3",
        type: "open",
        prompt: "Произведение модулей $4$ и $5$ равно (модуль КТО)",
        accepted: ["20"],
        explanation: "$(4,5)=1$, $M=20$.",
      },
      {
        id: "p4",
        type: "choice",
        prompt: "Система $x\\equiv 0\\pmod{2}$, $x\\equiv 1\\pmod{4}$",
        options: ["разрешима", "несовместна", "имеет $4$ решения по модулю $4$", "равносильна $x\\equiv 0\\pmod{4}$"],
        answerIndex: 1,
        explanation: "Чётное не может давать остаток $1$ по модулю $4$.",
      },
      {
        id: "p5",
        type: "open",
        prompt: "$x\\equiv 3\\pmod{5}$, $x\\equiv 3\\pmod{7}$. Найдите $x\\bmod 35$.",
        accepted: ["3"],
        explanation: "Общее решение $x\\equiv 3\\pmod{35}$ по КТО, так как $3$ подходит обоим.",
      },
      {
        id: "p6",
        type: "choice",
        prompt: "КТО даёт изоморфизм",
        options: ["$\\mathbb{Z}\\simeq\\mathbb{Q}$", "$\\mathbb{Z}/M\\mathbb{Z}\\simeq\\prod\\mathbb{Z}/m_i\\mathbb{Z}$", "$\\mathbb{R}/\\mathbb{Z}\\simeq\\mathbb{C}$", "групп Галуа"],
        answerIndex: 1,
        explanation: "Кольцевая формулировка при $M=\\prod m_i$ и взаимной простоте.",
      },
    ],
    sources: src,
  }),

  makeLesson("uni-nt", 4, "Функция Эйлера и теорема Эйлера", {
    theory:
      "Функция Эйлера $\\varphi(n)$ — число классов $a\\bmod n$ с $(a,n)=1$. Мультипликативность: $\\varphi(mn)=\\varphi(m)\\varphi(n)$ при $(m,n)=1$; $\\varphi(p^k)=p^k-p^{k-1}=p^k(1-1/p)$. Общая формула $\\varphi(n)=n\\prod_{p\\mid n}(1-1/p)$. Группа $(\\mathbb{Z}/n\\mathbb{Z})^{\\times}$ имеет порядок $\\varphi(n)$. Теорема Эйлера: если $(a,n)=1$, то $a^{\\varphi(n)}\\equiv 1\\pmod{n}$. Следствие — малая теорема Ферма при простом $n=p$. Функция $\\varphi$ связана с суммой по делителям: $\\sum_{d\\mid n}\\varphi(d)=n$.",
    examples: [
      {
        title: "Вычисление $\\varphi$",
        problem: "Найдите $\\varphi(10)$.",
        solution: "Взаимно простые с $10$ среди $1,\\ldots,9$: $1,3,7,9$, итого $4$. Или $10(1-1/2)(1-1/5)=4$.",
      },
      {
        title: "Эйлер",
        problem: "Проверьте $3^{\\varphi(4)}\\equiv 1\\pmod{4}$.",
        solution: "$\\varphi(4)=2$, $3^{2}=9\\equiv 1\\pmod{4}$.",
      },
    ],
    sample: {
      id: "s",
      type: "open",
      prompt: "Вычислите $\\varphi(8)$.",
      accepted: ["4"],
      explanation: "$\\varphi(2^3)=8-4=4$ (нечётные $1,3,5,7$).",
      solution: "Для $p^k$ имеем $\\varphi(p^k)=p^k-p^{k-1}$. Здесь $8-4=4$.",
    },
    problems: [
      {
        id: "p1",
        type: "choice",
        prompt: "Теорема Эйлера требует",
        options: ["$n$ простое", "$(a,n)=1$", "$a\\mid n$", "$\\varphi(n)=n-1$"],
        answerIndex: 1,
        explanation: "$a$ должно быть обратимо по модулю $n$.",
      },
      {
        id: "p2",
        type: "open",
        prompt: "Вычислите $\\varphi(7)$.",
        accepted: ["6"],
        explanation: "Для простого $p$ имеем $\\varphi(p)=p-1$.",
      },
      {
        id: "p3",
        type: "open",
        prompt: "Вычислите $\\varphi(15)$.",
        accepted: ["8"],
        explanation: "$15(1-1/3)(1-1/5)=8$.",
      },
      {
        id: "p4",
        type: "choice",
        prompt: "$\\sum_{d\\mid n}\\varphi(d)$ равно",
        options: ["$\\varphi(n)$", "$n$", "$n-1$", "$0$"],
        answerIndex: 1,
        explanation: "Каждый класс $1,\\ldots,n$ имеет НОД $d$ с $n$ ровно в $\\varphi(n/d)$ случаях; сумма даёт $n$.",
      },
      {
        id: "p5",
        type: "open",
        prompt: "$3^{\\varphi(5)}\\bmod 5$ по Эйлеру равно",
        accepted: ["1"],
        explanation: "$(3,5)=1$, $3^4\\equiv 1\\pmod{5}$.",
      },
      {
        id: "p6",
        type: "choice",
        prompt: "$\\varphi$ мультипликативна в смысле",
        options: ["$\\varphi(mn)=\\varphi(m)+\\varphi(n)$ всегда", "$\\varphi(mn)=\\varphi(m)\\varphi(n)$ при $(m,n)=1$", "$\\varphi(n^2)=\\varphi(n)$", "$\\varphi(2n)=2\\varphi(n)$ всегда"],
        answerIndex: 1,
        explanation: "Слабо мультипликативная арифметическая функция.",
      },
    ],
    sources: src,
  }),

  makeLesson("uni-nt", 5, "Малая теорема Ферма и Вильсон", {
    theory:
      "Малая теорема Ферма: если $p$ простое и $p\\nmid a$, то $a^{p-1}\\equiv 1\\pmod{p}$; эквивалентно $a^p\\equiv a\\pmod{p}$ для всех целых $a$. Это частный случай Эйлера, так как $\\varphi(p)=p-1$. Теорема Вильсона: $p$ простое $\\Leftrightarrow$ $(p-1)!\\equiv-1\\pmod{p}$. Доказательство: в поле $\\mathbb{F}_p$ элементы $2,\\ldots,p-2$ разбиваются на пары взаимно обратных, остаются $1$ и $p-1\\equiv-1$. Обращение Вильсона даёт критерий простоты (непрактичный для больших $p$). Следствия Ферма используют для теста простоты и быстрой степени по модулю.",
    examples: [
      {
        title: "Ферма",
        problem: "Вычислите $2^{4}\\bmod 5$.",
        solution: "$2^{4}=16\\equiv 1\\pmod{5}$, согласуется с $2^{p-1}\\equiv 1$.",
      },
      {
        title: "Вильсон",
        problem: "Проверьте $(5-1)!\\bmod 5$.",
        solution: "$24\\equiv-1\\equiv 4\\pmod{5}$.",
      },
    ],
    sample: {
      id: "s",
      type: "open",
      prompt: "По Ферма $3^{6}\\bmod 7$ равно",
      accepted: ["1"],
      explanation: "$p-1=6$, $(3,7)=1$.",
      solution: "Малая теорема Ферма: $3^{7-1}\\equiv 1\\pmod{7}$.",
    },
    problems: [
      {
        id: "p1",
        type: "choice",
        prompt: "Формула $a^p\\equiv a\\pmod{p}$ верна",
        options: ["только при $(a,p)=1$", "для всех целых $a$ при простом $p$", "только при $a=0$", "для составных $p$ всегда"],
        answerIndex: 1,
        explanation: "Включая случай $p\\mid a$, обе части $0$.",
      },
      {
        id: "p2",
        type: "open",
        prompt: "Вычислите $4^{2}\\bmod 3$ (Ферма: $4\\equiv 1$, $1^{2}=1$). Ответ",
        accepted: ["1"],
        explanation: "$16\\equiv 1\\pmod{3}$.",
      },
      {
        id: "p3",
        type: "open",
        prompt: "$(7-1)!\\bmod 7$ по Вильсону сравнимо с (остаток $0\\ldots 6$, равный $6$ как $-1$). Ответ",
        accepted: ["6"],
        explanation: "$720\\equiv-1\\equiv 6\\pmod{7}$.",
      },
      {
        id: "p4",
        type: "choice",
        prompt: "$(n-1)!\\equiv-1\\pmod{n}$ при $n>1$ равносильно",
        options: ["чётности $n$", "простоте $n$", "$n=4$", "составности $n$"],
        answerIndex: 1,
        explanation: "Теорема Вильсона.",
      },
      {
        id: "p5",
        type: "open",
        prompt: "$2^{6}\\bmod 7$ равно",
        accepted: ["1"],
        explanation: "Ферма для $p=7$.",
      },
      {
        id: "p6",
        type: "choice",
        prompt: "Для составного $n=4$ значение $(4-1)!\\bmod 4$ равно $2$, а не $3$. Значит Вильсон как критерий",
        options: ["ошибочен", "отличает это составное от простого", "не применим к $n<5$", "требует чётности"],
        answerIndex: 1,
        explanation: "$3! =6\\equiv 2\\not\\equiv-1\\pmod{4}$.",
      },
    ],
    sources: src,
  }),

  makeLesson("uni-nt", 6, "Первообразные корни", {
    theory:
      "Порядок $a$ по модулю $n$ (при $(a,n)=1$) — наименьшее $k>0$ с $a^k\\equiv 1\\pmod{n}$; он делит $\\varphi(n)$ (теорема Лагранжа в группе единиц). Первообразный корень $g$ — образующая $(\\mathbb{Z}/n\\mathbb{Z})^{\\times}$, то есть порядок $g$ равен $\\varphi(n)$. Такие $g$ существуют в точности при $n=2,4,p^k,2p^k$ для нечётного простого $p$. Индекс (дискретный логарифм) $\\mathrm{ind}_g a$ определяется $a\\equiv g^{\\mathrm{ind} a}\\pmod{n}$. Критерий: $g$ первообразный корень по модулю $p$, если $g^{(p-1)/q}\\not\\equiv 1\\pmod{p}$ для всех простых $q\\mid(p-1)$.",
    examples: [
      {
        title: "Порядок",
        problem: "Порядок $2$ по модулю $7$: найдите наименьшее $k$ с $2^k\\equiv 1\\pmod{7}$.",
        solution: "$2^1=2$, $2^2=4$, $2^3=1\\pmod{7}$? $8\\equiv 1$, да $k=3$. Не первообразный: $\\varphi(7)=6$.",
      },
      {
        title: "Первообразный корень",
        problem: "Является ли $3$ первообразным корнем по модулю $7$?",
        solution: "$3^1=3$, $3^2=2$, $3^3=6\\equiv-1$, $3^6=1$, порядок $6=\\varphi(7)$ — да.",
      },
    ],
    sample: {
      id: "s",
      type: "open",
      prompt: "Порядок элемента делит $\\varphi(n)$. Для $n=5$ значение $\\varphi(5)$ равно",
      accepted: ["4"],
      explanation: "$5$ простое, $\\varphi=4$.",
      solution: "Группа единиц по модулю $5$ циклическая порядка $4$.",
    },
    problems: [
      {
        id: "p1",
        type: "choice",
        prompt: "Первообразный корень по модулю $n$ порождает группу",
        options: ["$\\mathbb{Z}/n\\mathbb{Z}$", "$(\\mathbb{Z}/n\\mathbb{Z})^{\\times}$", "аддитивную $\\mathbb{R}$", "только $\{1\\}$"],
        answerIndex: 1,
        explanation: "Образующая мультипликативной группы классов, взаимно простых с $n$.",
      },
      {
        id: "p2",
        type: "open",
        prompt: "Порядок $4$ по модулю $5$: $4^1\\equiv 4$, $4^2\\equiv 1$. Порядок равен",
        accepted: ["2"],
        explanation: "$4\\equiv-1$, $(-1)^2=1$.",
      },
      {
        id: "p3",
        type: "choice",
        prompt: "Первообразные корни существуют для $n=$",
        options: ["любого $n$", "$2,4,p^k,2p^k$ (нечётное простое $p$)", "только степеней двойки", "только составных"],
        answerIndex: 1,
        explanation: "Классический критерий существования образующей.",
      },
      {
        id: "p4",
        type: "open",
        prompt: "По модулю $5$ число $2$: $2^1=2$, $2^2=4$, $2^3=3$, $2^4=1$. Порядок равен",
        accepted: ["4"],
        explanation: "Первообразный корень, порядок $\\varphi(5)$.",
      },
      {
        id: "p5",
        type: "open",
        prompt: "Если порядок $a$ равен $6$, то $a^6\\equiv 1$ и меньших положительных показателей нет. Чему равно $a^{12}\\bmod n$ при условии существования порядка?",
        accepted: ["1"],
        explanation: "$a^{12}=(a^6)^2\\equiv 1$.",
      },
      {
        id: "p6",
        type: "choice",
        prompt: "Индекс $\\mathrm{ind}_g a$ — это",
        options: ["НОД $(a,g)$", "дискретный логарифм по основанию $g$", "значение $\\varphi(a)$", "остаток $a\\bmod g$"],
        answerIndex: 1,
        explanation: "$a\\equiv g^{\\mathrm{ind} a}$.",
      },
    ],
    sources: src,
  }),

  makeLesson("uni-nt", 7, "Квадратичные вычеты, символ Лежандра", {
    theory:
      "Целое $a$, $(a,p)=1$, — квадратичный вычет по модулю нечётного простого $p$, если $x^{2}\\equiv a\\pmod{p}$ разрешимо. Символ Лежандра $\\bigl(\\frac{a}{p}\\bigr)$ равен $1$, если $a$ вычет, $-1$, если невычет, и $0$, если $p\\mid a$. Критерий Эйлера: $\\bigl(\\frac{a}{p}\\bigr)\\equiv a^{(p-1)/2}\\pmod{p}$. Мультипликативность $\\bigl(\\frac{ab}{p}\\bigr)=\\bigl(\\frac{a}{p}\\bigr)\\bigl(\\frac{b}{p}\\bigr)$. Ровно $(p-1)/2$ ненулевых вычетов. Символ Якоби обобщает Лежандра на нечётные составные модули, но значение $1$ не гарантирует разрешимость.",
    examples: [
      {
        title: "Вычеты по модулю $5$",
        problem: "Квадраты: $1^{2}=1$, $2^{2}=4$, $3^{2}=4$, $4^{2}=1$. Вычеты среди $1,2,3,4$?",
        solution: "$1$ и $4$; $2$ и $3$ — невычеты. $\\bigl(\\frac{2}{5}\\bigr)=-1$.",
      },
      {
        title: "Эйлер",
        problem: "$\\bigl(\\frac{2}{7}\\bigr)\\equiv 2^{3}\\bmod 7$. Чему равно?",
        solution: "$8\\equiv 1\\pmod{7}$, символ равен $1$: $3^{2}=9\\equiv 2$.",
      },
    ],
    sample: {
      id: "s",
      type: "open",
      prompt: "Символ Лежандра $\\bigl(\\frac{4}{7}\\bigr)$ равен (так как $4$ — полный квадрат).",
      accepted: ["1"],
      explanation: "$2^{2}=4$, вычет.",
      solution: "Квадрат, взаимно простой с $7$, даёт символ $1$.",
    },
    problems: [
      {
        id: "p1",
        type: "choice",
        prompt: "$\\bigl(\\frac{a}{p}\\bigr)=0$ означает",
        options: ["$a$ невычет", "$p\\mid a$", "$(a,p)=1$ и вычет", "$p=2$"],
        answerIndex: 1,
        explanation: "Определение символа Лежандра.",
      },
      {
        id: "p2",
        type: "open",
        prompt: "Число ненулевых квадратичных вычетов по модулю $11$ равно",
        accepted: ["5"],
        explanation: "$(11-1)/2=5$.",
      },
      {
        id: "p3",
        type: "choice",
        prompt: "Критерий Эйлера: $\\bigl(\\frac{a}{p}\\bigr)\\equiv$",
        options: ["$a^{p}\\pmod{p}$", "$a^{(p-1)/2}\\pmod{p}$", "$(p-1)!$", "$\\varphi(a)$"],
        answerIndex: 1,
        explanation: "Сравнение в $\\mathbb{F}_p$.",
      },
      {
        id: "p4",
        type: "open",
        prompt: "$\\bigl(\\frac{1}{p}\\bigr)$ для нечётного простого $p$ равно",
        accepted: ["1"],
        explanation: "$1$ — квадрат.",
      },
      {
        id: "p5",
        type: "open",
        prompt: "$\\bigl(\\frac{9}{5}\\bigr)$ равно",
        accepted: ["1"],
        explanation: "$9=3^{2}$ — квадрат.",
      },
      {
        id: "p6",
        type: "choice",
        prompt: "Символ Якоби $\\bigl(\\frac{a}{n}\\bigr)=1$ при составном $n$",
        options: ["всегда означает, что $a$ — квадрат по модулю $n$", "не гарантирует разрешимость $x^{2}\\equiv a\\pmod{n}$", "равен символу Лежандра только при $n=1$", "всегда равен $0$"],
        answerIndex: 1,
        explanation: "Якоби мультипликативен по разложению $n$, но теряет критерий вычета.",
      },
    ],
    sources: src,
  }),

  makeLesson("uni-nt", 8, "Квадратичный закон взаимности", {
    theory:
      "Для различных нечётных простых $p,q$ квадратичный закон взаимности Гаусса: $\\bigl(\\frac{p}{q}\\bigr)\\bigl(\\frac{q}{p}\\bigr)=(-1)^{(p-1)(q-1)/4}$. Таким образом символы совпадают, кроме случая, когда оба простые сравнимы с $3\\pmod{4}$: тогда они противоположны. Дополнения: $\\bigl(\\frac{-1}{p}\\bigr)=(-1)^{(p-1)/2}$ (то есть $1$ при $p\\equiv 1\\pmod{4}$) и $\\bigl(\\frac{2}{p}\\bigr)=(-1)^{(p^{2}-1)/8}$ ($1$ при $p\\equiv\\pm 1\\pmod{8}$). Закон позволяет рекурсивно вычислять символы Лежандра сведением к меньшим аргументам, как в алгоритме Евклида.",
    examples: [
      {
        title: "Знак взаимности",
        problem: "$p=3$, $q=7$: оба $\\equiv 3\\pmod{4}$. Сравните $\\bigl(\\frac{3}{7}\\bigr)$ и $\\bigl(\\frac{7}{3}\\bigr)$.",
        solution: "Показатель $(2\\cdot 6)/4=3$ нечётен, символы противоположны. $\\bigl(\\frac{7}{3}\\bigr)=\\bigl(\\frac{1}{3}\\bigr)=1$, значит $\\bigl(\\frac{3}{7}\\bigr)=-1$.",
      },
      {
        title: "Двойка",
        problem: "$\\bigl(\\frac{2}{7}\\bigr)$: $7\\equiv -1\\pmod{8}$. Чему равен символ?",
        solution: "$7\\equiv 7\\pmod{8}\\equiv -1$, значит $+1$.",
      },
    ],
    sample: {
      id: "s",
      type: "open",
      prompt: "$\\bigl(\\frac{-1}{5}\\bigr)$ при $5\\equiv 1\\pmod{4}$ равно",
      accepted: ["1"],
      explanation: "$(-1)^{(5-1)/2}=(-1)^2=1$.",
      solution: "Дополнительный закон для $-1$: $p=5\\equiv 1\\pmod{4}$, символ $1$.",
    },
    problems: [
      {
        id: "p1",
        type: "choice",
        prompt: "Закон взаимности применяется к",
        options: ["чётным простым", "различным нечётным простым", "любым целым", "только $p=2$"],
        answerIndex: 1,
        explanation: "Классическая формулировка Гаусса.",
      },
      {
        id: "p2",
        type: "open",
        prompt: "$\\bigl(\\frac{-1}{7}\\bigr)$ равно (т.к. $7\\equiv 3\\pmod{4}$)",
        accepted: ["-1"],
        explanation: "$(-1)^{(7-1)/2}=(-1)^3=-1$.",
      },
      {
        id: "p3",
        type: "choice",
        prompt: "$\\bigl(\\frac{2}{p}\\bigr)=1$ тогда и только тогда, когда",
        options: ["$p\\equiv\\pm 1\\pmod{8}$", "$p\\equiv 3\\pmod{4}$", "$p=2$", "$p\\equiv 5\\pmod{8}$"],
        answerIndex: 0,
        explanation: "Дополнительный закон для двойки.",
      },
      {
        id: "p4",
        type: "open",
        prompt: "Показатель $(p-1)(q-1)/4$ нечётен, когда оба $p,q\\equiv$",
        accepted: ["3", "3 mod 4"],
        explanation: "Оба сравнимы с $3\\pmod{4}$.",
      },
      {
        id: "p5",
        type: "open",
        prompt: "$\\bigl(\\frac{5}{5}\\bigr)$ по определению Лежандра равно",
        accepted: ["0"],
        explanation: "$5\\mid 5$.",
      },
      {
        id: "p6",
        type: "choice",
        prompt: "Если $p\\equiv q\\equiv 1\\pmod{4}$, то $\\bigl(\\frac{p}{q}\\bigr)$",
        options: ["равно $-\\bigl(\\frac{q}{p}\\bigr)$", "равно $\\bigl(\\frac{q}{p}\\bigr)$", "равно $0$", "не определено"],
        answerIndex: 1,
        explanation: "Чётный показатель $(p-1)(q-1)/4$.",
      },
    ],
    sources: src,
  }),

  makeLesson("uni-nt", 9, "Цепные дроби", {
    theory:
      "Конечная цепная дробь $[a_0;a_1,\\ldots,a_n]=a_0+1/(a_1+1/(\\cdots+1/a_n))$ с $a_i\\in\\mathbb{Z}$, $a_i>0$ при $i\\geqslant 1$, представляет рациональное число; алгоритм Евклида как раз порождает неполные частные $a_i$. Подходящие дроби $p_k/q_k$ задаются рекурсией $p_{-1}=1$, $p_0=a_0$, $p_k=a_k p_{k-1}+p_{k-2}$ и аналогично для $q_k$; выполняется $p_k q_{k-1}-p_{k-1}q_k=(-1)^{k-1}$. Бесконечные дроби задают иррациональные; квадратичные иррациональности имеют периодическое разложение (Лагранж). Подходящие дроби — наилучшие приближения: $|\\alpha-p/q|<1/q^{2}$. Теорема Дирихлета о приближениях следует из теории цепных дробей.",
    examples: [
      {
        title: "Разложение рационального",
        problem: "Представьте $17/7$ цепной дробью.",
        solution: "$17=2\\cdot 7+3$, $7=2\\cdot 3+1$, $3=3\\cdot 1$, значит $[2;2,3]$.",
      },
      {
        title: "Подходящая дробь",
        problem: "Для $[1;2]$ вычислите значение.",
        solution: "$1+1/2=3/2$.",
      },
    ],
    sample: {
      id: "s",
      type: "open",
      prompt: "Значение $[2;2]$ равно (несократимая дробь $p/q$).",
      accepted: ["5/2", "2.5"],
      explanation: "$2+1/2=5/2$.",
      solution: "$[2;2]=2+1/2=5/2$.",
    },
    problems: [
      {
        id: "p1",
        type: "choice",
        prompt: "Конечные цепные дроби представляют",
        options: ["только иррациональные", "рациональные числа", "только целые", "трансцендентные"],
        answerIndex: 1,
        explanation: "Алгоритм Евклида обрывается на рациональных.",
      },
      {
        id: "p2",
        type: "open",
        prompt: "$[0;2]=1/2$. Числитель подходящей дроби равен",
        accepted: ["1"],
        explanation: "Значение $1/2$.",
      },
      {
        id: "p3",
        type: "choice",
        prompt: "Периодические цепные дроби соответствуют",
        options: ["всем вещественным", "квадратичным иррациональностям", "только $e$", "простым числам"],
        answerIndex: 1,
        explanation: "Теорема Лагранжа.",
      },
      {
        id: "p4",
        type: "open",
        prompt: "Тождество $p_k q_{k-1}-p_{k-1}q_k$ по модулю абсолютной величины равно",
        accepted: ["1"],
        explanation: "$|p_k q_{k-1}-p_{k-1}q_k|=1$.",
      },
      {
        id: "p5",
        type: "open",
        prompt: "$[3;1]$ равно (несократимая дробь).",
        accepted: ["4"],
        explanation: "$3+1/1=4$.",
      },
      {
        id: "p6",
        type: "choice",
        prompt: "Подходящие дроби $p/q$ удовлетворяют",
        options: ["$|\\alpha-p/q|>1/q$", "$|\\alpha-p/q|<1/q^{2}$ (для бесконечных разложений, типично)", "равенству $\\alpha=p$", "целочисленности $\\alpha$"],
        answerIndex: 1,
        explanation: "Наилучшие приближения Дирихлета.",
      },
    ],
    sources: src,
  }),

  makeLesson("uni-nt", 10, "Арифметические функции и свёртка Дирихле", {
    theory:
      "Арифметическая функция — отображение $f\\colon\\mathbb{N}\\to\\mathbb{C}$. Она мультипликативна, если $f(mn)=f(m)f(n)$ при $(m,n)=1$, и вполне мультипликативна, если равенство верно без взаимной простоты. Примеры: единичная $1(n)=1$, тождественная $\\mathrm{id}(n)=n$, Эйлера $\\varphi$, Мёбиуса $\\mu$, число делителей $\\tau(n)=d(n)$, сумма делителей $\\sigma(n)$. Свёртка Дирихле $(f*g)(n)=\\sum_{d\\mid n}f(d)g(n/d)$ коммутативна и ассоциативна; единица свёртки — $\\varepsilon(n)=[n=1]$. Арифметические функции образуют кольцо относительно поточечного сложения и $*$. Если $f$ мультипликативна, то $f(n)=\\prod f(p_i^{k_i})$. Классические тождества: $\\varphi*\\mathbf{1}=\\mathrm{id}$, то есть $\\sum_{d\\mid n}\\varphi(d)=n$; $\\mathbf{1}*\\mathbf{1}=\\tau$; $\\mathrm{id}*\\mathbf{1}=\\sigma$. Ряд Дирихле $\\sum f(n)n^{-s}$ переводит свёртку в произведение; $\\zeta(s)=\\sum n^{-s}$ отвечает $\\mathbf{1}$.",
    examples: [
      {
        title: "Сумма $\\varphi$",
        problem: "Проверьте $\\sum_{d\\mid 6}\\varphi(d)=6$.",
        solution:
          "Делители $1,2,3,6$: $\\varphi(1)+\\varphi(2)+\\varphi(3)+\\varphi(6)=1+1+2+2=6$.",
      },
      {
        title: "Свёртка единиц",
        problem: "Чему равно $(\\mathbf{1}*\\mathbf{1})(n)$?",
        solution:
          "$\\sum_{d\\mid n}1=\\tau(n)$ — число положительных делителей.",
      },
    ],
    sample: {
      id: "s",
      type: "open",
      prompt: "Единица свёртки $\\varepsilon(n)=[n=1]$. Значение $\\varepsilon(1)$ равно",
      accepted: ["1"],
      explanation: "Ивасава: $[1=1]=1$; при $n>1$ нуль.",
      solution:
        "По определению $\\varepsilon(1)=1$ и $\\varepsilon(n)=0$ для $n>1$. Это нейтраль относительно $*$.",
    },
    problems: [
      {
        id: "p1",
        type: "choice",
        prompt: "Свёртка Дирихле $(f*g)(n)$ равна",
        options: [
          "$\\sum_{d\\mid n}f(d)g(n/d)$",
          "$f(n)g(n)$",
          "$\\sum_{k=1}^{n}f(k)g(n-k)$",
          "$f(n)+g(n)$",
        ],
        answerIndex: 0,
        explanation: "Сумма по делителям, не свёртка Коши.",
      },
      {
        id: "p2",
        type: "open",
        prompt: "$\\sum_{d\\mid 4}\\varphi(d)=\\varphi(1)+\\varphi(2)+\\varphi(4)$ равно $|4|=$",
        accepted: ["4"],
        explanation: "$1+1+2=4$.",
      },
      {
        id: "p3",
        type: "choice",
        prompt: "Функция мультипликативна, если $f(mn)=f(m)f(n)$ при",
        options: ["$(m,n)=1$", "всех $m,n$", "$m=n$", "$n$ простом только"],
        answerIndex: 0,
        explanation: "Вполне мультипликативная — без условия взаимной простоты.",
      },
      {
        id: "p4",
        type: "open",
        prompt: "$\\tau(p^{k})=k+1$ для простого $p$. При $k=3$ число делителей равно",
        accepted: ["4"],
        explanation: "$1,p,p^{2},p^{3}$.",
      },
      {
        id: "p5",
        type: "choice",
        prompt: "$(\\mathbf{1}*\\mathbf{1})(n)$ есть",
        options: ["$\\tau(n)$", "$\\varphi(n)$", "$\\mu(n)$", "$n$"],
        answerIndex: 0,
        explanation: "Число делителей как свёртка двух копий $\\mathbf{1}$.",
      },
      {
        id: "p6",
        type: "open",
        prompt: "$\\varepsilon(6)$ для $n=6>1$ равно",
        accepted: ["0"],
        explanation: "Нейтраль свёртки сосредоточена в $1$.",
      },
    ],
    sources: src,
  }),

  makeLesson("uni-nt", 11, "Формула обращения Мёбиуса", {
    theory:
      "Функция Мёбиуса: $\\mu(1)=1$, $\\mu(n)=0$, если $n$ делится на квадрат простого, и $\\mu(p_1\\cdots p_k)=(-1)^{k}$ для различных простых. Ключевое тождество: $\\sum_{d\\mid n}\\mu(d)=\\varepsilon(n)=[n=1]$, то есть $\\mu*\\mathbf{1}=\\varepsilon$. Формула обращения Мёбиуса: если $g=f*\\mathbf{1}$, то есть $g(n)=\\sum_{d\\mid n}f(d)$, то $f=g*\\mu$ и $f(n)=\\sum_{d\\mid n}\\mu(d)g(n/d)$ (эквивалентно $f(n)=\\sum_{d\\mid n}\\mu(n/d)g(d)$). Обращение — умножение на $\\mu$ в группе обратимых относительно свёртки функций с $f(1)\\neq 0$. Следствие: $\\varphi=\\mu*\\mathrm{id}$, откуда $\\varphi(n)=n\\sum_{d\\mid n}\\mu(d)/d$. Формула включений–исключений — частный случай на решётке делителей. Для мультипликативных $g$ достаточно проверять обращение на степенях простых.",
    examples: [
      {
        title: "Сумма $\\mu$",
        problem: "Вычислите $\\sum_{d\\mid 6}\\mu(d)$ и $\\sum_{d\\mid 1}\\mu(d)$.",
        solution:
          "Делители $6$: $\\mu(1)+\\mu(2)+\\mu(3)+\\mu(6)=1+(-1)+(-1)+1=0$. Для $n=1$ сумма равна $1$.",
      },
      {
        title: "Обращение для $\\varphi$",
        problem: "Выведите $\\varphi(n)=n\\sum_{d\\mid n}\\mu(d)/d$ из $\\sum_{d\\mid n}\\varphi(d)=n$.",
        solution:
          "Полагая $g=\\mathrm{id}$, $f=\\varphi$, обращение даёт $\\varphi=\\mathrm{id}*\\mu$, то есть $\\varphi(n)=\\sum_{d\\mid n}\\mu(d)\\,(n/d)=n\\sum\\mu(d)/d$.",
      },
    ],
    sample: {
      id: "s",
      type: "open",
      prompt: "Значение $\\mu(1)$ равно",
      accepted: ["1"],
      explanation: "Определение; $\\varepsilon=\\mu*\\mathbf{1}$ в единице.",
      solution:
        "По определению $\\mu(1)=1$. Это согласовано с $\\sum_{d\\mid 1}\\mu(d)=1$.",
    },
    problems: [
      {
        id: "p1",
        type: "choice",
        prompt: "Если $g(n)=\\sum_{d\\mid n}f(d)$, то $f(n)$ равно",
        options: [
          "$\\sum_{d\\mid n}\\mu(d)g(n/d)$",
          "$\\sum_{d\\mid n}g(d)$",
          "$\\mu(n)g(n)$",
          "$g(n)-g(n-1)$",
        ],
        answerIndex: 0,
        explanation: "Формула обращения Мёбиуса: $f=g*\\mu$.",
      },
      {
        id: "p2",
        type: "open",
        prompt: "$\\mu(2)$ для простого $2$ равно $(-1)^{1}=$",
        accepted: ["-1"],
        explanation: "Один простой множитель.",
      },
      {
        id: "p3",
        type: "choice",
        prompt: "$\\mu(12)$ равно (в разложении $12=2^{2}\\cdot 3$ есть квадрат)",
        options: ["$0$", "$1$", "$-1$", "$2$"],
        answerIndex: 0,
        explanation: "Квадрат простого обнуляет $\\mu$.",
      },
      {
        id: "p4",
        type: "open",
        prompt: "$\\sum_{d\\mid n}\\mu(d)=0$ при $n>1$. Для $n=6$ эта сумма равна",
        accepted: ["0"],
        explanation: "$1-1-1+1=0$.",
      },
      {
        id: "p5",
        type: "choice",
        prompt: "$\\mu*\\mathbf{1}$ равно",
        options: ["$\\varepsilon$", "$\\mathrm{id}$", "$\\varphi$", "$\\tau$"],
        answerIndex: 0,
        explanation: "Нейтраль свёртки; основа обращения.",
      },
      {
        id: "p6",
        type: "open",
        prompt: "$\\mu(6)=\\mu(2\\cdot 3)=(-1)^{2}$ равно",
        accepted: ["1"],
        explanation: "Два различных простых.",
      },
    ],
    sources: src,
  }),

  makeLesson("uni-nt", 12, "Уравнение Пелля", {
    theory:
      "Уравнение Пелля $x^{2}-dy^{2}=1$, где $d>0$ целое, не являющееся полным квадратом, всегда имеет бесконечно много решений в натуральных числах. Если $(x_1,y_1)$ — фундаментальное решение (наименьшее $x_1>1$), все положительные решения задаются $(x_k+y_k\\sqrt{d})=(x_1+y_1\\sqrt{d})^{k}$, $k\\in\\mathbb{N}$. Это единицы нормы $1$ в кольце $\\mathbb{Z}[\\sqrt{d}]$ (норма $N(x+y\\sqrt{d})=x^{2}-dy^{2}$). Фундаментальное решение читается с подходящих дробей $\\sqrt{d}$; если период цепной дроби нечётен, уравнение $x^{2}-dy^{2}=-1$ тоже разрешимо, и его решение порождает единицу нормы $-1$. Тривиальное решение $(1,0)$. Пример: $d=2$, фундаментальное $(3,2)$, ибо $9-8=1$; следующее $(17,12)$. Для $d=3$ фундаментальное $(2,1)$: $4-3=1$. Если $d$ — квадрат, разложение $(x-y\\sqrt{d})(x+y\\sqrt{d})=1$ даёт лишь конечное число целых решений.",
    examples: [
      {
        title: "Фундаментальное для $d=2$",
        problem: "Проверьте, что $(3,2)$ решает Пелля для $d=2$, и найдите следующее решение.",
        solution:
          "$3^{2}-2\\cdot 2^{2}=9-8=1$. Далее $(3+2\\sqrt{2})^{2}=17+12\\sqrt{2}$, пара $(17,12)$: $289-2\\cdot 144=289-288=1$.",
      },
      {
        title: "Случай $d=3$",
        problem: "Найдите наименьшее натуральное решение $x^{2}-3y^{2}=1$.",
        solution: "$x=2$, $y=1$: $4-3=1$. Следующее: $(2+\\sqrt{3})^{2}=7+4\\sqrt{3}$.",
      },
    ],
    sample: {
      id: "s",
      type: "open",
      prompt: "Для $d=2$ фундаментальное $x_1$ в $x^{2}-2y^{2}=1$ равно",
      accepted: ["3"],
      explanation: "$(x,y)=(3,2)$; $9-8=1$.",
      solution:
        "Наименьшее $x>1$ с $x^{2}-2y^{2}=1$ есть $x=3$, $y=2$.",
    },
    problems: [
      {
        id: "p1",
        type: "choice",
        prompt: "Уравнение Пелля имеет вид",
        options: [
          "$x^{2}-dy^{2}=1$",
          "$x^{2}+dy^{2}=1$",
          "$x^{2}-dy=1$",
          "$x^{3}-dy^{3}=1$",
        ],
        answerIndex: 0,
        explanation: "Классическое уравнение нормы $1$.",
      },
      {
        id: "p2",
        type: "open",
        prompt: "Тривиальное решение имеет $y=0$ и $x=$",
        accepted: ["1"],
        explanation: "$(1,0)$ всегда решает уравнение.",
      },
      {
        id: "p3",
        type: "choice",
        prompt: "Все положительные решения порождаются",
        options: [
          "степенями фундаментальной единицы $x_1+y_1\\sqrt{d}$",
          "случайным перебором до $x\\leqslant d$",
          "только чётными $k$",
          "факторизацией $d$",
        ],
        answerIndex: 0,
        explanation: "$(x_k+y_k\\sqrt{d})=(x_1+y_1\\sqrt{d})^{k}$.",
      },
      {
        id: "p4",
        type: "open",
        prompt: "Для $d=3$ фундаментальное $x_1$ равно",
        accepted: ["2"],
        explanation: "$2^{2}-3\\cdot 1^{2}=1$.",
      },
      {
        id: "p5",
        type: "choice",
        prompt: "Бесконечно много решений есть, когда $d>0$",
        options: [
          "не является полным квадратом",
          "чётное",
          "простое обязательно",
          "равно $1$",
        ],
        answerIndex: 0,
        explanation: "При $d=k^{2}$ уравнение вырождается.",
      },
      {
        id: "p6",
        type: "open",
        prompt: "Следующее после $(3,2)$ решение для $d=2$ имеет $x=$ (это $17$). Запишите $x$.",
        accepted: ["17"],
        explanation: "$(3+2\\sqrt{2})^{2}=17+12\\sqrt{2}$.",
      },
    ],
    sources: src,
  }),

  makeLesson("uni-nt", 13, "Распределение простых чисел (обзор)", {
    theory:
      "Функция $\\pi(x)$ — число простых, не превосходящих $x$. Бесконечность множества простых доказал Евклид. Теорема о распределении простых чисел: $\\pi(x)\\sim x/\\ln x$ (Адамар и Валле-Пуссен, 1896), что эквивалентно $\\psi(x)\\sim x$ для функции Чебышёва $\\psi$. Элементарные оценки Чебышёва: $c_1 x/\\ln x\\leqslant\\pi(x)\\leqslant c_2 x/\\ln x$ при $x\\geqslant 2$. Тождество Эйлера $\\sum_{n}n^{-s}=\\prod_p(1-p^{-s})^{-1}=\\zeta(s)$ при $\\mathrm{Re}\\,s>1$ связывает простые с дзета-функцией; полюс $\\zeta(s)$ в $s=1$ влечёт расходимость $\\sum 1/p$. Теорема Дирихле: при $(a,d)=1$ прогрессия $a+nd$ содержит бесконечно много простых. Гипотеза Римана уточняет остаток: $\\pi(x)=\\mathrm{li}(x)+O(\\sqrt{x}\\ln x)$. Промежутки: $p_{n+1}-p_n=o(p_n)$. Постулат Бертрана: между $n$ и $2n$ при $n>1$ есть простое.",
    examples: [
      {
        title: "Малые значения",
        problem: "Найдите $\\pi(10)$ и $\\pi(20)$.",
        solution:
          "Простые $\\leqslant 10$: $2,3,5,7$, значит $\\pi(10)=4$. Простые $\\leqslant 20$: плюс $11,13,17,19$, всего $8$.",
      },
      {
        title: "Сравнение с $x/\\ln x$",
        problem: "При $x=10$ сравните $\\pi(10)=4$ и $10/\\ln 10\\approx 4{,}3$.",
        solution:
          "Порядок величины уже близок; теорема утверждает асимптотическую эквивалентность при $x\\to\\infty$, а не равенство в малой точке.",
      },
    ],
    sample: {
      id: "s",
      type: "open",
      prompt: "Число простых $\\leqslant 10$ равно $\\pi(10)=$",
      accepted: ["4"],
      explanation: "$2,3,5,7$.",
      solution:
        "Четыре простых не превосходят $10$. Функция $\\pi$ — считающая функция простых.",
    },
    problems: [
      {
        id: "p1",
        type: "choice",
        prompt: "Теорема о распределении простых утверждает",
        options: [
          "$\\pi(x)\\sim x/\\ln x$",
          "$\\pi(x)=x$",
          "$\\pi(x)\\sim\\ln x$",
          "$\\pi(x)\\sim x^{2}$",
        ],
        answerIndex: 0,
        explanation: "Асимптотика Адамара–Валле-Пуссена.",
      },
      {
        id: "p2",
        type: "open",
        prompt: "$\\pi(20)$ равно",
        accepted: ["8"],
        explanation: "Восемь простых до $20$ включительно.",
      },
      {
        id: "p3",
        type: "choice",
        prompt: "Эйлерово произведение $\\zeta(s)=\\prod_p(1-p^{-s})^{-1}$ сходится (как ряд Дирихле) при",
        options: ["$\\mathrm{Re}\\,s>1$", "$s=1$", "$\\mathrm{Re}\\,s<0$", "$s=0$"],
        answerIndex: 0,
        explanation: "Ряд $\\sum n^{-s}$ абсолютно сходится в полуплоскости $\\mathrm{Re}\\,s>1$.",
      },
      {
        id: "p4",
        type: "choice",
        prompt: "Теорема Дирихле: в прогрессии $a+nd$ при $(a,d)=1$ простых",
        options: ["бесконечно много", "ровно $d$", "нет при $a>1$", "конечное число всегда"],
        answerIndex: 0,
        explanation: "Простые в арифметических прогрессиях.",
      },
      {
        id: "p5",
        type: "open",
        prompt: "Постулат Бертрана гарантирует простое в $(n,2n)$ при $n>1$. Для $n=3$ интервал $(3,6)$ содержит простое; наименьшее такое равно",
        accepted: ["5"],
        explanation: "$5$ лежит между $3$ и $6$.",
      },
      {
        id: "p6",
        type: "open",
        prompt: "$\\pi(5)$ равно числу простых $\\leqslant 5$. Найдите его.",
        accepted: ["3"],
        explanation: "$2,3,5$.",
      },
    ],
    sources: src,
  }),
];
