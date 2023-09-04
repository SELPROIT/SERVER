const { Sub_category, Category, Product } = require("../../db.js");

const getAllSubCategories = () => {
  return Sub_category.findAll({
    attributes: {
      exclude: ['createdAt', 'updatedAt', "destroyTime"]
    },
    include: [
      
      { 
        model: Product, 
        include: Sub_category
      },
    ],
  })
    .then(subCategories => {
      return subCategories;
    })
    .catch(error => {
      throw error;
    });
};

module.exports = {
  getAllSubCategories,
};
