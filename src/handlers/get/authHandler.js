const { register } = require('../../controllers/get/auth_controller')

async function toRegister(req, res) {
    try {
        const { user_name, password } = req.body;
        const result = await register(user_name, password);
        if(!result) res.status(400).json({ message: error.message });

        res.json(result);
    } catch (error) {
        if (error.message === 'El nombre de usuario ya está en uso') {
            return res.status(400).json({ message: error.message });
        }
        return res.status(500).json({ message: 'Hubo un error' });
    }
}

module.exports = {
    toRegister,
}