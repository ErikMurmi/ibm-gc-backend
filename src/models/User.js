const { z } = require("zod");

const userSchema = z.object({
  name: z.string(),
  phone: z.string(),
  country: z.string(),
  email: z.string().email(),
  location: z.string(),
  image: z.string(),
  likes: z.array(z.string()),
});

module.exports = {
  userSchema,
};
