const { create_auction } = require('../../controllers/post/post_auction_controller.js');

async function post_auction_handler(req, res) {
    try {
        const { product_id, base_price, close_date, user_id, stock } = req.body;
        if (!product_id || !base_price || !close_date || !user_id || !stock) {
            return res.status(400).json("Faltan datos requeridos.");
        }

        const response = await create_auction(product_id, base_price, close_date, user_id, stock);
        res.status(200).json(('La subasta ha sido enviada correctamente.', response));
    } catch (error) {
        res.status(500).json(('Se ha producido un error creando esta subasta.', error.message));
    }
}

module.exports = {
    post_auction_handler
};