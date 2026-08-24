"use client";

import Ico from "./Ico";
import { useContent } from "@/components/ContentProvider";

const icons = ["dumbbell", "pulse", "glove", "lotus", "note", "rings", "bar", "kettlebell"];
const images = [
  "/photos/programs/strength.jpg",
  "/photos/programs/cardio.jpg",
  "/photos/programs/boxing.jpg",
  "/photos/programs/yoga.jpg",
  "/photos/programs/zumba.jpg",
  "/photos/programs/pilates.jpg",
  "/photos/programs/calisthenics.jpg",
  "/photos/programs/functional.jpg",
];

export default function Programs() {
  const { content } = useContent();
  const c = content.programs;

  return (
    <section className="section section-dark" id="programs">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="kicker">{c.kicker}</span>
          <h2 className="section-title display">
            {c.heading} <span className="red">{c.headingRed}</span>
          </h2>
          <p className="section-desc">{c.description}</p>
        </div>

        <div className="cards-grid">
          {(c.items || []).map((p, i) => (
            <article className="card card-img" key={i} data-reveal>
              <div className="card-img-wrap">
                <img src={images[i] || images[0]} alt={p.title} loading="lazy" />
                <div className="card-img-overlay" />
                {p.tag && <span className="card-tag">{p.tag}</span>}
              </div>
              <div className="card-body">
                <span className="card-ico">
                  <Ico name={icons[i] || "dumbbell"} size={26} />
                </span>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
