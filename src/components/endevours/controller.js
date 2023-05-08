const endevoursService = require("./services");

//GET: All endevours registered in app

async function getEndevours(req, res) {
  try {
    const endevours = await endevoursService.getEndevours();
    res.json(endevours);
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = {
  getEndevours,
};
