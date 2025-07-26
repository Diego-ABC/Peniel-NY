import DirectoryHeader from "../components/DirectoryHeader";
import ContactList from "../components/ContactList";
import { useActionData, useNavigation } from "react-router-dom";
import { useEffect } from "react";
import useLiveContactsList from "../hooks/useLiveContactsList";

export default function DirectoryHome() {
  const contacts = useLiveContactsList();
  return (
    <>
      <DirectoryHeader />
      <ContactList contacts={contacts} />
    </>
  );
}
