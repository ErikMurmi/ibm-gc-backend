const { COLLECTIONS } = require("../../utils/collections");
const { db } = require("../../config/firebase");
const { returnWithId } = require("../../utils/docFunctions");
//GET: All endevours registered in app

async function getPosts() {
  const snapshot = await db.collection(COLLECTIONS.POSTS).get();
  const posts = snapshot.docs.map(returnWithId);
  return posts;
}

module.exports = {
  getPosts,
};
