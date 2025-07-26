import {
  collection,
  getFirestore,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";

const db = getFirestore();
export default function subscribeToNewContacts(callback, latestTimestamp) {
  const newContactsQuery = query(
    collection(db, "contacts"),
    where("createdAt", ">", latestTimestamp),
    orderBy("createdAt", "asc")
  );
  return onSnapshot(newContactsQuery, (snapshot) => {
    const newDocs = snapshot
      .docChanges()
      .filter(({ type }) => type === "added")
      .map((change) => ({ id: change.doc.id, ...change.doc.data() }));
    if (newDocs.length > 0) callback(newDocs);
  });
}
