const { COLLECTIONS } = require("../../utils/collections");
const { db } = require("../../config/firebase");
const { returnWithId } = require("../../utils/docFunctions");
//GET: All endevours registered in app

async function getPosts() {
  const snapshot = await db.collection(COLLECTIONS.SALE_POSTS).get();
  const posts = snapshot.docs.map(returnWithId);
  return posts;
}

async function createPost(post) {
  const collectionRef = db.collection(COLLECTIONS.SALE_POSTS);
  const result = await collectionRef.add(post);
  return result;
}

module.exports = {
  getPosts,
  createPost,
};
