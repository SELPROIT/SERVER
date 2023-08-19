const { User } = require('../db');
const { Op } = require('sequelize');

const getUsersByName = async (name) => {
    const userBN = await User.findAll({
        where: {
            name: {
                [Op.like]: `%${name}%`
            }
        },
        atributes: [],
    });

    return userBN || []; 
};

module.exports = {
    getUsersByName,
};
