const { delete_user } = require('../../controllers/delete/delete_user_controller.js');
const { validate: validateUUID } = require('uuid');

async function delete_user_handler(req, res) {
    try {
        const { user_id } = req.query

        if (!user_id) throw new Error("Falta data.")
        if (!validateUUID(user_id)) throw new Error("ID inválida.")

        const response = await delete_user(user_id);
        if (!response[0]) throw new Error("Hubo un problema borrando este usuario.")
        res.status(200).json(("El ususario se ha borrado correctamente.", response[0]));

    } catch (error) {
        if (error.message === 'Falta data.') {
            return res.status(400).json((error.message));
        }
        res.status(500).json((error.message));
    }
}

module.exports = {
    delete_user_handler
}