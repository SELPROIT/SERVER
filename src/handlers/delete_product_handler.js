const { delete_product } = require('../controllers/delete_product_controller');
const { responseObj } = require('./response');

async function delete_product_handler(req, res) {
    try {
        const { product_id } = req.query

        if (!product_id) throw new Error("Missing data")

        const response = await delete_product(product_id);
        if (!response[0]) throw new Error("There was a problem erasing this product")
        res.status(200).json(responseObj("Product deleted successfully", response[0]));

    } catch (error) {
        if (error.message === 'Missing data') {
            return res.status(400).json(responseObj(error.message));
        }
        res.status(500).json(responseObj(error.message));
    }
}

module.exports = {
    delete_product_handler,
}