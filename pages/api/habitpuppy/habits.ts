import { VercelRequest, VercelResponse } from "@vercel/node";
import isAuthorized from "../../../utils/isAuthorized";
import connectFirebaseAdmin from "../../../utils/firebaseAdmin";

type HabitType = {
  habitList: { baseYear: number; habits: { [name: string]: number } };
  today: { date: string; habits: string[] };
};

export default async (request: VercelRequest, response: VercelResponse) => {
  const admin = connectFirebaseAdmin();

  if (request.method === "GET") {
    console.log("pegando dados");
    const { token, user } = request.query;
    if (await isAuthorized(token as string)) {
      try {
        const db = admin.firestore();
        const habitContent = await db
          .collection("habits")
          .doc(user as string)
          .get();
        if (!habitContent.exists) {
          const initialData: HabitType = {
            habitList: { baseYear: new Date().getFullYear(), habits: {} },
            today: { date: "0-0-0", habits: [] },
          };
          const db = admin.firestore().collection("habits");
          await db.doc(user as string).set(initialData);
          return response.status(204).send(JSON.stringify(initialData));
        }
        const data = habitContent.data();
        return response.status(200).send(JSON.stringify(data));
      } catch (e) {
        console.error(e);
        return response.status(404).send("Collection not found!");
      }
    }
    return response.status(401).send("Not authorized");
  }

  if (request.method === "PUT") {
    const { token, user, data } = JSON.parse(request.body);

    if (await isAuthorized(token)) {
      try {
        const db = admin.firestore().collection("habits");
        await db.doc(user).set(data);
        return response.status(204).send("");
      } catch (e) {
        console.error(e);
        return response.status(404).send("Collection not found!");
      }
    }
    return response.status(401).send("Not authorized");
  }

  return response.status(405).send("Method not allowed");
};
