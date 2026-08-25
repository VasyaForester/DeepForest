import { useMemo } from "react";
import katex from "katex";

function renderKatex(tex: string, display: boolean): string {
  try {
    return katex.renderToString(tex, {
      displayMode: display,
      throwOnError: false,
      strict: false,
    });
  } catch {
    return tex;
  }
}

function toHtml(input: string): string {
  const parts: string[] = [];
  const re = /\$\$([\s\S]+?)\$\$|\$([^$\n]+?)\$/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(input))) {
    parts.push(escapeHtml(input.slice(last, m.index)).replaceAll("\n", "<br/>"));
    if (m[1] !== undefined) {
      parts.push(renderKatex(m[1], true));
    } else {
      parts.push(renderKatex(m[2], false));
    }
    last = m.index + m[0].length;
  }
  parts.push(escapeHtml(input.slice(last)).replaceAll("\n", "<br/>"));
  return parts.join("");
}

function escapeHtml(s: string): string {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

export function MathText({ text, className }: { text: string; className?: string }) {
  const html = useMemo(() => toHtml(text), [text]);
  return <span className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}
