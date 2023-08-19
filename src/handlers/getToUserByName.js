const { getUsersByName } = require('../controllers/getUserByUserName');

const getUserByName = async (req, res) => {
    try {
        const { name } = req.params;
        const user = await getUsersByName(name);

        if (!user) {
            res.status(404).json({ message: "No se encontraron usuarios" });
        } else {
            res.status(200).json(user);
        }
    } catch (error) {
        console.error('Error al buscar usuarios por nombre:', error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};

module.exports = { getUserByName };
