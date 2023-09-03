const { get_auction_by_id } = require('../../controllers/get/get_auction_by_id_controller.js');
const { validate: validateUUID } = require('uuid');

async function get_AuctionById_handler(req, res) {
    try {
        const { auction_id } = req.params

        if (!auction_id) throw new Error("Falta data.")
        if (!validateUUID(auction_id)) throw new Error("ID inválida.")

        const response = await get_auction_by_id(auction_id);
        if (!response) throw new Error("Hubo un problema al adquirir esta subasta.")
        res.status(200).json(("Adquisición de datos exitosa.", response));

    } catch (error) {
        if (error.message === 'Falta data.') {
            return res.status(400).json((error.message));
        }
        res.status(500).json((error.message));
    }
}

module.exports = {
    get_AuctionById_handler,
}