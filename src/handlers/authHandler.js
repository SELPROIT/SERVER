const { register } = require('../controllers/authController')

async function toRegister(req, res) {
    try {
        const { username, password } = req.body;
        const result = await register(username, password);

        res.json(result);
    } catch (error) {
        if (error.message === 'El nombre de usuario ya está en uso') {
            return res.status(400).json({ message: error.message });
        }
        return res.status(500).json({ message: 'Hubo un error inesperado' });
    }
}

module.exports = {
    toRegister,

}