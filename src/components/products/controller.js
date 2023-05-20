const productsService = require("./services");
const { productSchema } = require("./Product");

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

async function createProduct(req, res) {
  try {
    //Validating body data with  schema
    const model = productSchema.safeParse(req.body);
    if (!model.success) {
      //Gets all validation errors into a plain array
      const validationErrors = model.error.flatten();
      console.error("Validation errors:", validationErrors);
      return res.status(400).json({ errors: validationErrors });
    }
    //Model data contains the actual recived body object
    const createdProduct = await productsService.createProduct(model.data);
    res.json(`Product registered succesfully with id ${createdProduct.id}`);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}

module.exports = {
  getProducts,
  createProduct,
};
