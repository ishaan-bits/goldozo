"use client";

import Ico from "./Ico";
import { useContent } from "@/components/ContentProvider";

export default function Pricing() {
  const { content } = useContent();
  const c = content.pricing;

  return (
    <section className="section section-coal" id="membership">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="kicker">{c.kicker}</span>
          <h2 className="section-title display">
            {c.heading} <span className="red">{c.headingRed}</span>
          </h2>
          <p className="section-desc">
            {c.description}{" "}
            <a href="tel:+917070259222" style={{ color: "#ff3b41", fontWeight: 700 }}>
              {c.phone}
            </a>
          </p>
        </div>

        <div className="price-grid">
          {(c.plans || []).map((p) => (
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
                {(p.features || []).map((f) => (
                  <li key={f}>
                    <Ico name="check" size={16} /> {f}
                  </li>
                ))}
              </ul>
              <a className={`btn ${p.popular ? "btn-red" : "btn-ghost"}`} href="tel:+917070259222">
                {c.cta}
              </a>
            </article>
          ))}
        </div>

        <div className="disclaimer" data-reveal>
          <h5>
            <Ico name="pulse" size={18} /> {c.disclaimerHeading}
          </h5>
          <p>{c.disclaimer}</p>
          <div className="check-chips">
            {(c.checklist || []).map((item) => (
              <span className="chip" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
