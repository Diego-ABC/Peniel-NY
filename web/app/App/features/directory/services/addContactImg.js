import { getStorage, uploadBytes, getDownloadURL, ref } from "firebase/storage";

const storage = getStorage();

export default async function addContactImage(imgFile, contactId) {
  const contactImgRef = ref(storage, `contacts`);
  const uploadSnap = await uploadBytes(contactImgRef, imgFile, {
    contentType: file.type,
  });
  const downloadURL = await getDownloadURL(contactImgRef);
  return downloadURL;
}
