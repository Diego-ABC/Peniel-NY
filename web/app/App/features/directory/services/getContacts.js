import { getDoc, getFirestore } from "firebase/firestore";

const db = getFirestore();

export default async function getContacts() {
  const docRef = doc(db, "contacts");
  const docSnap = await getDoc(docRef);
  if (!docSnap.exists()) return [];
  return Object.entries(docSnap.val()).map(([id, data]) => ({ id, ...data }));
}
