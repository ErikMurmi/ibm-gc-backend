const { productSchema } = require("./Product");
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
async function deleteProduct(req, res) {
  try {
    console.log("params:", req.params);
    const { productId } = req.params;
    await productsService.deleteById(productId);
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}

async function updateProduct(req, res) {
  try {
    //Endevour with updated values
    const newData = req.body;
    //Extract endevourId from /api/endevours/{endevourId} as defined in routes
    const { userId } = req.params;
    await usersService.updateById(userId, newData);
    res.json(`User updated succesfully`);
  } catch (error) {
    console.error(error);
    res.status(500).json("Fail to update endevour");
  }
}

module.exports = {
  getProducts,
  createProduct,
  deleteProduct
};
