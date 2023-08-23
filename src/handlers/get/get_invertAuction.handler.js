const { get_invert_auction } = require('../../controllers/get/get_invert_auction_controller');

async function get_invertAuction_handler(req, res) {
    try {

        const response = await get_invert_auction();
        if (!response.length) throw new Error("Empty invert-auctions")
        res.status(200).json(("Data acquire successfully", response));

    } catch (error) {
        if (error.message === 'Missing data') {
            return res.status(400).json((error.message));
        }
        res.status(500).json((error.message));
    }
}

module.exports = {
    get_invertAuction_handler,
}