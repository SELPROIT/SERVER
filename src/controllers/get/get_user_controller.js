const { User, Auction, Invert_auction, Product, Auction_bid } = require("../../db");

// Define la función que devuelve una promesa para obtener todos los usuarios
const getUsers = () => {
  // Retorna una promesa que resuelve la consulta de usuarios con productos relacionados
  return User.findAll({
    attributes: { exclude: ['password'] },
    // include: [
    //   {
    //     model: Auction,
    //     model: Invert_auction,
    //     model: Product,
    //     model: Auction_bid,
    //     through: {
    //       attributes: []
    //     }
    //   }
    // ]
  });
};

module.exports = {
  getUsers
};
