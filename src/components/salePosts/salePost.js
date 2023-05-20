const { z } = require("zod");
// Schema for the "Publication" entity
const salePostSchema = z.object({
  author: z.string(),
  address: z.string(),
  likes: z.number().nonnegative(),
  hashtags: z.array(z.string()).default([]),
  category: z.enum(["waste", "product"]),
  product: z.string(),
});

module.exports = {
  salePostSchema,
};
