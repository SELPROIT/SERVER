const { get_invertAuction_by_id } = require('../../controllers/get/get_invertAuctionById_controller');
const { validate: validateUUID } = require('uuid');

async function get_invertAuctionById_handler(req, res) {
    try {
        const { invertAuction_id } = req.params

        if (!invertAuction_id) throw new Error("Missing data")
        if (!validateUUID(invertAuction_id)) throw new Error("Invalid id")

        const response = await get_invertAuction_by_id(invertAuction_id);
        if (!response) throw new Error("There was a problem acquiring this invert auction")
        res.status(200).json(("Data acquire successfully", response));

    } catch (error) {
        if (error.message === 'Missing data') {
            return res.status(400).json((error.message));
        }
        res.status(500).json((error.message));
    }
}

module.exports = {
    get_invertAuctionById_handler,
}