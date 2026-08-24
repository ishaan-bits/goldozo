"use client";

import Ico from "./Ico";
import { useContent } from "@/components/ContentProvider";

export default function Reviews() {
  const { content } = useContent();
  const c = content.reviews;

  return (
    <section className="section section-white" id="reviews">
      <div className="container">
        <div className="reviews-top">
          <div data-reveal>
            <span className="kicker">{c.kicker}</span>
            <h2 className="section-title display">
              {c.heading} <br />
              <span className="red">{c.headingRed}</span>
            </h2>
          </div>

          <div className="score-boxes" data-reveal>
            {(c.scores || []).map((s, i) => (
              <div className="score-box" key={i}>
                <div className="score-num display">{s.score}</div>
                <div className="stars">{s.stars}</div>
                <div className="score-src">{s.source}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="review-grid">
          {(c.items || []).map((r, i) => (
            <article className="review-card" key={i} data-reveal>
              <div className="stars red">★★★★★</div>
              <p>{r.text}</p>
              <div className="review-meta">
                <b>{r.source}</b> · {r.via}
              </div>
            </article>
          ))}
        </div>

        <p
          style={{
            marginTop: 26,
            fontSize: 13,
            color: "#77777f",
          }}
        >
          {c.disclaimer}
        </p>
      </div>
    </section>
  );
}
