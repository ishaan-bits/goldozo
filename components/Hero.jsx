"use client";

import Ico from "./Ico";
import { useContent } from "@/components/ContentProvider";

export default function Hero() {
  const { content } = useContent();
  const c = content.hero;

  return (
    <section className="hero" id="top">
      <div
        className="hero-bg"
        style={{ backgroundImage: "url(/photos/gym-floor.jpg)" }}
      />
      <div className="hero-overlay" />
      <div className="hero-grid-lines" />

      <div className="container hero-inner">
        <span className="eyebrow">{c.eyebrow}</span>

        <h1 className="display">
          {c.headingLine1}
          <br />
          {c.headingLine2.split("Gold")[0]}<em className="outline-text">Gold</em>{c.headingLine2.split("Gold")[1] || "."}
        </h1>

        <p className="hero-sub">{c.description}</p>

        <div className="hero-actions">
          <a className="btn btn-red" href="tel:+917070259222">
            {c.ctaPrimary} <Ico name="arrow" size={18} />
          </a>
          <a className="btn btn-ghost" href="#membership">
            {c.ctaSecondary}
          </a>
        </div>

        <div className="hero-badges">
          <span className="badge">
            <Ico name="star" size={15} /> {c.rating1}
          </span>
          <span className="badge">
            <Ico name="star" size={15} /> {c.rating2}
          </span>
          <span className="badge">
            <Ico name="clock" size={15} /> {c.hours}
          </span>
        </div>
      </div>

      <div className="scroll-hint">{c.scrollHint}</div>
    </section>
  );
}
