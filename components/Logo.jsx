export default function Logo({ size = 34, horizontal = false }) {
  if (horizontal) {
    return (
      <img
        src="/logo-horizontal.png"
        alt="Gold Dozo Gym"
        height={size}
        style={{ display: "block" }}
      />
    );
  }

  return (
    <span className="brand">
      <img
        src="/logo-mark.png"
        alt="Gold Dozo Gym logo"
        height={size}
        width={size}
        style={{ display: "block", objectFit: "contain" }}
      />
      <span className="brand-name">
        <b>GOLD DOZO</b>
        <span>GYM · PATNA</span>
      </span>
    </span>
  );
}
