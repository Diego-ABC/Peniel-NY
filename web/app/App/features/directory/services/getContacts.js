import {
  getDocs,
  getFirestore,
  collection,
  orderBy,
  query,
} from "firebase/firestore";

const db = getFirestore();

export default async function getContacts() {
  const docsSnap = await getDocs(
    query(collection(db, "contacts"), orderBy("createdAt", "asc"))
  );
  if (docsSnap.empty) return [];
  return docsSnap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}
