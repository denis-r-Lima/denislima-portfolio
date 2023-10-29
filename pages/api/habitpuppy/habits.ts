import { VercelRequest, VercelResponse } from "@vercel/node";
import isAuthorized from "../../../utils/isAuthorized";
import connectFirebaseAdmin from "../../../utils/firebaseAdmin";

export default async (request: VercelRequest, response: VercelResponse) => {
  const admin = connectFirebaseAdmin();

  if (request.method === "GET") {
    const db = admin.firestore();
    if (request.query.source && request.query.source === "today") {
      try {
        const habitContent = await db.collection("habits").doc("today").get();

        if (!habitContent.exists) throw new Error("Collection not found!");

        const data = habitContent.data();
        return response.status(200).send(JSON.stringify(data));
      } catch (e) {
        console.error(e);
        return response.status(404).send("Collection not found!");
      }
    }
    try {
      const habitContent = await db
        .collection("habits")
        .doc(process.env.NEXT_PUBLIC_HABITS_ID)
        .get();

      if (!habitContent.exists) throw new Error("Collection not found!");

      const items = habitContent.data().items;
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
      if (request.query.source && request.query.source === "today") {
        const { completed } = JSON.parse(request.body);
        try {
          const db = admin.firestore().collection("habits");
          await db.doc("today").set(data);
          if (completed) addCompleted(admin, completed);
          return response.status(204).send("");
        } catch (e) {
          console.error(e);
          return response.status(404).send("Collection not found!");
        }
      } else {
        try {
          const db = admin.firestore().collection("habits");
          await db.doc(process.env.NEXT_PUBLIC_HABITS_ID).set(data);
          return response.status(204).send("");
        } catch (e) {
          console.error(e);
          return response.status(401).send("Not authorized");
        }
      }
    }
    return response.status(401).send("Not authorized");
  }

  return response.status(405).send("Method not allowed");
};

async function addCompleted(
  admin: typeof import("/Users/denislima/Documents/programacao/denislima-portfolio/node_modules/firebase-admin/lib/firebase-namespace"),
  completed: string
) {
  try {
    const db = admin.firestore().collection("habits");
    const store = await db.doc(process.env.NEXT_PUBLIC_HABITS_ID).get();
    if (store.exists) {
      const data = store.data();
      const tempItems = data.items.map((item) => {
        if (item.habit === completed)
          return { ...item, completed: item.completed + 1 };
        return item;
      });
      await db
        .doc(process.env.NEXT_PUBLIC_HABITS_ID)
        .set({ ...data, items: tempItems });
    }
  } catch (e) {
    console.error(e);
  }
}
