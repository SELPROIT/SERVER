const { Sub_category, Category, Product } = require("../../db");

const getAllSubCategories = async () => {
  const subCategories = await Sub_category.findAll({
    include: [
      Category, // Include related Category
      { model: Product, include: Sub_category }, // Include related Products with their Sub_category
    ],
  });
  return subCategories;
};

module.exports = { getAllSubCategories };
