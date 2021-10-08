import {
  collection,
  getFirestore,
  getDocs,
  updateDoc,
  doc,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

import app from "./firebase";

export const fetchApi = async (document: string) => {
  const db = getFirestore(app);
  const pageCollection = collection(db, document);
  return await getDocs(pageCollection);
};

export const updateData = async (document: string, data: any) => {
  const db = getFirestore(app);
  const pageCollection = collection(db, document);

  await updateDoc(doc(pageCollection, data.id), data);
};

export const uploadFile = async (filePath: string, file: File) => {
  const storage = getStorage(app);
  const storageRef = ref(storage, filePath);
  const result = await uploadBytes(storageRef, file);
  return getDownloadURL(result.ref);
};
