const { getUsersAdmin } = require('../controllers/getUserAdmin');

const getUserAdmin = async (req, res) => {
    try {
        const users = await getUsersAdmin(req, res);
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = { getUserAdmin };