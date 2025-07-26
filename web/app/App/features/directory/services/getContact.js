import { getDoc, getFirestore, doc } from "firebase/firestore";

const db = getFirestore();

export default async function getContact(contactId) {
  const docRef = doc(db, "contacts", contactId);
  const docSnap = await getDoc(docRef);
  if (!docSnap.exists) return [];
  return { id: docRef.id, ...docSnap.val() };
}
