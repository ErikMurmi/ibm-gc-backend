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

async function deleteById(postId) {
  const collectionRef = db.collection(COLLECTIONS.SALE_POSTS);
  const docRef = collectionRef.doc(postId);
  const result = await docRef.delete();
  return result;
}

async function updateById(postId, newData) {
  const collectionRef = db.collection(COLLECTIONS.SALE_POSTS);
  const docRef = collectionRef.doc(postId);
  await docRef.update(newData);
}

module.exports = {
  getPosts,
  createPost,
  deleteById,
  updateById,
};
