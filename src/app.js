const express = require("express");
const app = express();
const cors = require("cors");
const { db } = require("./config/firebase");
// Set up json as must content-type header
app.use(express.json());

//Setting up allowed origins
app.use(
  cors({
    origin: "*",
  })
);

app.get("/", async (req, res) => {
  const collectionRef = db.collection("users");
  const snapshot = await collectionRef.get();
  const documents = snapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
  return res.status(200).json(documents);
});

app.listen(3000, () => {
  console.log("El servidor está corriendo en el puerto 3000");
});
