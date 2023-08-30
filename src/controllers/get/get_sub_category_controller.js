const { Sub_category, Category, Product } = require("../../db.js");

// Función que obtiene todas las subcategorías con categorías y productos relacionados utilizando promesas
const getAllSubCategories = () => {
  return Sub_category.findAll({
    include: [
      Category, // Incluir la Categoría relacionada
      { 
        model: Product, 
        include: Sub_category // Incluir los Productos relacionados con sus Sub_categorías
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
