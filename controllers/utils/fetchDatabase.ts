import { collection, getFirestore, getDoc, doc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

import app from "./firebase";

export const fetchApi = async (document: string, targetDoc: string) => {
  const db = getFirestore(app);
  const pageCollection = collection(db, document);
  return await getDoc(doc(pageCollection, targetDoc));
};

export const uploadFile = async (filePath: string, file: File) => {
  const storage = getStorage(app);
  const storageRef = ref(storage, filePath);
  const result = await uploadBytes(storageRef, file);
  return getDownloadURL(result.ref);
};
