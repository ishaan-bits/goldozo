"use client";

import Ico from "./Ico";
import { useContent } from "@/components/ContentProvider";

const contactIcons = ["phone", "phone", "globe", "pin"];

function getContactHref(label, value) {
  if (label === "Primary") return `tel:${value.replace(/\s/g, "")}`;
  if (label === "Landline") return `tel:${value.replace(/\s/g, "")}`;
  if (label === "Website") return `https://${value}`;
  return undefined;
}

export default function Visit() {
  const { content } = useContent();
  const c = content.visit;

  return (
    <section className="section section-dark" id="visit">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="kicker">{c.kicker}</span>
          <h2 className="section-title display">
            {c.heading} <span className="red">{c.headingRed}</span>
          </h2>
          <p className="section-desc">{c.description}</p>
        </div>

        <div className="visit-grid">
          <div data-reveal>
            <div className="hours-table">
              {(c.hours || []).map((h) => (
                <div className="hours-row" key={h.day}>
                  <span className="hours-day">{h.day}</span>
                  <span className={`hours-time ${h.day === "Sunday" ? "warn" : ""}`}>
                    {h.time}
                  </span>
                </div>
              ))}
            </div>

            <div className="contact-lines">
              {(c.contacts || []).map((ct, i) => {
                const href = getContactHref(ct.label, ct.value);
                return (
                  <a
                    key={ct.label}
                    href={href || "#"}
                    className="contact-line"
                    target={href ? "_blank" : undefined}
                    rel={href ? "noopener noreferrer" : undefined}
                  >
                    <Ico name={contactIcons[i] || "pin"} size={20} />
                    <div>
                      <span>{ct.label}</span>
                      {ct.value}
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="area-chips">
              {(c.areas || []).map((a) => (
                <span className="chip" key={a}>
                  {a}
                </span>
              ))}
            </div>
          </div>

          <div className="map-wrap" data-reveal>
            <iframe
              className="map-frame"
              title="Gold Dozo Gym location"
              loading="lazy"
              src="https://www.google.com/maps?q=Gold%20Dozo%20Gym%2C%20Bhavya%20Iconic%20Tower%2C%20Bailey%20Road%2C%20Patna&output=embed"
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="map-actions">
              <a
                className="btn btn-red"
                href="https://www.google.com/maps/dir/?api=1&destination=Gold+Dozo+Gym+Bhavya+Iconic+Tower+Bailey+Road+Patna"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Ico name="arrow" size={16} /> Get Directions
              </a>
              <a className="btn btn-ghost" href="tel:+917070259222">
                <Ico name="phone" size={16} /> Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
