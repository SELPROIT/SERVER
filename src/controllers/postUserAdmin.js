const { User_admin } = require('../db');

const postUserAdmin = async (newUserAdmin) => {
    if (newUserAdmin.role === 'CEO' && newUserAdmin.password === 'selpro123*') {
        const userAdmin = await User_admin.create({
            name: newUserAdmin.name,
            role: newUserAdmin.role,
            password: newUserAdmin.password,
            phone: newUserAdmin.phone,
        });

        return userAdmin;
    } else {
        throw new Error('No tienes acceso para crear un usuario admin.');
    }
};

module.exports = postUserAdmin;
