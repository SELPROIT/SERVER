const { get_auction } = require('../controllers/get_auction_controller');
const { responseObj } = require('./response');

async function get_auction_handler(req, res) {
    try {

        const response = await get_auction();
        if (!response.length) throw new Error("Empty auctions")
        res.status(200).json(responseObj("Data acquire successfully", response));

    } catch (error) {
        if (error.message === 'Missing data') {
            return res.status(400).json(responseObj(error.message));
        }
        res.status(500).json(responseObj(error.message));
    }
}

module.exports = {
    get_auction_handler,
}