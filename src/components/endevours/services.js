const { COLLECTIONS } = require("../../utils/collections");
const { db } = require("../../config/firebase");
const { returnWithId } = require("../../utils/docFunctions");

//GET: All endevours registered in app

async function getEndevours() {
  const snapshot = await db.collection(COLLECTIONS.ENDEVOURS).get();
  const endevours = snapshot.docs.map(returnWithId);
  return endevours;
}

async function createEndevour(endevour) {
  const collectionRef = db.collection(COLLECTIONS.ENDEVOURS);
  const result = await collectionRef.add(endevour);
  return result;
}

async function deleteEndevour(endevourId) {
  const collectionRef = db.collection(COLLECTIONS.ENDEVOURS);
  const docRef = collectionRef.doc(endevourId);
  const result = await docRef.delete();
  return result;
}

async function updateEndevour(endevourId, newData) {
  const collectionRef = db.collection(COLLECTIONS.ENDEVOURS);
  const docRef = collectionRef.doc(endevourId);
  await docRef.update(newData);
}

module.exports = {
  getEndevours,
  createEndevour,
  deleteEndevour,
  updateEndevour,
};
