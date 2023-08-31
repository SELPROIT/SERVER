const { create_invert_auction } = require('../../controllers/post/post_inv_auction_controller.js');

async function post_invert_auction_handler(req, res) {
    try {
        const { product_id, desired_price, target_quantity, close_date } = req.body;

        if (!product_id || !desired_price || !target_quantity || !close_date) {
            throw new Error('Producto no encontrado.');
        }

        const response = await create_invert_auction(product_id, desired_price, target_quantity, close_date);

        res.status(200).json(('Invert auction created successfully', response));
    } catch (error) {
        if (error.message === 'Missing required data') {
            return res.status(400).json((error.message));
        }
        res.status(500).json(('Error creating invert auction'));
    }
}

module.exports = {
    post_invert_auction_handler
};