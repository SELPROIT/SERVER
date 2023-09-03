const { get_usersByName } = require('../../controllers/get/get_user_by_user_name_controller.js');

const get_UserByName = async (req, res) => {
    try {
        const { name } = req.query;

        if (!name) throw new Error("Falta data.")

        const response = await get_usersByName(name);
        if (!response) throw new Error(`Hubo un problema al adquirir al usuario: ${name}`)
        res.status(200).json(("Adquisición de datos exitosa.", response));

    } catch (error) {
        if (error.message === 'Falta data.') {
            return res.status(400).json((error.message));
        }
        res.status(500).json((error.message));
    }
};

module.exports = { get_UserByName };
