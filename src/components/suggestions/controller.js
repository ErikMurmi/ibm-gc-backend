const suggestionsService = require("./services");

//GET: All endevours registered in app

async function getSuggestions(req, res) {
  try {
    const suggestions = await suggestionsService.getSuggestions();
    res.json(suggestions);
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = {
  getSuggestions,
};
