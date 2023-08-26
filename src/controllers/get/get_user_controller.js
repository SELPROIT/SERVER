const { User, Product, Auction, Auction_bid, Invert_auction } = require("../../db");

// Define la función que devuelve una promesa para obtener todos los usuarios con sus subastas y pujas
const getUsers = async () => {
  try {
    const users = await User.findAll({
      attributes: { exclude: ['password'] },
      include: [
        {
          model: Auction_bid,
          include: [
            {
              model: Auction,
              include: [
                {
                  model: Product,
                  include: [
                    { model: Invert_auction }
                  ]
                }
              ]
            }
          ]
        },
        {
          model: Invert_auction,
          include: [
            { model: Auction_bid }
          ]
        }
      ]
    });
    return users;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getUsers
};
