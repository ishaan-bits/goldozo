"use client";

import Ico from "./Ico";
import { useContent } from "@/components/ContentProvider";

export function InfoStrip() {
  const { content } = useContent();
  const c = content.strips;

  return (
    <div className="strip">
      <div className="container strip-inner">
        <div className="strip-item">
          <span className="strip-icon">
            <Ico name="pin" size={22} />
          </span>
          <div>
            <h4>{c.address}</h4>
            <p>{c.addressDetail}</p>
          </div>
        </div>
        <div className="strip-item">
          <span className="strip-icon">
            <Ico name="clock" size={22} />
          </span>
          <div>
            <h4>{c.hours}</h4>
            <p>{c.hoursDetail}</p>
          </div>
        </div>
        <div className="strip-item">
          <span className="strip-icon">
            <Ico name="phone" size={20} />
          </span>
          <div>
            <h4>{c.phone}</h4>
            <p>{c.phoneDetail}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Marquee() {
  const { content } = useContent();
  const items = content.marquee || [];
  const row = [...items, ...items];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {row.map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>
    </div>
  );
}
