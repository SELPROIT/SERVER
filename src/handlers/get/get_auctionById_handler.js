const { get_auction_by_id } = require('../controllers/get_auctionById_controller');
const { responseObj } = require('./response');
const { validate: validateUUID } = require('uuid');

async function get_AuctionById_handler(req, res) {
    try {
        const { auction_id } = req.params

        if (!auction_id) throw new Error("Missing data")
        if (!validateUUID(auction_id)) throw new Error("Invalid id")

        const response = await get_auction_by_id(auction_id);
        if (!response) throw new Error("There was a problem acquiring this auction")
        res.status(200).json(responseObj("Data acquire successfully", response));

    } catch (error) {
        if (error.message === 'Missing data') {
            return res.status(400).json(responseObj(error.message));
        }
        res.status(500).json(responseObj(error.message));
    }
}

module.exports = {
    get_AuctionById_handler,
}