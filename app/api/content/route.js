import { NextResponse } from "next/server";
import { initializeApp, getApps } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

function getDb() {
  const config = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  };
  const app = getApps().length === 0 ? initializeApp(config) : getApps()[0];
  return getFirestore(app);
}

export async function GET() {
  try {
    const db = getDb();
    const ref = doc(db, "settings", "content");
    const snap = await getDoc(ref);
    return NextResponse.json(snap.exists() ? snap.data() : null);
  } catch (error) {
    console.error("Content GET error:", error);
    return NextResponse.json({ error: "Failed to fetch content" }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const data = await request.json();
    const db = getDb();
    const ref = doc(db, "settings", "content");
    await setDoc(ref, data, { merge: true });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Content PUT error:", error);
    return NextResponse.json({ error: "Failed to save content" }, { status: 500 });
  }
}
