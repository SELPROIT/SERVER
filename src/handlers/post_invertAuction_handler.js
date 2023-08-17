const { create_invert_auction } = require('../controllers/post_invertAuction_controller');
const { responseObj } = require('./response');

async function post_invert_auction_handler(req, res) {
    try {
        const { product_id, base_price, target_quantity, total, close_date } = req.body;

        if (!product_id ||!base_price || !target_quantity || !total || !close_date) throw new Error ("Missing data");

        const response = await create_invert_auction( product_id, base_price, target_quantity, total, close_date );

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
    post_invert_auction_handler,
}