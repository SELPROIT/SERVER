const { User, Product, Shop } = require("../db");

const getUsers = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
    // include: [
    //   {
    //     model: Product,
    //     through: {
    //       attributes: []
    //     }
    //   },
    //   {
    //     model: Shop,
    //     through: {
    //       attributes: []
    //     }
    //   }
    // ]
  });

  return users;
};

module.exports = {
  getUsers
};