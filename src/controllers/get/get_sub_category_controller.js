const { Sub_category, Category, Product } = require("../../db.js");

// Función que obtiene todas las subcategorías con categorías y productos relacionados utilizando promesas
const getAllSubCategories = () => {
  return Sub_category.findAll({
    include: [
      // {
      //   model: Category, // Incluir la Categoría relacionada
      // },
      {
        model: Product, // Incluir los Productos relacionados
        include: {
          model: Sub_category // Incluir las Sub_categorías relacionadas con los Productos
        },
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
  getAllSubCategories
};
