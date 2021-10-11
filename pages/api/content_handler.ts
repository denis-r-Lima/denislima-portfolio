import * as admin from "firebase-admin";
import { VercelRequest, VercelResponse } from "@vercel/node";
import isAuthorized from "../../controllers/utils/isAuthorized";

export default async (request: VercelRequest, response: VercelResponse) => {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(
        JSON.parse(
          Buffer.from(process.env.GOOGLE_CONFIG || "", "base64").toString(
            "ascii"
          )
        )
      ),
    });
  }

  if (request.method === "GET") {
    const db = admin.firestore();
    try {
      const contentCollection = await db.collection("pageContent").get();
      const content = contentCollection.docs[0].data();
      const resp = { id: contentCollection.docs[0].id, ...content };
      return response.status(200).send(JSON.stringify(resp));
    } catch (e) {
      return response.status(404).send("Collection not found!");
    }
  }

  if (request.method === "PUT") {
    const { token, data } = JSON.parse(request.body);
    const id = data.id;
    if (await isAuthorized(token)) {
      try {
        delete data.id;
        const db = admin.firestore().collection("pageContent");
        await db.doc(id).update(data);
        return response.status(204).send("");
      } catch {
        return response.status(401).send("Not authorized");
      }
    }
    return response.status(401).send("Not authorized");
  }
};
