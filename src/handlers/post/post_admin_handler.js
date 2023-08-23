const postUserAdmin = require('../../controllers/post/post_admin_controller');

const createUserAdmin = async (req, res) => {
    try {
        const {
            name,
            role,
            password,
            telefono, 
        } = req.body;

        const newUserAdmin = {
            name,
            role,
            password,
            phone: telefono, 
        };

        const createdUserAdmin = await postUserAdmin(newUserAdmin);

        res.status(201).json(createdUserAdmin);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {createUserAdmin};