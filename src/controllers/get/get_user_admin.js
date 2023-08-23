const { User_admin } = require('../../db');

const getUsersAdmin = async () => {
    const usersAdmin = await User_admin.findAll();
    return usersAdmin;
};

module.exports = {
    getUsersAdmin,
};
