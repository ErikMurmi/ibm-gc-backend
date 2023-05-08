const { COLLECTIONS } = require("../../utils/collections");
const { db } = require("../../config/firebase");
const { returnWithId } = require("../../utils/docFunctions");
//GET: All endevours registered in app

async function getProducts() {
  const snapshot = await db.collection(COLLECTIONS.PRODUCTS).get();
  const products = snapshot.docs.map(returnWithId);
  return products;
}

async function createProduct(product) {
  const collectionRef = db.collection(COLLECTIONS.PRODUCTS);
  const result = await collectionRef.add(product);
  return result;
}

module.exports = {
  getProducts,
  createProduct,
};
