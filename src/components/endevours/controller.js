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

async function createEndevour(req, res) {
  try {
    const endevour = req.body;
    const createdEndevour = await endevoursService.createEndevour(endevour);
    res.json(`Endevour registered succesfully with id ${createdEndevour.id}`);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}

async function deleteEndevour(req, res) {
  try {
    console.log("params:", req.params);
    const { endevourId } = req.params;
    await endevoursService.deleteEndevour(endevourId);
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}

async function updateEndevour(req, res) {
  try {
    //Endevour with updated values
    const newData = req.body;
    //Extract endevourId from /api/endevours/{endevourId} as defined in routes
    const { endevourId } = req.params;
    await endevoursService.updateEndevour(endevourId, newData);
    res.json(`Endevour updated succesfully`);
  } catch (error) {
    console.error(error);
    res.status(500).json("Fail to update endevour");
  }
}

module.exports = {
  getEndevours,
  createEndevour,
  deleteEndevour,
  updateEndevour,
};
