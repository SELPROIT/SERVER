const { User } = require('../db');
const { Op } = require('sequelize');

const get_usersByName = async (user) => {
    
    // user = user.trim().toLowerCase();
    
    const response = await User.findOne({
        where: {
            user_name: user
        },
    });

    return response
};

module.exports = {
    get_usersByName,
};
