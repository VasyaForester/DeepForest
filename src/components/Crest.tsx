import { useId } from "react";

export function Crest({ className }: { className?: string }) {
  const uid = useId().replaceAll(":", "");
  const ring = `crest-ring-${uid}`;
  const field = `crest-field-${uid}`;

  return (
    <svg
      className={className}
      viewBox="0 0 200 220"
      role="img"
      aria-label="Герб Deep Forest Academy: ель, книга и аббревиатура DFA"
    >
      <defs>
        <linearGradient id={ring} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8B6B4A" />
          <stop offset="50%" stopColor="#D4C4A8" />
          <stop offset="100%" stopColor="#6B4F3A" />
        </linearGradient>
        <linearGradient id={field} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3D7A52" />
          <stop offset="100%" stopColor="#1B4332" />
        </linearGradient>
      </defs>
      <circle cx="100" cy="102" r="96" fill={`url(#${ring})`} />
      <circle cx="100" cy="102" r="86" fill={`url(#${field})`} />
      <circle cx="100" cy="102" r="80" fill="none" stroke="#F4F1EA" strokeWidth="1.4" opacity="0.55" />
      <g fill="#F7F4EF">
        <polygon points="100,22 107,40 93,40" />
        <polygon points="100,32 116,54 84,54" />
        <polygon points="100,46 124,74 76,74" />
        <polygon points="100,62 130,92 70,92" />
        <rect x="96" y="90" width="8" height="14" rx="1" />
      </g>
      <g transform="translate(58,108)">
        <path
          d="M8 28 L8 10 Q8 4 18 6 L40 14 L40 32 Q28 26 8 28 Z"
          fill="#F4F1EA"
          stroke="#6B4F3A"
          strokeWidth="1.2"
        />
        <path
          d="M76 28 L76 10 Q76 4 66 6 L44 14 L44 32 Q56 26 76 28 Z"
          fill="#EDE6D9"
          stroke="#6B4F3A"
          strokeWidth="1.2"
        />
        <path d="M42 14 L42 32" stroke="#6B4F3A" strokeWidth="1.4" />
        <path d="M20 16 H34 M20 21 H34" stroke="#8A8D86" strokeWidth="1" />
        <path d="M50 16 H64 M50 21 H64" stroke="#8A8D86" strokeWidth="1" />
      </g>
      <text
        x="100"
        y="176"
        textAnchor="middle"
        fill="#F7F4EF"
        fontFamily="Cormorant Garamond, Georgia, serif"
        fontSize="20"
        fontWeight="700"
        letterSpacing="3"
      >
        DFA
      </text>
      <text
        x="100"
        y="194"
        textAnchor="middle"
        fill="#D4C4A8"
        fontFamily="Manrope, sans-serif"
        fontSize="11"
        letterSpacing="2"
      >
        est. 2026
      </text>
    </svg>
  );
}
