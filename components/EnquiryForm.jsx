"use client";

import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useContent } from "@/components/ContentProvider";

export default function EnquiryForm() {
  const { content } = useContent();
  const c = content.enquiry;
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [status, setStatus] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      setStatus({ ok: false, msg: "Name and phone are required." });
      return;
    }
    setSubmitting(true);
    try {
      await addDoc(collection(db, "leads"), {
        ...form,
        createdAt: serverTimestamp(),
        source: "website",
        status: "new",
      });
      setStatus({ ok: true, msg: c.successMessage || "Thank you! We'll contact you soon." });
      setForm({ name: "", phone: "", email: "", message: "" });
    } catch (err) {
      setStatus({ ok: false, msg: "Something went wrong. Please try again." });
    }
    setSubmitting(false);
  };

  return (
    <section className="section section-dark" id="enquiry">
      <div className="container" style={{ maxWidth: 640 }}>
        <div className="section-head" style={{ textAlign: "center" }} data-reveal>
          <span className="kicker" style={{ justifyContent: "center" }}>{c.kicker}</span>
          <h2 className="section-title display">
            {c.heading} <span className="red">{c.headingRed}</span>
          </h2>
          <p className="section-desc" style={{ marginInline: "auto" }}>{c.description}</p>
        </div>

        <form className="enquiry-form" onSubmit={handleSubmit} data-reveal>
          <div className="enq-row">
            <label className="enq-label">
              <span>Name *</span>
              <input name="name" type="text" required placeholder="Your name" value={form.name} onChange={handleChange} />
            </label>
            <label className="enq-label">
              <span>Phone *</span>
              <input name="phone" type="tel" required placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={handleChange} />
            </label>
          </div>
          <label className="enq-label">
            <span>Email</span>
            <input name="email" type="email" placeholder="you@example.com" value={form.email} onChange={handleChange} />
          </label>
          <label className="enq-label">
            <span>Message</span>
            <textarea name="message" rows={4} placeholder="Tell us what you're looking for..." value={form.message} onChange={handleChange} />
          </label>
          <button className="btn btn-primary" type="submit" disabled={submitting} style={{ width: "100%" }}>
            {submitting ? "Sending..." : "Send Enquiry"}
          </button>
          {status && (
            <p style={{ textAlign: "center", marginTop: 12, color: status.ok ? "#22c55e" : "#ef4444", fontFamily: "var(--font-body)", fontSize: 14 }}>
              {status.msg}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
