import { MongoClient } from "mongodb";

// /api/new-meetup

const DB_URL = process.env.REACT_APP_DB_URL;

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const { title, image, address, description } = data;

    const client = await MongoClient.connect(DB_URL);
    const db = client.db();

    const meetupCollection = db.collection("meetups");
    const result = await meetupCollection.insertOne(data);

    console.log(result);
    client.close();
    res.status(201).json({ message: "Meetup inserted!" });
  }
}
export default handler;
