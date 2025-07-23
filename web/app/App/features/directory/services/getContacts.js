import { getDocs, getFirestore, collection } from "firebase/firestore";

const db = getFirestore();

export default async function getContacts() {
  const docsSnap = await getDocs(collection(db, "contacts"));
  if (!docsSnap.exists()) return [];
  return Object.entries(docsSnap.val()).map(([id, data]) => ({ id, ...data }));
}
