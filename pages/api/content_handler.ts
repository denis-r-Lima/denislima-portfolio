import * as admin from "firebase-admin";
import { VercelRequest, VercelResponse } from "@vercel/node";
import isAuthorized from "../../controllers/utils/isAuthorized";
import getCredentials from "../../controllers/utils/constants";

export default async (request: VercelRequest, response: VercelResponse) => {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(getCredentials()),
    });
  }

  if (request.method === "GET") {
    const db = admin.firestore();
    try {
      const contentCollection = await db
        .collection("pageContent")
        .doc(process.env.NEXT_PUBLIC_CONTENT_ID)
        .get();
      const content = contentCollection.data();
      return response.status(200).send(JSON.stringify(content));
    } catch (e) {
      return response.status(404).send("Collection not found!");
    }
  }

  if (request.method === "PUT") {
    const { token, data } = JSON.parse(request.body);
    if (await isAuthorized(token)) {
      try {
        const db = admin.firestore().collection("pageContent");
        await db.doc("vpFB3jeiSpTt2gjkjizl").update(data);
        return response.status(204).send("");
      } catch {
        return response.status(401).send("Not authorized");
      }
    }
    return response.status(401).send("Not authorized");
  }
};
