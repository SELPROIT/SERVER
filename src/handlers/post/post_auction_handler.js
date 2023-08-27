const { create_auction } = require('../../controllers/post/post_auction_controller');

async function post_auction_handler(req, res) {
    try {
        const { product_id, base_price, close_date } = req.body;
        if (!product_id || !base_price || !close_date) {
            throw new Error('Missing required data');
        }

        const response = await create_auction(product_id, base_price, close_date);

        res.status(200).json(('Auction created successfully', response));
    } catch (error) {
        if (error.message === 'Missing required data') {
            return res.status(400).json((error.message));
        }
        res.status(500).json(('Error creating auction'));
    }
}

module.exports = {
    post_auction_handler,
};