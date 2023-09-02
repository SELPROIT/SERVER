const { get_invertAuction_by_id } = require("../../controllers/get/get_invert_auction_by_id_controller.js");
const { validate: validateUUID } = require('uuid');

async function get_invertAuctionById_handler(req, res) {
    try {
        const { invertAuction_id } = req.params

        if (!invertAuction_id) throw new Error("Falta data.")
        if (!validateUUID(invertAuction_id)) throw new Error("ID inválida.")

        const response = await get_invertAuction_by_id(invertAuction_id);
        if (!response) throw new Error("Hubo un problema al adquirir esta subasta inversa.")
        res.status(200).json(("Adquisición de datos exitosa.", response));

    } catch (error) {
        if (error.message === 'Falta data.') {
            return res.status(400).json((error.message));
        }
        res.status(500).json((error.message));
    }
}

module.exports = {
    get_invertAuctionById_handler,
}