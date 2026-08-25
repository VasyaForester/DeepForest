export function RectorSignature({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 120"
      role="img"
      aria-label="Подпись ректора: буквы V и F, образующие ель"
    >
      <g fill="none" stroke="#1B4332" strokeLinecap="round" strokeLinejoin="round">
        <path d="M78 18 L48 108" strokeWidth="4.2" />
        <path d="M78 18 L92 108" strokeWidth="3.2" />
        <path d="M108 22 L108 108" strokeWidth="4" />
        <path d="M108 22 L158 22" strokeWidth="3.6" />
        <path d="M108 58 L148 58" strokeWidth="3.4" />
        <path d="M78 18 L108 22" strokeWidth="2.2" opacity="0.35" />
        <path d="M62 62 L128 58" strokeWidth="2" opacity="0.28" />
        <path d="M52 92 L138 88" strokeWidth="2" opacity="0.22" />
      </g>
      <text
        x="100"
        y="18"
        textAnchor="middle"
        fill="#1B4332"
        fontFamily="Cormorant Garamond, Georgia, serif"
        fontSize="13"
        letterSpacing="1"
      >
        V · F
      </text>
    </svg>
  );
}
