import { useEffect, useState } from "react";
import getContacts from "../services/getContacts";
import { Timestamp } from "firebase/firestore";
import subscribeToNewContacts from "../services/subscribeToNewContacts";

export default function useLiveContactsList() {
  const [contacts, setContacts] = useState([]);
  const [latestTime, setLatestTime] = useState(null);

  useEffect(() => {
    let unsubscribe = () => {};

    async function loadAndListen() {
      // 1. Load existing contacts
      const docs = await getContacts();
      setContacts(docs);

      // 2. Find latest createdAt timestamp
      const last = docs[docs.length - 1];
      const latestTimestamp = last?.createdAt ?? Timestamp.now();
      setLatestTime(latestTimestamp);

      // 3. Listen for new docs only
      unsubscribe = subscribeToNewContacts((newContacts) => {
        setContacts((prev) => [...prev, ...newContacts]);
      }, latestTimestamp);
    }

    loadAndListen();

    return unsubscribe;
  }, []);

  return contacts;
}
