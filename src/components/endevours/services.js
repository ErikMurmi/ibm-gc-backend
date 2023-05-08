const { COLLECTIONS } = require("../../utils/collections");
const { db } = require("../../config/firebase");
const { returnWithId } = require("../../utils/docFunctions");

//GET: All endevours registered in app

async function getEndevours() {
  const snapshot = await db.collection(COLLECTIONS.ENDEVOURS).get();
  const endevours = snapshot.docs.map(returnWithId);
  return endevours;
}

module.exports = {
  getEndevours,
};
