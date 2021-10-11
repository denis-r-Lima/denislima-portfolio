import * as admin from "firebase-admin";

const isAuthorized = async (token: string) => {
  if (!token) return false;
  try {
    const user = await admin.auth().verifyIdToken(token);
    if (user) return true;
    return false;
  } catch {
    return false;
  }
};

export default isAuthorized;
