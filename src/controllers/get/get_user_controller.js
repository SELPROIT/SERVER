const { User, Product } = require("../../db");

// Define la función que devuelve una promesa para obtener todos los usuarios
const getUsers = () => {
  // Retorna una promesa que resuelve la consulta de usuarios con productos relacionados
  return User.findAll({
    attributes: { exclude: ['password'] },
    include: [
      {
        model: Product,
        through: {
          attributes: []
        }
      }
    ]
  });
};

module.exports = {
  getUsers
};
