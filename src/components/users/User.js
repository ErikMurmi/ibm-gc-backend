const { z } = require("zod");

const userSchema = z.object({
  firstname: z.string(),
  lastname: z.string(),
  phone: z.string(),
  country: z.string(),
  password: z.string(),
  email: z.string().email(),

  address: z.string(),
  //image: z.string(),
  //likes: z.array(z.string()),

});

module.exports = {
  userSchema,
};
