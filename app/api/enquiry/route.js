import { NextResponse } from "next/server";
import { initializeApp, getApps } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

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

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, email, message } = body;

    if (!name?.trim() || !phone?.trim()) {
      return NextResponse.json({ error: "Name and phone are required" }, { status: 400 });
    }

    const db = getDb();
    const docRef = await addDoc(collection(db, "leads"), {
      name: name.trim(),
      phone: phone.trim(),
      email: email?.trim() || "",
      message: message?.trim() || "",
      createdAt: serverTimestamp(),
      source: "website",
      status: "new",
    });

    return NextResponse.json({ success: true, id: docRef.id });
  } catch (error) {
    console.error("Enquiry API error:", error);
    return NextResponse.json({ error: "Failed to submit enquiry" }, { status: 500 });
  }
}
