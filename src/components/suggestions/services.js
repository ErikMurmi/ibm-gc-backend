const { COLLECTIONS } = require("../../utils/collections");
const { db } = require("../../config/firebase");
const { returnWithId } = require("../../utils/docFunctions");

//GET: All endevours registered in app

async function getSuggestions() {
  const snapshot = await db.collection(COLLECTIONS.SUGGESTIONS).get();
  const suggestions = snapshot.docs.map(returnWithId);
  return suggestions;
}

async function create(suggestion) {
  const collectionRef = db.collection(COLLECTIONS.SUGGESTIONS);
  const result = await collectionRef.add(suggestion);
  return result;
}

module.exports = {
  getSuggestions,
  create,
};
