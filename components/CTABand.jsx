"use client";

import Ico from "./Ico";
import { useContent } from "@/components/ContentProvider";

export default function CTABand() {
  const { content } = useContent();
  const c = content.cta;

  return (
    <section className="cta-band">
      <div className="container">
        <h2 className="display" data-reveal>
          {c.heading}
        </h2>
        <p data-reveal>{c.description}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center" }} data-reveal>
          <a className="btn btn-light" href="tel:+917070259222">
            <Ico name="phone" size={18} /> {c.cta1}
          </a>
          <a
            className="btn btn-outline"
            href="https://www.google.com/maps/dir/?api=1&destination=Gold+Dozo+Gym+Bhavya+Iconic+Tower+Bailey+Road+Patna"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Ico name="pin" size={18} /> {c.cta2}
          </a>
        </div>
      </div>
    </section>
  );
}
