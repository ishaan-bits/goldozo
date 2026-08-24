import { NextResponse } from "next/server";
import { initializeApp, getApps } from "firebase/app";
import { getFirestore, collection, getDocs, doc, updateDoc, deleteDoc, orderBy, query } from "firebase/firestore";

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
    const q = query(collection(db, "leads"), orderBy("createdAt", "desc"));
    const snap = await getDocs(q);
    const leads = snap.docs.map((d) => {
      const data = d.data();
      return {
        id: d.id,
        ...data,
        createdAt: data.createdAt?.toMillis?.() || null,
      };
    });
    return NextResponse.json(leads);
  } catch (error) {
    console.error("Leads GET error:", error);
    return NextResponse.json({ error: "Failed to fetch leads" }, { status: 500 });
  }
}

export async function PATCH(request) {
  try {
    const { id, status } = await request.json();
    const db = getDb();
    await updateDoc(doc(db, "leads", id), { status });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Leads PATCH error:", error);
    return NextResponse.json({ error: "Failed to update lead" }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const { id } = await request.json();
    const db = getDb();
    await deleteDoc(doc(db, "leads", id));
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Leads DELETE error:", error);
    return NextResponse.json({ error: "Failed to delete lead" }, { status: 500 });
  }
}
