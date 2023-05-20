const { COLLECTIONS } = require("../../utils/collections");
const { db } = require("../../config/firebase");
const { returnWithId } = require("../../utils/docFunctions");

//GET: All endevours registered in app

async function getAll() {
  const snapshot = await db.collection(COLLECTIONS.USERS).get();
  const endevours = snapshot.docs.map(returnWithId);
  return endevours;
}

async function create(user) {
  const collectionRef = db.collection(COLLECTIONS.USERS);
  const result = await collectionRef.add(user);
  return result;
}

async function getById(userId) {
  const collectionRef = db.collection(COLLECTIONS.USERS);
  const docRef = collectionRef.doc(userId);
  const snapshot = await docRef.get();
  //If the snapshot does not exist user is not in database
  if (!snapshot.exists) {
    return null;
  }
  const user = snapshot.data();
  return user;
}

async function deleteById(userId) {
  const collectionRef = db.collection(COLLECTIONS.USERS);
  const docRef = collectionRef.doc(userId);
  const result = await docRef.delete();
  return result;
}

async function updateById(userId, newData) {
  const collectionRef = db.collection(COLLECTIONS.USERS);
  const docRef = collectionRef.doc(userId);
  await docRef.update(newData);
}

module.exports = {
  getAll,
  getById,
  create,
  deleteById,
  updateById,
};
