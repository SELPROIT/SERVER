const { delete_auctionBid } = require('../../controllers/delete/delete_auctionBid_controller.js');

const { validate: validateUUID } = require('uuid');

async function delete_auctionBid_handler(req, res) {
    try {
        const { bid_id } = req.query

        if (!bid_id) throw new Error("Missing data")
        if (!validateUUID(bid_id)) throw new Error("Invalid id")

        const response = await delete_auctionBid(bid_id);
        if (!response[0]) throw new Error("There was a problem erasing this bid")
        res.status(200).json(("Bid deleted successfully", response[0]));

    } catch (error) {
        if (error.message === 'Missing data') {
            return res.status(400).json((error.message));
        }
        res.status(500).json((error.message));
    }
}

module.exports = {
    delete_auctionBid_handler,
}