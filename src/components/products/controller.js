const productsService = require("./services");

//GET: All endevours registered in app

async function getProducts(req, res) {
  try {
    const products = await productsService.getProducts();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}

module.exports = {
  getProducts,
};
