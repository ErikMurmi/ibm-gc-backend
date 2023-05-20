const { z } = require("zod");
const productSchema = z.object({
  provider: z.string(),
  name: z.string(),
  description: z.string(),
  degradationTime: z.optional(z.string()),
  image: z.string(),
  unitOfMeasure: z.string(),
  price: z.number().positive(),
  quantity: z.number().nonnegative(),
});

module.exports = {
  productSchema,
};
