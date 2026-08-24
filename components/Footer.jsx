"use client";

import Logo from "./Logo";
import { useContent } from "@/components/ContentProvider";

const explore = [
  ["About", "#about"],
  ["Programs", "#programs"],
  ["Amenities", "#amenities"],
  ["Membership", "#membership"],
  ["Reviews", "#reviews"],
  ["Visit Us", "#visit"],
];

const classLinks = [
  ["Boxing", "#programs"],
  ["Yoga", "#programs"],
  ["Zumba", "#programs"],
  ["Pilates", "#programs"],
  ["Calisthenics", "#programs"],
  ["Functional Training", "#programs"],
];

export default function Footer() {
  const { content } = useContent();
  const c = content.footer;

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#top" aria-label="Gold Dozo Gym home">
              <img src="/logo-horizontal.png" alt="Gold Dozo Gym" height={40} />
            </a>
            <p>{c.brandDesc}</p>
          </div>

          <div>
            <h6>Explore</h6>
            <ul className="footer-links">
              {explore.map(([label, href]) => (
                <li key={href}>
                  <a href={href}>{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h6>Programs</h6>
            <ul className="footer-links">
              {classLinks.map(([label, href]) => (
                <li key={label}>
                  <a href={href}>{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h6>Contact</h6>
            <div className="footer-contact">
              <div>
                <b>Phone:</b>{" "}
                <a href="tel:+917070259222" style={{ color: "#ff3b41" }}>
                  {c.phone}
                </a>
              </div>
              <div>
                <b>Landline:</b>{" "}
                <a href="tel:+916123507056" style={{ color: "#c9c9d1" }}>
                  {c.landline}
                </a>
              </div>
              <div>
                <b>Website:</b>{" "}
                <a
                  href={`https://${c.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#c9c9d1" }}
                >
                  {c.website}
                </a>
              </div>
              <div>
                <b>Address:</b> {c.address}
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            {c.copyright.replace("{year}", new Date().getFullYear())}
          </span>
          <span>
            Listed on{" "}
            <a
              href="https://about.me/golddozogym"
              target="_blank"
              rel="noopener noreferrer"
            >
              about.me/golddozogym
            </a>{" "}
            ·{" "}
            <a
              href={`https://${c.website}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {c.website}
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
