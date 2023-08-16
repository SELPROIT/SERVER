const { Shop, Product, User } = require("../db");

const getShop = async () => {

  const shops = await Shop.findAll({
    // include: [
    //   {
    //     model: Product,
    //     through: {
    //       attributes: []
    //     }
    //   },
    //   {
    //     model: User, 
    //     attributes: ['num_ident'] //muestro sólo el número de identidad del usuario en la puja
    //   }
    // ]
  });

  return shops;
};

module.exports = {
    getShop
};