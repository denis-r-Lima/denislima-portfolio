import { VercelRequest, VercelResponse } from "@vercel/node";
import isAuthorized from "../../utils/isAuthorized";
import connectFirebaseAdmin from "../../utils/firebaseAdmin";

export default async (request: VercelRequest, response: VercelResponse) => {
  const admin = connectFirebaseAdmin();

  if (request.method === "GET") {
    const db = admin.firestore();
    try {
      const portfolioCollection = await db
        .collection("portfolioItems")
        .doc(process.env.NEXT_PUBLIC_PORTFOLIO_ID)
        .get();
      const items = portfolioCollection.data().items;
      const resp = { items };
      return response.status(200).send(JSON.stringify(resp));
    } catch (e) {
      console.error(e);
      return response.status(404).send("Collection not found!");
    }
  }

  if (request.method === "PUT") {
    const { token, data } = JSON.parse(request.body);

    if (await isAuthorized(token)) {
      try {
        const db = admin.firestore().collection("portfolioItems");
        await db.doc(process.env.NEXT_PUBLIC_PORTFOLIO_ID).set(data);
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
