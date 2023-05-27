const { userSchema } = require("./User");
const usersService = require("./services");

//GET: All endevours registered in app

async function getUsers(req, res) {
  try {
    const users = await usersService.getAll();
    res.json(users);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function getUser(req, res) {
  try {
    const { uid } = req.params;
    const user = await usersService.getById(uid);
    if (user === null) {
      res.status(404);
    }
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}

async function createUser(req, res) {
  try {
    console.log("Create user in controller");
    //Validating body data with  schema
    const model = userSchema.safeParse(req.body);
    console.log("USer Model: ", model);
    if (!model.success) {
      //Gets all validation errors into a plain array
      const validationErrors = model.error.flatten();
      console.error("Validation errors:", validationErrors);
      return res.status(400).json({ errors: validationErrors });
    }
    //Model data contains the actual recived body object
    const createdUser = await usersService.create(model.data);
    res.json(createdUser);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}

async function deleteUser(req, res) {
  try {
    console.log("params:", req.params);
    const { userId } = req.params;
    await usersService.deleteById(userId);
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}

async function updateUser(req, res) {
  try {
    //Endevour with updated values
    const newData = req.body;
    //Extract endevourId from /api/endevours/{endevourId} as defined in routes
    const { userId } = req.params;
    await usersService.updateById(userId, newData);
    res.json(`User updated succesfully`);
  } catch (error) {
    console.error(error);
    res.status(500).json("Fail to update endevour");
  }
}

module.exports = {
  getUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser,
};
