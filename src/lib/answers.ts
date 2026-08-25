export function normalizeAnswer(raw: string): string {
  return raw
    .trim()
    .toLowerCase()
    .replaceAll("ё", "е")
    .replaceAll(",", ".")
    .replaceAll("−", "-")
    .replaceAll("–", "-")
    .replaceAll("—", "-")
    .replace(/\s+/g, "")
    .replaceAll("\\", "")
    .replaceAll("$", "");
}

export function answersMatch(user: string, accepted: string[]): boolean {
  const u = normalizeAnswer(user);
  if (!u) return false;
  return accepted.some((a) => normalizeAnswer(a) === u);
}
