const { Shop, Product } = require("../db");

const getShop = async () => {

  const shops = await Shop.findAll({
    // include: {
    //   model: Product, 
    //   through: {
    //     attributes: []
    //   }
    // },
  });

  return shops;
};

module.exports = {
    getShop
};