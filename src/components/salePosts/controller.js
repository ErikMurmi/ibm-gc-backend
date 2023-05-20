const postsService = require("./services");
const { salePostSchema } = require("./salePost");
//GET: All endevours registered in app

async function getPosts(req, res) {
  try {
    const posts = await postsService.getPosts();
    res.json(posts);
  } catch (error) {
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
    const createdPost = await postsService.createPost(model.data);
    res.json(`Sale post registered successfully with id ${createdPost.id}`);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}

module.exports = {
  getPosts,
  createPost,
};
