const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express= require("express");

const app = express();
admin.initializeApp({
  credential: admin.credential.cert("./platzi.json"),
  databaseURL: "https://platzi-store-f637e-default-rtdb.firebaseio.com",
});
const db = admin.firestore();

app.get("/hello-world", (req, res) => {
  return res.status(200).json({message: "HELLO WORDL"});
});
app.post("/api/products", async (req, res)=>{
  await db.collection("products")
      .doc("/" + req.body.id + "/")
      .create({title: req.body.title});
  return res.json();
});
exports.app = functions.https.onRequest(app);
