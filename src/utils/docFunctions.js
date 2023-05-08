function returnWithId(doc) {
  return { id: doc.id, ...doc.data() };
}

module.exports = { returnWithId };
