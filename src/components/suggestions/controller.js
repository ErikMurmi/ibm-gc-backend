const suggestionsService = require("./services");
const { suggestionSchema } = require("./Suggestion");

//GET: All endevours registered in app

async function getSuggestions(req, res) {
  try {
    const suggestions = await suggestionsService.getSuggestions();
    res.json(suggestions);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function createSuggestion(req, res) {
  try {
    //Validating body data with  schema
    const model = suggestionSchema.safeParse(req.body);
    if (!model.success) {
      //Gets all validation errors into a plain array
      const validationErrors = model.error.flatten();
      console.error("Validation errors:", validationErrors);
      return res.status(400).json({ errors: validationErrors });
    }
    //Model data contains the actual recived body object
    const createdSuggestions = await suggestionsService.create(model.data);
    res.json(
      `Suggestions registered successfully with id ${createdSuggestions.id}`
    );
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}

module.exports = {
  getSuggestions,
  createSuggestion,
};
