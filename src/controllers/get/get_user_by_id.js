const { User } = require('../../db.js');

const userById = async (userId) => {

    const user = await User.findByPk(userId);

    if(!user) throw Error("No se ha encontrado a ese usuario.");

    return user;
};

module.exports = {
    userById
};