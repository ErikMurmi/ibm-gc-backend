const firebase = require("firebase-admin");
const serviceAccount = require("./firebase-sdk-key.json");

const firebase_app = firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: `https://${process.env.PROJECT_ID}.firebaseio.com`,
});

const db = firebase.firestore(firebase_app);
const auth = firebase.auth(firebase_app);

module.exports = {
  firebase_app,
  db,
  auth,
};
