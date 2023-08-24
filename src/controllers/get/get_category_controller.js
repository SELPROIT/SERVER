const { Category, Sub_category } = require('../../db');

// Función que obtiene todas las categorías y sus subcategorías relacionadas utilizando promesas
const getAllCategory = () => {
  return Category.findAll({
    include: Sub_category // Incluir las subcategorías relacionadas
  })
    .then(categories => {
      return categories;
    })
    .catch(error => {
      throw error;
    });
};

module.exports = {
  getAllCategory,
};
