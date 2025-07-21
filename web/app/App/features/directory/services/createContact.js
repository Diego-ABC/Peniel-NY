import { getFirestore, doc, addDoc, updateDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import addNewImage from "./addContactImg";
import addContactImage from "./addContactImg";
const db = getFirestore();
const storage = getStorage();
export default async function createContact(contactData) {
  let hasImgFile = false;
  let imageFile = null;

  if (contactData.contactImgFile) {
    if (contactData.contactImgFile.size > 0) {
      //used for storing image file after creating contact, for contact id ref
      hasImgFile = true;
      imageFile = contactData.contactImgFile;
    }
    delete contactData.contactImgFile;
  }

  const contactRef = await addDoc(doc(db, "contacts"), contactData);

  if (!hasImgFile) return contactRef.id;

  const imgUrl = await addContactImage(
    contactData.contactImgFile,
    contactRef.id
  );

  await updateDoc(contactRef, { imgUrl });
  return contactRef.id;
}
