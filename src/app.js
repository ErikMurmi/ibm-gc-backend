const express = require("express");
const app = express();
const cors = require("cors");

//Importing all routers
const endevoursRouter = require("./components/endevours/routes");
const postsRouter = require("./components/posts/routes");
const productsRouter = require("./components/products/routes");
const suggestionsRouter = require("./components/suggestions/routes");
// Set up json as must content-type header
app.use(express.json());

//Setting up allowed origins
app.use(
  cors({
    origin: "*",
  })
);

app.use("/api/endevours", endevoursRouter);
app.use("/api/posts", postsRouter);
app.use("/api/products", productsRouter);
app.use("/api/suggestions", suggestionsRouter);

app.listen(3000, () => {
  console.log("El servidor está corriendo en el puerto 5000");
});
