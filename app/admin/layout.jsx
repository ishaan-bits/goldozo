"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { getFirebaseAuth } from "@/lib/firebase";
import { useRouter, usePathname } from "next/navigation";
import { ContentProvider } from "@/components/ContentProvider";

export default function AdminLayout({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();
  const isLoginPage = pathname === "/admin";

  useEffect(() => {
    let unsub;
    try {
      const a = getFirebaseAuth();
      if (!a) {
        setLoading(false);
        return;
      }
      unsub = onAuthStateChanged(a, (u) => {
        setUser(u);
        setLoading(false);
        if (!u && !isLoginPage) router.push("/admin");
      });
    } catch {
      setLoading(false);
    }
    return () => unsub && unsub();
  }, [router, isLoginPage]);

  if (loading) {
    return (
      <div className="admin-loading">
        <div className="admin-spinner" />
      </div>
    );
  }

  if (isLoginPage || !user) return children;

  return (
    <div className="admin-shell">
      <header className="admin-header">
        <div className="admin-header-left">
          <span className="admin-logo-text">GOLD DOZO</span>
          <span className="admin-logo-sub">Admin Console</span>
        </div>
        <nav className="admin-header-nav">
          <a href="/admin/dashboard" className={pathname === "/admin/dashboard" ? "active" : ""}>Dashboard</a>
          <a href="/admin/dashboard/leads" className={pathname.includes("/leads") ? "active" : ""}>Leads</a>
          <a href="/admin/dashboard/content" className={pathname.includes("/content") ? "active" : ""}>Content</a>
        </nav>
        <button className="admin-logout" onClick={() => { const a = getFirebaseAuth(); if (a) signOut(a); }}>Logout</button>
      </header>
      <main className="admin-main"><ContentProvider>{children}</ContentProvider></main>
    </div>
  );
}
