const { delete_auction } = require('../../controllers/delete/delete_auction_controller');
const { validate: validateUUID } = require('uuid');

async function delete_auction_handler(req, res) {
    try {
        const { auction_id } = req.query

        if (!auction_id) throw new Error("Missing data")
        if (!validateUUID(auction_id)) throw new Error("Invalid id")

        const response = await delete_auction(auction_id);
        if (!response[0]) throw new Error("There was a problem erasing this auction")
        res.status(200).json(("Auction deleted successfully", response[0]));

    } catch (error) {
        if (error.message === 'Missing data') {
            return res.status(400).json((error.message));
        }
        res.status(500).json((error.message));
    }
}

module.exports = {
    delete_auction_handler,
}