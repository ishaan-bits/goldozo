"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { defaultContent } from "@/lib/content-defaults";

const ContentContext = createContext(null);

export function ContentProvider({ children }) {
  const [content, setContent] = useState(defaultContent);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const ref = doc(db, "settings", "content");
        const snap = await getDoc(ref);
        if (snap.exists()) {
          setContent((prev) => deepMerge(prev, snap.data()));
        }
      } catch (e) {
        console.warn("Using default content:", e.message);
      }
      setLoading(false);
    })();
  }, []);

  const updateContent = async (path, value) => {
    const keys = path.split(".");
    const updated = { ...content };
    let obj = updated;
    for (let i = 0; i < keys.length - 1; i++) {
      obj[keys[i]] = { ...obj[keys[i]] };
      obj = obj[keys[i]];
    }
    obj[keys[keys.length - 1]] = value;
    setContent(updated);
    try {
      const ref = doc(db, "settings", "content");
      await setDoc(ref, toRaw(updated), { merge: true });
    } catch (e) {
      console.error("Failed to save:", e.message);
    }
  };

  return (
    <ContentContext.Provider value={{ content, loading, updateContent }}>
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  const ctx = useContext(ContentContext);
  if (!ctx) throw new Error("useContent must be used within ContentProvider");
  return ctx;
}

function deepMerge(target, source) {
  const result = { ...target };
  for (const key of Object.keys(source)) {
    if (
      source[key] &&
      typeof source[key] === "object" &&
      !Array.isArray(source[key]) &&
      target[key] &&
      typeof target[key] === "object" &&
      !Array.isArray(target[key])
    ) {
      result[key] = deepMerge(target[key], source[key]);
    } else if (source[key] !== undefined) {
      result[key] = source[key];
    }
  }
  return result;
}

function toRaw(obj) {
  if (obj === null || typeof obj !== "object") return obj;
  if (Array.isArray(obj)) return obj.map(toRaw);
  const raw = {};
  for (const [k, v] of Object.entries(obj)) {
    raw[k] = toRaw(v);
  }
  return raw;
}
