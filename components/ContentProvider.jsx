"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { defaultContent } from "@/lib/content-defaults";

const ContentContext = createContext(null);

export function ContentProvider({ children }) {
  const [content, setContent] = useState(defaultContent);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/content");
        const data = await res.json();
        if (data && typeof data === "object") {
          setContent((prev) => deepMerge(prev, data));
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
  };

  const saveContent = async () => {
    const res = await fetch("/api/content", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(content),
    });
    if (!res.ok) throw new Error("Failed to save");
  };

  return (
    <ContentContext.Provider value={{ content, loading, updateContent, saveContent }}>
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
