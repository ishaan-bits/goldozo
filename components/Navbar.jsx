"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";

const links = [
  ["About", "#about"],
  ["Programs", "#programs"],
  ["Amenities", "#amenities"],
  ["Membership", "#membership"],
  ["Reviews", "#reviews"],
  ["Visit Us", "#visit"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#top" aria-label="Gold Dozo Gym home">
          <Logo />
        </a>

        <nav className="nav-links" aria-label="Primary">
          {links.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>

        <div className="nav-cta">
          <a className="nav-phone" href="tel:+917070259222">
            +91 70702 59222
          </a>
          <button
            className={`burger ${open ? "open" : ""}`}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${open ? "open" : ""}`}>
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <a className="btn btn-red" href="tel:+917070259222" onClick={() => setOpen(false)}>
          Call +91 70702 59222
        </a>
      </div>
    </header>
  );
}
