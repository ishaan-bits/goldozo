export function LogoMark({ size = 36, color = "#ED1C24" }) {
  return (
    <svg
      width={size}
      height={(size * 60) / 72}
      viewBox="0 0 72 60"
      fill="none"
      aria-hidden="true"
    >
      <g stroke={color} strokeWidth="7" strokeLinecap="butt">
        <path d="M8.5 56V32A27.5 27.5 0 0 1 63.5 32V56" />
        <path d="M16.5 56V32A19.5 19.5 0 0 1 55.5 32V56" />
        <path d="M24.5 56V32A11.5 11.5 0 0 1 47.5 32V48" />
        <path d="M40 56V34a6 6 0 0 0-12 0v12" />
      </g>
    </svg>
  );
}

export default function Logo({ markSize = 34, dark = false, horizontal = false }) {
  if (horizontal) {
    return (
      <img
        src="/logo-horizontal.png"
        alt="Gold Dozo Gym"
        height={markSize}
        style={{ display: "block" }}
      />
    );
  }

  return (
    <span className="brand">
      <LogoMark size={markSize} />
      <span className="brand-name">
        <b style={dark ? { color: "#101014" } : undefined}>GOLD DOZO</b>
        <span>GYM · PATNA</span>
      </span>
    </span>
  );
}
