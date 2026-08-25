/**
 * Проверка полноты программы после генерации уроков.
 * Запуск: node scripts/validate-lessons.mjs
 */
import { readFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const curriculum = readFileSync(join(root, "src/data/curriculum.ts"), "utf8");
const dir = join(root, "src/data/lessons/courses");
const files = readdirSync(dir).filter((f) => f.endsWith(".ts"));

const titleBlocks = [...curriculum.matchAll(/"([^"]+)":\s*\[([\s\S]*?)\]/g)];
const expected = {};
for (const m of titleBlocks) {
  if (!m[1].startsWith("school-") && !m[1].startsWith("uni-")) continue;
  expected[m[1]] = [...m[2].matchAll(/"([^"]+)"/g)].map((x) => x[1]);
}

let lessons = 0;
const missing = [];
for (const [id, titles] of Object.entries(expected)) {
  const f = files.find((x) => x === `${id}.ts`);
  if (!f) {
    missing.push(`нет файла ${id}.ts`);
    continue;
  }
  const text = readFileSync(join(dir, f), "utf8");
  const count = (text.match(/makeLesson\(/g) || []).length;
  lessons += count;
  if (count !== titles.length) {
    missing.push(`${id}: ожидалось ${titles.length} занятий, в файле ${count}`);
  }
  for (const t of titles) {
    if (!text.includes(t)) missing.push(`${id}: нет заголовка «${t}»`);
  }
}

console.log(`Файлов курсов: ${files.length}`);
console.log(`Занятий (makeLesson): ${lessons}`);
if (missing.length) {
  console.log("Проблемы:");
  for (const line of missing) console.log(" -", line);
  process.exit(1);
}
console.log("Программа полная.");
