import { VercelRequest, VercelResponse } from "@vercel/node";
import connectFirebaseAdmin from "../../utils/firebaseAdmin";
import isAuthorized from "../../utils/isAuthorized";

export default async (request: VercelRequest, response: VercelResponse) => {
  const admin = connectFirebaseAdmin();
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
      console.error(e);
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
      } catch (e) {
        console.error(e);
        return response.status(401).send("Not authorized");
      }
    }
    return response.status(401).send("Not authorized");
  }

  return response.status(405).send("Method not allowed");
};
