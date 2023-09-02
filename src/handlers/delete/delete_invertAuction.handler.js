
const { delete_invertAuction } = require('../../controllers/delete/delete_invertAuction_controller.js');
const { validate: validateUUID } = require('uuid');

async function delete_invertAuction_handler(req, res) {
    try {
        const { invertAuction_id } = req.query

        if (!invertAuction_id) throw new Error("Falta data.")
        if (!validateUUID(invertAuction_id)) throw new Error("ID inválida.")

        const response = await delete_invertAuction(invertAuction_id);
        if (!response[0]) throw new Error("Hubo un problema borrando esta subasta inversa.")
        res.status(200).json(("La subasta inversa se ha borrado correctamente.", response[0]));

    } catch (error) {
        if (error.message === 'Falta data.') {
            return res.status(400).json((error.message));
        }
        res.status(500).json((error.message));
    }
}

module.exports = {
    delete_invertAuction_handler,
}