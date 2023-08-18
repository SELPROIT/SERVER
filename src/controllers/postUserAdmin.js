const { User_admin } = require('../db');


const postUserAdmin = async (newUA) => {
    try {
        const userAdmin = await User_admin.create({
            name: newUA.name,
            role: newUA.role,
            password: newUA.password,
            phone: newUA.phone,

        });

        return userAdmin;
    } catch (error) {
        throw error;
    }
};

module.exports = postUserAdmin;
