const { create_auction } = require('../../controllers/post/post_auction_controller.js');

async function post_auction_handler(req, res) {
    const { data } = req.body;
    try {

        const response = await create_auction(data);
        res.status(200).json(('Auction created successfully', response));
    } catch (error) {
        if (error.message === 'Missing required data') {
            return res.status(400).json((error.message));
        }
        res.status(500).json(('Error creating auction', error.message));
    }
}

module.exports = {
    post_auction_handler,
};