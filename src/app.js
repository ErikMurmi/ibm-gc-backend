const express = require("express");
const app = express();
const cors = require("cors");

// Set up json as must content-type header
app.use(express.json());

//Setting up allowed origins
app.use(
  cors({
    origin: "*",
  })
);

app.listen(3000, () => {
  console.log("El servidor está corriendo en el puerto 3000");
});
