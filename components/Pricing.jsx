import Ico from "./Ico";

const plans = [
  {
    name: "Monthly",
    price: "₹2,500",
    per: "/month",
    note: "Flexible, no long lock-in",
    features: [
      "Full gym floor access",
      "Cardio + strength zones",
      "Locker & changing rooms",
      "Trial session available",
    ],
    popular: false,
  },
  {
    name: "Annual",
    price: "₹20,000",
    per: "/year",
    note: "Works out to ~₹1,667 / month",
    features: [
      "Everything in Monthly",
      "Classes — boxing, yoga, zumba & more",
      "Steam & sauna access",
      "Fitness consultation",
    ],
    popular: true,
  },
  {
    name: "Couples Annual",
    price: "₹24,999",
    per: "/year",
    note: "Promotional package · for two",
    features: [
      "Two full annual memberships",
      "Train together, stay consistent",
      "Access to classes & recovery zone",
      "Great value vs two single plans",
    ],
    popular: false,
  },
];

const checklist = [
  "Joining fee",
  "GST & taxes",
  "3 / 6-month options",
  "Student discount",
  "Personal training rates",
  "Renewal price",
  "Freeze / pause policy",
];

export default function Pricing() {
  return (
    <section className="section section-coal" id="membership">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="kicker">Membership</span>
          <h2 className="section-title display">
            Plans For Every <span className="red">Commitment</span>
          </h2>
          <p className="section-desc">
            Indicative pricing based on current public listings. Call{" "}
            <a href="tel:+917070259222" style={{ color: "#ff3b41", fontWeight: 700 }}>
              +91 70702 59222
            </a>{" "}
            for today&rsquo;s exact rate card and running offers.
          </p>
        </div>

        <div className="price-grid">
          {plans.map((p) => (
            <article
              key={p.name}
              className={`price-card ${p.popular ? "popular" : ""}`}
              data-reveal
            >
              {p.popular && <span className="pop-flag">Most Popular</span>}
              <div className="plan-name">{p.name}</div>
              <div className="plan-price display">
                {p.price} <small>{p.per}</small>
              </div>
              <p className="plan-note">{p.note}</p>
              <ul className="plan-list">
                {p.features.map((f) => (
                  <li key={f}>
                    <Ico name="check" size={16} /> {f}
                  </li>
                ))}
              </ul>
              <a className={`btn ${p.popular ? "btn-red" : "btn-ghost"}`} href="tel:+917070259222">
                Call to Enroll
              </a>
            </article>
          ))}
        </div>

        <div className="disclaimer" data-reveal>
          <h5>
            <Ico name="pulse" size={18} /> Before You Pay — Confirm These
          </h5>
          <p>
            Prices above are third-party estimates, not an official Gold Dozo
            rate sheet — promotional pricing changes often (e.g., a couples
            annual at ₹24,999 ran in Feb 2026). Ask the front desk to walk you
            through the complete current rate card:
          </p>
          <div className="check-chips">
            {checklist.map((c) => (
              <span className="chip" key={c}>
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
