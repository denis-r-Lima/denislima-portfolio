import * as admin from "firebase-admin";
import { VercelRequest, VercelResponse } from "@vercel/node";
import getCredentials from "../../utils/constants";

export default async (request: VercelRequest, response: VercelResponse) => {
  if (request.method === "PUT") {
    if (!request.cookies.previous_visitor) {
      response.setHeader("Set-Cookie", [
        "previous_visitor=true; Path=/; Max-Age=31536000 ; HttpOnly", // Max-Age for 1 year
      ]);
      if (!admin.apps.length) {
        admin.initializeApp({
          credential: admin.credential.cert(getCredentials()),
        });
      }
      const db = admin.firestore();
      try {
        const docVisitors = db.collection("singleVisitors").doc("visitors");
        const visitors = await docVisitors.get();
        const data = visitors.data();
        const newData = { ...data, visitors: data.visitors + 1 };
        await docVisitors.update(newData);
      } catch (error) {
        console.error(error);
      } finally {
        return response.status(204).send("");
      }
    }
    return response.status(204).send("");
  }
  return response.status(405).send("Method not allowed");
};
