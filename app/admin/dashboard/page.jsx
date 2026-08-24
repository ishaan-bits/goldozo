"use client";

import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/leads");
        const data = await res.json();
        if (Array.isArray(data)) setLeads(data);
      } catch (e) {
        console.error(e);
      }
      setLoading(false);
    })();
  }, []);

  const counts = {
    all: leads.length,
    new: leads.filter((l) => l.status === "new").length,
    contacted: leads.filter((l) => l.status === "contacted").length,
    converted: leads.filter((l) => l.status === "converted").length,
  };

  const recentLeads = leads.slice(0, 5);
  const today = new Date().toDateString();
  const todayLeads = leads.filter((l) => l.createdAt && new Date(l.createdAt).toDateString() === today);

  if (loading) return <div className="admin-loading"><div className="admin-spinner" /></div>;

  return (
    <div className="admin-content">
      <h2 style={{ fontFamily: "var(--font-display)", fontSize: 24, letterSpacing: "0.06em", color: "#fff", marginBottom: 28 }}>
        Dashboard
      </h2>

      <div className="dash-stats-grid">
        <div className="dash-stat-card">
          <div className="dash-stat-num">{counts.all}</div>
          <div className="dash-stat-label">Total Leads</div>
        </div>
        <div className="dash-stat-card dash-stat-new">
          <div className="dash-stat-num">{counts.new}</div>
          <div className="dash-stat-label">New</div>
        </div>
        <div className="dash-stat-card dash-stat-contacted">
          <div className="dash-stat-num">{counts.contacted}</div>
          <div className="dash-stat-label">Contacted</div>
        </div>
        <div className="dash-stat-card dash-stat-converted">
          <div className="dash-stat-num">{counts.converted}</div>
          <div className="dash-stat-label">Converted</div>
        </div>
      </div>

      <div className="dash-grid">
        <div className="dash-panel">
          <h3 className="dash-panel-title">Recent Enquiries</h3>
          {recentLeads.length === 0 ? (
            <p className="admin-empty">No enquiries yet.</p>
          ) : (
            <div className="dash-lead-list">
              {recentLeads.map((lead) => (
                <div className="dash-lead-item" key={lead.id}>
                  <div className="dash-lead-info">
                    <strong>{lead.name}</strong>
                    <span className={`lead-status lead-status-${lead.status}`}>{lead.status}</span>
                  </div>
                  <div className="dash-lead-detail">
                    <a href={`tel:${lead.phone}`}>{lead.phone}</a>
                    <span className="dash-lead-date">
                      {lead.createdAt ? new Date(lead.createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "short" }) : "—"}
                    </span>
                  </div>
                  {lead.message && <p className="dash-lead-msg">{lead.message}</p>}
                </div>
              ))}
            </div>
          )}
          {leads.length > 5 && (
            <a href="/admin/dashboard/leads" className="dash-view-all">View all leads →</a>
          )}
        </div>

        <div className="dash-panel">
          <h3 className="dash-panel-title">Quick Actions</h3>
          <div className="dash-actions">
            <a href="/admin/dashboard/leads" className="dash-action-card">
              <span className="dash-action-icon">📋</span>
              <div>
                <strong>Manage Leads</strong>
                <p>View, filter and update lead statuses</p>
              </div>
            </a>
            <a href="/admin/dashboard/content" className="dash-action-card">
              <span className="dash-action-icon">✏️</span>
              <div>
                <strong>Edit Content</strong>
                <p>Update text, pricing, programs and more</p>
              </div>
            </a>
            <a href="/" target="_blank" className="dash-action-card">
              <span className="dash-action-icon">🌐</span>
              <div>
                <strong>View Website</strong>
                <p>Preview the live site</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
