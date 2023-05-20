const salePostsService = require("./services");
const { salePostSchema } = require("./salePost");
//GET: All endevours registered in app

async function getPosts(req, res) {
  try {
    const posts = await salePostsService.getPosts();
    res.json(posts);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function getSalePost(req, res) {
  try {
    const { postId } = req.params;
    const post = await usersService.getById(postId);
    if (post === null) {
      res.status(404);
    }
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}

async function createPost(req, res) {
  try {
    //Validating body data with  schema
    const model = salePostSchema.safeParse(req.body);
    if (!model.success) {
      //Gets all validation errors into a plain array
      const validationErrors = model.error.flatten();
      console.error("Validation errors:", validationErrors);
      return res.status(400).json({ errors: validationErrors });
    }
    //Model data contains the actual recived body object
    const createdPost = await salePostsService.createPost(model.data);
    res.json(`Sale post registered successfully with id ${createdPost.id}`);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}

async function deleteSalePost(req, res) {
  try {
    console.log("params:", req.params);
    const { postId } = req.params;
    await salePostsService.deleteById(postId);
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}

async function updateSalePost(req, res) {
  try {
    //Endevour with updated values
    const newData = req.body;
    //Extract endevourId from /api/endevours/{endevourId} as defined in routes
    const { postId } = req.params;
    await salePostsService.updateById(postId, newData);
    res.json(`Post updated succesfully`);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}

module.exports = {
  getPosts,
  getSalePost,
  createPost,
  deleteSalePost,
  updateSalePost,
};
