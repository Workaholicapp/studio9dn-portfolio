export default function Compass({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 200 200" aria-hidden="true">
      <g stroke="var(--forest-700)" fill="none">
        <circle cx="100" cy="100" r="94" strokeWidth={1} />
        <circle cx="100" cy="100" r="70" strokeWidth={0.5} opacity={0.5} />
      </g>
      <g fill="var(--forest-700)">
        <path d="M100 14 L108 100 L100 186 L92 100 Z" />
        <path d="M14 100 L100 92 L186 100 L100 108 Z" opacity={0.45} />
      </g>
      <circle cx="100" cy="100" r="4" fill="var(--ochre-500)" />
      <text x="100" y="10" textAnchor="middle" fontSize="11" fontFamily="var(--font-display)" fill="var(--forest-700)">N</text>
    </svg>
  );
}
