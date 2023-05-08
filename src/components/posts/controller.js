const postsService = require("./services");

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
    const post = req.body;
    const createdPost = await postsService.createPost(post);
    res.json(`Post registered successfully with id ${createdPost.id}`);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}

module.exports = {
  getPosts,
  createPost,
};
