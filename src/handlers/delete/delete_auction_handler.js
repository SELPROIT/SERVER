const { delete_auction } = require('../../controllers/delete/delete_auction_controller.js');
const { validate: validateUUID } = require('uuid');

async function delete_auction_handler(req, res) {
    try {
        const { auction_id } = req.query

        if (!auction_id) throw new Error("Falta data.")
        if (!validateUUID(auction_id)) throw new Error("ID inválida.")

        const response = await delete_auction(auction_id);
        if (!response[0]) throw new Error("Hubo un problema al borrar esta subasta..")
        res.status(200).json(("La subasta se ha borrado correctamente.", response[0]));

    } catch (error) {
        if (error.message === 'Falta data.') {
            return res.status(400).json((error.message));
        }
        res.status(500).json((error.message));
    }
}

module.exports = {
    delete_auction_handler,
}