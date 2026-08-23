import Ico from "./Ico";
import { LogoMark } from "./Logo";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid-lines" />
      <div
        style={{
          position: "absolute",
          right: "-60px",
          top: "50%",
          transform: "translateY(-50%) rotate(8deg)",
          opacity: 0.14,
          pointerEvents: "none",
        }}
        aria-hidden="true"
      >
        <LogoMark size={520} color="#ED1C24" />
      </div>

      <div className="container hero-inner">
        <span className="eyebrow">Patna&rsquo;s Premium Fitness Destination</span>

        <h1 className="display">
          Train Hard.
          <br />
          Live <em className="outline-text">Gold.</em>
        </h1>

        <p className="hero-sub">
          Gold Dozo Gym is a full-service fitness centre on Bailey Road —
          spacious modern floors, top-tier equipment, expert coaches and
          recovery amenities like steam, sauna and an in-house nutrition café.
        </p>

        <div className="hero-actions">
          <a className="btn btn-red" href="tel:+917070259222">
            Book a Free Trial <Ico name="arrow" size={18} />
          </a>
          <a className="btn btn-ghost" href="#membership">
            View Membership
          </a>
        </div>

        <div className="hero-badges">
          <span className="badge">
            <Ico name="star" size={15} /> 4.4 / 5 · Justdial (~330 ratings)
          </span>
          <span className="badge">
            <Ico name="star" size={15} /> 4.8 / 5 · Yappe (115 reviews)
          </span>
          <span className="badge">
            <Ico name="clock" size={15} /> Mon–Sat · 5:30 AM – 10 PM
          </span>
        </div>
      </div>

      <div className="scroll-hint">Scroll</div>
    </section>
  );
}
