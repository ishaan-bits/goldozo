"use client";

import Ico from "./Ico";
import { useContent } from "@/components/ContentProvider";

const icons = ["weights", "mirror", "cafe", "coach"];

export default function About() {
  const { content } = useContent();
  const c = content.about;

  return (
    <section className="section section-white" id="about">
      <div className="container">
        <div className="about-grid">
          <div data-reveal>
            <div className="section-head" style={{ marginBottom: 34 }}>
              <span className="kicker">{c.kicker}</span>
              <h2 className="section-title display">
                {c.heading}
                <br />
                <span className="red">{c.headingRed}</span>
              </h2>
            </div>
            <div className="about-copy">
              <p dangerouslySetInnerHTML={{ __html: c.paragraph1 }} />
              <p dangerouslySetInnerHTML={{ __html: c.paragraph2 }} />
            </div>

            <div className="about-points">
              {(c.points || []).map((p, i) => (
                <div className="point" key={i}>
                  <span className="point-ico">
                    <Ico name={icons[i] || "weights"} size={22} />
                  </span>
                  <div>
                    <h5>{p.title}</h5>
                    <p>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-visual" data-reveal>
            <div className="about-photo-stack">
              <img
                src="/photos/brand-wall.jpg"
                alt="Gold Dozo Gym branded wall with illuminated signage"
                className="about-photo about-photo-main"
              />
              <img
                src="/photos/reception.jpg"
                alt="Gold Dozo Gym reception and lobby area"
                className="about-photo about-photo-secondary"
              />
            </div>
            <div className="about-stats">
              {(c.stats || []).map((s, i) => (
                <div className="stat-card" key={i}>
                  <div className="stat-num">{s.num}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
