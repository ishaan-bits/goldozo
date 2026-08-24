"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/admin/dashboard");
    } catch (err) {
      setError("Invalid email or password.");
    }
    setLoading(false);
  };

  return (
    <div className="admin-login-page">
      <div className="admin-login-card">
        <div className="admin-login-header">
          <h1 className="admin-login-title">GOLD DOZO</h1>
          <p className="admin-login-subtitle">Admin Console</p>
        </div>
        <form onSubmit={handleLogin}>
          <label className="enq-label">
            <span>Email</span>
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="admin@golddozo.com" />
          </label>
          <label className="enq-label" style={{ marginTop: 16 }}>
            <span>Password</span>
            <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" />
          </label>
          {error && <p style={{ color: "#ef4444", fontSize: 13, marginTop: 12 }}>{error}</p>}
          <button className="btn btn-primary" type="submit" disabled={loading} style={{ width: "100%", marginTop: 20 }}>
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
