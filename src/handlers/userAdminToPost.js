const postUserAdmin = require('../controllers/postUserAdmin');

const createUserAdmin = async (req, res) => {
    try {
        const {
            name,
            role,
            password,
            telefono, // Debería ser "phone" en tu objeto JSON
        } = req.body;

        const newUserAdmin = {
            name,
            role,
            password,
            phone: telefono, // Debería ser "phone" en tu objeto JSON
        };

        const createdUserAdmin = await postUserAdmin(newUserAdmin);

        res.status(201).json(createdUserAdmin);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {createUserAdmin};
