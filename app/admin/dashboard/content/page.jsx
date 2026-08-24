"use client";

import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { getFirebaseDB } from "@/lib/firebase";
import { useContent } from "@/components/ContentProvider";
import { defaultContent } from "@/lib/content-defaults";

const sections = [
  { key: "hero", label: "Hero" },
  { key: "about", label: "About" },
  { key: "programs", label: "Programs" },
  { key: "gallery", label: "Gallery" },
  { key: "amenities", label: "Amenities" },
  { key: "pricing", label: "Pricing" },
  { key: "reviews", label: "Reviews" },
  { key: "visit", label: "Visit Us" },
  { key: "cta", label: "CTA Band" },
  { key: "footer", label: "Footer" },
  { key: "strips", label: "Info Strip" },
  { key: "enquiry", label: "Enquiry Form" },
];

export default function ContentEditor() {
  const { content, updateContent } = useContent();
  const [active, setActive] = useState("hero");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleChange = (path, value) => {
    updateContent(path, value);
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const db = getFirebaseDB();
      if (!db) throw new Error("Firebase not initialized");
      const ref = doc(db, "settings", "content");
      await setDoc(ref, content, { merge: true });
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    } catch (e) {
      alert("Failed to save: " + e.message);
    }
    setSaving(false);
  };

  const handleReset = async () => {
    if (!confirm("Reset all content to defaults? This cannot be undone.")) return;
    try {
      const db = getFirebaseDB();
      if (!db) throw new Error("Firebase not initialized");
      const ref = doc(db, "settings", "content");
      await setDoc(ref, defaultContent, { merge: true });
      window.location.reload();
    } catch (e) {
      alert("Failed to reset: " + e.message);
    }
  };

  return (
    <div className="admin-content">
      <div className="admin-content-header">
        <h2>Content Editor</h2>
        <div style={{ display: "flex", gap: 10 }}>
          <button className="admin-save-btn" onClick={handleSave} disabled={saving}>
            {saving ? "Saving..." : saved ? "✓ Saved" : "Save Changes"}
          </button>
          <button className="admin-reset-btn" onClick={handleReset}>Reset to Defaults</button>
        </div>
      </div>

      <div className="editor-layout">
        <aside className="editor-sidebar">
          {sections.map((s) => (
            <button key={s.key} className={`editor-tab ${active === s.key ? "active" : ""}`} onClick={() => setActive(s.key)}>
              {s.label}
            </button>
          ))}
        </aside>

        <div className="editor-panel">
          <SectionEditor section={active} content={content} onChange={handleChange} />
        </div>
      </div>
    </div>
  );
}

function SectionEditor({ section, content, onChange }) {
  const data = content[section] || {};

  const renderField = (label, path, value, type = "text") => {
    if (type === "textarea") {
      return (
        <label key={path} className="editor-field">
          <span>{label}</span>
          <textarea rows={3} value={value || ""} onChange={(e) => onChange(path, e.target.value)} />
        </label>
      );
    }
    return (
      <label key={path} className="editor-field">
        <span>{label}</span>
        <input type={type} value={value || ""} onChange={(e) => onChange(path, e.target.value)} />
      </label>
    );
  };

  const renderArrayField = (label, path, arr) => {
    if (!Array.isArray(arr)) return null;
    return (
      <div key={path} className="editor-array">
        <span className="editor-array-label">{label}</span>
        {arr.map((item, i) => (
          <div key={i} className="editor-array-item">
            {typeof item === "string" ? (
              <input value={item} onChange={(e) => {
                const newArr = [...arr];
                newArr[i] = e.target.value;
                onChange(path, newArr);
              }} />
            ) : typeof item === "object" ? (
              <div className="editor-nested">
                {Object.entries(item).map(([k, v]) => (
                  <label key={k} className="editor-field editor-field-sm">
                    <span>{k}</span>
                    <input value={v || ""} onChange={(e) => {
                      const newArr = [...arr];
                      newArr[i] = { ...newArr[i], [k]: e.target.value };
                      onChange(path, newArr);
                    }} />
                  </label>
                ))}
              </div>
            ) : null}
            <button className="editor-array-remove" onClick={() => {
              const newArr = arr.filter((_, idx) => idx !== i);
              onChange(path, newArr);
            }}>×</button>
          </div>
        ))}
        <button className="editor-array-add" onClick={() => {
          const last = arr[arr.length - 1];
          const newItem = typeof last === "string" ? "" : typeof last === "object" ? Object.fromEntries(Object.keys(last).map((k) => [k, ""])) : "";
          onChange(path, [...arr, newItem]);
        }}>+ Add Item</button>
      </div>
    );
  };

  switch (section) {
    case "hero":
      return (
        <div className="editor-fields">
          {renderField("Eyebrow", "hero.eyebrow", data.eyebrow)}
          {renderField("Heading Line 1", "hero.headingLine1", data.headingLine1)}
          {renderField("Heading Line 2", "hero.headingLine2", data.headingLine2)}
          {renderField("Description", "hero.description", data.description, "textarea")}
          {renderField("Primary CTA", "hero.ctaPrimary", data.ctaPrimary)}
          {renderField("Secondary CTA", "hero.ctaSecondary", data.ctaSecondary)}
          {renderField("Rating 1", "hero.rating1", data.rating1)}
          {renderField("Rating 2", "hero.rating2", data.rating2)}
          {renderField("Hours Badge", "hero.hours", data.hours)}
        </div>
      );

    case "about":
      return (
        <div className="editor-fields">
          {renderField("Kicker", "about.kicker", data.kicker)}
          {renderField("Heading", "about.heading", data.heading)}
          {renderField("Heading Red", "about.headingRed", data.headingRed)}
          {renderField("Paragraph 1 (HTML OK)", "about.paragraph1", data.paragraph1, "textarea")}
          {renderField("Paragraph 2 (HTML OK)", "about.paragraph2", data.paragraph2, "textarea")}
          {renderArrayField("Feature Points", "about.points", data.points)}
          {renderArrayField("Stats", "about.stats", data.stats)}
        </div>
      );

    case "programs":
      return (
        <div className="editor-fields">
          {renderField("Kicker", "programs.kicker", data.kicker)}
          {renderField("Heading", "programs.heading", data.heading)}
          {renderField("Heading Red", "programs.headingRed", data.headingRed)}
          {renderField("Description", "programs.description", data.description, "textarea")}
          {renderArrayField("Programs", "programs.items", data.items)}
        </div>
      );

    case "gallery":
      return (
        <div className="editor-fields">
          {renderField("Kicker", "gallery.kicker", data.kicker)}
          {renderField("Heading", "gallery.heading", data.heading)}
          {renderField("Heading Red", "gallery.headingRed", data.headingRed)}
          {renderField("Description", "gallery.description", data.description, "textarea")}
        </div>
      );

    case "amenities":
      return (
        <div className="editor-fields">
          {renderField("Kicker", "amenities.kicker", data.kicker)}
          {renderField("Heading", "amenities.heading", data.heading)}
          {renderField("Heading Red", "amenities.headingRed", data.headingRed)}
          {renderField("Description", "amenities.description", data.description, "textarea")}
          {renderArrayField("Amenity Labels", "amenities.items", data.items)}
          {renderField("Note", "amenities.note", data.note, "textarea")}
        </div>
      );

    case "pricing":
      return (
        <div className="editor-fields">
          {renderField("Kicker", "pricing.kicker", data.kicker)}
          {renderField("Heading", "pricing.heading", data.heading)}
          {renderField("Heading Red", "pricing.headingRed", data.headingRed)}
          {renderField("Description", "pricing.description", data.description, "textarea")}
          {renderField("Phone", "pricing.phone", data.phone)}
          {renderField("CTA Button", "pricing.cta", data.cta)}
          {renderField("Disclaimer Heading", "pricing.disclaimerHeading", data.disclaimerHeading)}
          {renderField("Disclaimer", "pricing.disclaimer", data.disclaimer, "textarea")}
          {renderArrayField("Checklist", "pricing.checklist", data.checklist)}
          {renderArrayField("Plans", "pricing.plans", data.plans)}
        </div>
      );

    case "reviews":
      return (
        <div className="editor-fields">
          {renderField("Kicker", "reviews.kicker", data.kicker)}
          {renderField("Heading", "reviews.heading", data.heading)}
          {renderField("Heading Red", "reviews.headingRed", data.headingRed)}
          {renderArrayField("Scores", "reviews.scores", data.scores)}
          {renderArrayField("Reviews", "reviews.items", data.items)}
          {renderField("Disclaimer", "reviews.disclaimer", data.disclaimer, "textarea")}
        </div>
      );

    case "visit":
      return (
        <div className="editor-fields">
          {renderField("Kicker", "visit.kicker", data.kicker)}
          {renderField("Heading", "visit.heading", data.heading)}
          {renderField("Heading Red", "visit.headingRed", data.headingRed)}
          {renderField("Description", "visit.description", data.description, "textarea")}
          {renderArrayField("Hours", "visit.hours", data.hours)}
          {renderArrayField("Contacts", "visit.contacts", data.contacts)}
          {renderArrayField("Areas", "visit.areas", data.areas)}
        </div>
      );

    case "cta":
      return (
        <div className="editor-fields">
          {renderField("Heading", "cta.heading", data.heading)}
          {renderField("Description", "cta.description", data.description, "textarea")}
          {renderField("Button 1", "cta.cta1", data.cta1)}
          {renderField("Button 2", "cta.cta2", data.cta2)}
        </div>
      );

    case "footer":
      return (
        <div className="editor-fields">
          {renderField("Brand Description", "footer.brandDesc", data.brandDesc, "textarea")}
          {renderField("Phone", "footer.phone", data.phone)}
          {renderField("Landline", "footer.landline", data.landline)}
          {renderField("Website", "footer.website", data.website)}
          {renderField("Address", "footer.address", data.address, "textarea")}
          {renderField("Copyright (use {year})", "footer.copyright", data.copyright)}
        </div>
      );

    case "strips":
      return (
        <div className="editor-fields">
          {renderField("Address Label", "strips.address", data.address)}
          {renderField("Address Detail", "strips.addressDetail", data.addressDetail)}
          {renderField("Hours Label", "strips.hours", data.hours)}
          {renderField("Hours Detail", "strips.hoursDetail", data.hoursDetail)}
          {renderField("Phone Label", "strips.phone", data.phone)}
          {renderField("Phone Detail", "strips.phoneDetail", data.phoneDetail)}
        </div>
      );

    case "enquiry":
      return (
        <div className="editor-fields">
          {renderField("Kicker", "enquiry.kicker", data.kicker)}
          {renderField("Heading", "enquiry.heading", data.heading)}
          {renderField("Heading Red", "enquiry.headingRed", data.headingRed)}
          {renderField("Description", "enquiry.description", data.description, "textarea")}
          {renderField("Success Message", "enquiry.successMessage", data.successMessage)}
        </div>
      );

    default:
      return <p>No editor for this section.</p>;
  }
}
