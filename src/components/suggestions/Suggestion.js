const { z } = require("zod");
// Schema for the "Suggestion" entity
const suggestionSchema = z.object({
  title: z.string().nonempty().max(100),
  description: z.string().nonempty(),
  hashtags: z.array(z.string()).default([]),
  category: z.enum(["waste management", "product improvement"]),
});

module.exports = {
  suggestionSchema,
};
