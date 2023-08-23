const { Product, Sub_category, Auction, Invert_auction } = require('../../db');

// Función que obtiene todos los productos con subcategorías, subastas y subastas invertidas relacionadas utilizando promesas
const getAllProd = () => {
  return Product.findAll({
    include: [
      {
        model: Sub_category,
        attributes: [] // Excluir atributos de subcategoría
      },
      {
        model: Auction,
        attributes: ['id', 'base_price', 'close_date']
      },
      {
        model: Invert_auction,
        attributes: ['id', 'base_price', 'close_date']
      }
    ],
    // Excluir atributos de producto si es necesario
    // attributes: ['id', 'name', 'price', 'description', 'brand', 'stock', 'rating']
  })
    .then(products => {
      return products;
    })
    .catch(error => {
      throw error;
    });
};

module.exports = {
  getAllProd,
};
