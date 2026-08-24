"use client";

import { useEffect, useState } from "react";
import { collection, getDocs, doc, updateDoc, deleteDoc, orderBy, query } from "firebase/firestore";
import { getFirebaseDB } from "@/lib/firebase";

export default function AdminDashboard() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  const fetchLeads = async () => {
    try {
      const db = getFirebaseDB();
      if (!db) return;
      const q = query(collection(db, "leads"), orderBy("createdAt", "desc"));
      const snap = await getDocs(q);
      setLeads(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  useEffect(() => { fetchLeads(); }, []);

  const updateStatus = async (id, status) => {
    const db = getFirebaseDB();
    if (!db) return;
    await updateDoc(doc(db, "leads", id), { status });
    setLeads((prev) => prev.map((l) => (l.id === id ? { ...l, status } : l)));
  };

  const deleteLead = async (id) => {
    if (!confirm("Delete this lead?")) return;
    const db = getFirebaseDB();
    if (!db) return;
    await deleteDoc(doc(db, "leads", id));
    setLeads((prev) => prev.filter((l) => l.id !== id));
  };

  const filtered = filter === "all" ? leads : leads.filter((l) => l.status === filter);
  const counts = { all: leads.length, new: leads.filter((l) => l.status === "new").length, contacted: leads.filter((l) => l.status === "contacted").length, converted: leads.filter((l) => l.status === "converted").length };

  if (loading) return <div className="admin-loading"><div className="admin-spinner" /></div>;

  return (
    <div className="admin-content">
      <div className="admin-content-header">
        <h2>Leads</h2>
        <div className="admin-stats">
          <span className="admin-stat"><strong>{counts.all}</strong> total</span>
          <span className="admin-stat admin-stat-new"><strong>{counts.new}</strong> new</span>
          <span className="admin-stat"><strong>{counts.contacted}</strong> contacted</span>
          <span className="admin-stat"><strong>{counts.converted}</strong> converted</span>
        </div>
      </div>

      <div className="admin-filters">
        {["all", "new", "contacted", "converted"].map((f) => (
          <button key={f} className={`admin-filter-btn ${filter === f ? "active" : ""}`} onClick={() => setFilter(f)}>
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="admin-empty">No leads found.</p>
      ) : (
        <div className="leads-table-wrap">
          <table className="leads-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Message</th>
                <th>Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((lead) => (
                <tr key={lead.id}>
                  <td className="lead-name">{lead.name}</td>
                  <td><a href={`tel:${lead.phone}`}>{lead.phone}</a></td>
                  <td>{lead.email || "—"}</td>
                  <td className="lead-msg">{lead.message || "—"}</td>
                  <td>{lead.createdAt?.toDate ? lead.createdAt.toDate().toLocaleDateString("en-IN") : "—"}</td>
                  <td>
                    <select className={`lead-status lead-status-${lead.status}`} value={lead.status} onChange={(e) => updateStatus(lead.id, e.target.value)}>
                      <option value="new">New</option>
                      <option value="contacted">Contacted</option>
                      <option value="converted">Converted</option>
                    </select>
                  </td>
                  <td>
                    <button className="lead-delete" onClick={() => deleteLead(lead.id)} title="Delete">×</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
