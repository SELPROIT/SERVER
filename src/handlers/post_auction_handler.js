const { create_auction } = require('../controllers/post_auction_controller');
const { responseObj } = require('./response');

async function post_auction_handler(req, res) {
    try {
        const { product_id, base_price, close_date } = req.body;

        if (!product_id ||!base_price || !close_date) throw new Error ("Missing data");

        const response = await create_auction(product_id, base_price, close_date);

        if (!response) throw new Error()
        res.status(200).json(responseObj("Auction created successfully"));

    } catch (error) {
        if (error.message === 'Missing data') {
            res.status(400).json(responseObj(error.message));
        }
        res.status(500).json(responseObj(error.message));
    }
}

module.exports = {
    post_auction_handler,
}