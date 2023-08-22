const { create_invert_auction } = require('../controllers/post_inv_auction_controller');
const { responseObj } = require('./response');

async function post_invert_auction_handler(req, res) {
    try {
        const { product_id, base_price, target_quantity, total, close_date } = req.body;

        if (!product_id || !base_price || !target_quantity || !total || !close_date) {
            throw new Error('Missing required data');
        }

        const response = await create_invert_auction(product_id, base_price, target_quantity, total, close_date);

        res.status(200).json(responseObj('Invert auction created successfully', response));
    } catch (error) {
        if (error.message === 'Missing required data') {
            return res.status(400).json(responseObj(error.message));
        }
        res.status(500).json(responseObj('Error creating invert auction'));
    }
}

module.exports = {
    post_invert_auction_handler,
};