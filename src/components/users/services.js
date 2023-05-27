const { COLLECTIONS } = require("../../utils/collections");
const { db, auth } = require("../../config/firebase");
const { returnWithId } = require("../../utils/docFunctions");

//GET: All endevours registered in app

async function getAll() {
  const snapshot = await db.collection(COLLECTIONS.USERS).get();
  const endevours = snapshot.docs.map(returnWithId);
  return endevours;
}


async function create(user) {
  console.log("Create from back. USER: ", user);
  // Crear el usuario en Firebase Authentication
  const userCreated = await auth.createUser({
    email: user.email,
    password: user.password
  });

  // Obtener el UID del usuario creado
  const uid = userCreated.uid;

  // Crear un documento en Firestore para el usuario con los datos proporcionados

  const result = await db.collection(COLLECTIONS.USERS).doc(uid).set({
    email: user.email,
    firstname: user.firstname,
    lastname: user.lastname,
    country: user.country,
    address: user.address,
    phone: user.phone,
    uid: uid
  });
  return user;
}

async function getById(uid) {
  const querySnapshot = await db.collection('users').where('uid', '==', uid).get();

  //If the snapshot does not exist user is not in database
  if (!querySnapshot.empty) {
    const userDoc = querySnapshot.docs[0];
    const user = userDoc.data();

    // Retornar el usuario obtenido
    return user;
  } else {
    throw new Error(`User with ID: ${uid} not found`);
  }
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
