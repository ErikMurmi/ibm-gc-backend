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

module.exports = {
  getPosts,
};
