"use client";

import Ico from "./Ico";
import { useContent } from "@/components/ContentProvider";

export default function Hero() {
  const { content } = useContent();
  const c = content.hero;

  return (
    <section className="hero" id="top">
      <div
        className="hero-bg hero-bg-anim"
        style={{ backgroundImage: "url(/photos/gym-floor.jpg)" }}
      />
      <div className="hero-overlay" />
      <div className="hero-grid-lines" />

      <div className="container hero-inner">
        <span className="eyebrow hero-anim anim-1">{c.eyebrow}</span>

        <h1 className="display">
          <span className="hero-anim anim-2">{c.headingLine1}</span>
          <br />
          <span className="hero-anim anim-3">{c.headingLine2.split("Gold")[0]}<em className="outline-text">Gold</em>{c.headingLine2.split("Gold")[1] || "."}</span>
        </h1>

        <p className="hero-sub hero-anim anim-4">{c.description}</p>

        <div className="hero-actions hero-anim anim-5">
          <a className="btn btn-red" href="tel:+917070259222">
            {c.ctaPrimary} <Ico name="arrow" size={18} />
          </a>
          <a className="btn btn-ghost" href="#membership">
            {c.ctaSecondary}
          </a>
        </div>

        <div className="hero-badges hero-anim anim-6">
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

      <div className="scroll-hint hero-anim anim-7">{c.scrollHint}</div>
    </section>
  );
}
