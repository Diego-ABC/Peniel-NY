import {
  getFirestore,
  collection,
  // addDoc,
  // updateDoc,
  doc,
  serverTimestamp,
  setDoc,
  Timestamp,
} from "firebase/firestore";
// import { getStorage } from "firebase/storage";
import addContactImage from "./addContactImg";
const db = getFirestore();
// const storage = getStorage();
export default async function createContact(contactData) {
  // contactData.createdAt = serverTimestamp();
  contactData.createdAt = Timestamp.now();
  let hasImgFile = false;
  let imageFile = null;
  console.log(contactData);
  if (contactData.contactImgFile) {
    if (contactData.contactImgFile.size > 0) {
      //used for storing image file after creating contact, for contact id ref
      hasImgFile = true;
      imageFile = contactData.contactImgFile;
    }
    delete contactData.contactImgFile;
  }

  // const contactRef = await addDoc(collection(db, "contacts"), contactData);
  const contactRef = doc(collection(db, "contacts"));

  if (hasImgFile)
    contactData.imgUrl = await addContactImage(imageFile, contactRef.id);
  // const imgUrl = await addContactImage(imageFile, contactRef.id);
  // console.log("adding doc url");
  // // await updateDoc(contactRef, { imgUrl });
  // contactData.imgUrl = imgUrl

  await setDoc(contactRef, contactData);

  return contactRef.id;
}
