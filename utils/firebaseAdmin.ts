import * as admin from "firebase-admin";

import getCredentials from "../utils/constants";

export default function connectFirebaseAdmin() {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(getCredentials()),
    });
  }
  return admin;
}
