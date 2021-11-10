import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

import app from "./firebase";

export const uploadFile = async (filePath: string, file: File) => {
  const storage = getStorage(app);
  const storageRef = ref(storage, filePath);
  const result = await uploadBytes(storageRef, file);
  return getDownloadURL(result.ref);
};
