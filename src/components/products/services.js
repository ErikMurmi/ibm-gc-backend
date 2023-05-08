const { COLLECTIONS } = require("../../utils/collections");
const { db } = require("../../config/firebase");
const { returnWithId } = require("../../utils/docFunctions");
//GET: All endevours registered in app

async function getProducts() {
  const snapshot = await db.collection(COLLECTIONS.PRODUCTS).get();
  const products = snapshot.docs.map(returnWithId);
  return products;
}

module.exports = {
  getProducts,
};
