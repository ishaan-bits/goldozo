"use client";

import Ico from "./Ico";
import { useContent } from "@/components/ContentProvider";

const icons = ["steam", "sauna", "cafe", "coach", "mirror", "pulse", "weights", "machines"];

export default function Amenities() {
  const { content } = useContent();
  const c = content.amenities;

  return (
    <section className="section section-white" id="amenities">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="kicker">{c.kicker}</span>
          <h2 className="section-title display">
            {c.heading} <span className="red">{c.headingRed}</span>
          </h2>
          <p className="section-desc">{c.description}</p>
        </div>

        <div className="amen-grid">
          {(c.items || []).map((label, i) => (
            <div className="amen" key={i} data-reveal>
              <span className="amen-ico">
                <Ico name={icons[i] || "weights"} size={21} />
              </span>
              {label}
            </div>
          ))}
        </div>

        <div className="amen-note" data-reveal>
          {c.note}
        </div>
      </div>
    </section>
  );
}
