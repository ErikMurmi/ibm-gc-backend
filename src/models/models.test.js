const { userSchema } = require("../components/users/User");
const { salePostSchema } = require("../components/salePosts/salePost");
const { productSchema } = require("../components/products/Product");
const { suggestionSchema } = require("../components/suggestions/Suggestion");

describe("userSchema().parse()", () => {
  describe("Check user object schema", () => {
    it("Schema correct", () => {
      const user1 = {
        name: "erik",
        phone: "0987654321",
        country: "France",
        email: "erikmurmi@gmail.com",
        location: "Paris",
        image: "whatever.jpg",
        likes: [],
      };

      expect(() => userSchema.parse(user1)).not.toThrow();
    });
  });

  it("Missing location error is thrown", () => {
    const invalidUser = {
      name: "erik",
      phone: "0987654321",
      country: "France",
      email: "erikmurmi@gmail.com",
      image: "whatever.jpg",
      likes: [],
    };
    expect(() => userSchema.parse(invalidUser)).toThrow();
  });
});

describe("salePostSchema().parse()", () => {
  test("valid post should pass validation", () => {
    const validPost = {
      author: "b62c4a11-6f9b-47d2-8e94-12a6d26e6d68",
      address: "123 Main St",
      likes: 5,
      hashtags: ["nature", "recycling"],
      category: "waste",
      product: "09834562-7d81-4f90-9b7d-f8aeb526c951",
    };

    expect(() => salePostSchema.parse(validPost)).not.toThrow();
  });

  test("post without required property should fail validation", () => {
    const invalidPost = {
      author: "John Doe",
      address: "123 Main St",
      hashtags: ["nature", "recycling"],
      category: "waste",
    };

    expect(() => salePostSchema.parse(invalidPost)).toThrow();
  });
  test("post with negative likes number should fail validation", () => {
    const invalidPost = {
      author: "John Doe",
      address: "123 Main St",
      hashtags: ["nature", "recycling"],
      likes: -1,
      category: "waste",
      product: "09834562-7d81-4f90-9b7d-f8aeb526c951",
    };

    expect(() => salePostSchema.parse(invalidPost)).toThrow();
  });
});

describe("Product schema", () => {
  test("valid product should pass validation", () => {
    const validProduct = {
      provider: "09834562-7d81-4f90-9b7d-f8aeb526c951",
      name: "Widget",
      description: "A useful widget",
      degradationTime: "2023-05-01",
      image: "widget.jpg",
      quantity: 10,
      unitOfMeasure: "pcs",
      price: 9.99,
    };

    expect(() => productSchema.parse(validProduct)).not.toThrow();
  });

  test("product with invalid quantity should fail validation", () => {
    const invalidProduct = {
      provider: "09834562-7d81-4f90-9b7d-f8aeb526c951",
      name: "Widget",
      description: "A useful widget",
      image: "widget.jpg",
      quantity: -5,
      unitOfMeasure: "pcs",
      price: 9.99,
    };

    expect(() => productSchema.parse(invalidProduct)).toThrow();
  });
});

describe("Suggestion schema", () => {
  test("valid suggestion should pass validation", () => {
    const validSuggestion = {
      title: "Improving Recycling Program",
      description: "Suggestion to enhance recycling infrastructure",
      hashtags: ["recycling", "environment", "sustainability"],
      category: "waste management",
    };

    expect(() => suggestionSchema.parse(validSuggestion)).not.toThrow();
  });

  test("suggestion without required property should fail validation", () => {
    const invalidSuggestion = {
      title: "Missing Description",
      hashtags: ["idea", "suggestion"],
      category: "product improvement",
    };

    expect(() => suggestionSchema.parse(invalidSuggestion)).toThrow();
  });
});
