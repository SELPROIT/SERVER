const { delete_product } = require('../controllers/delete_product_controller');
const { responseObj } = require('./response');

async function delete_product_handler(req, res) {
    try {
        const { id } = req.query

        if (!id) throw new Error("Missing data")

        const response = await delete_product(id);
        if (!response) throw new Error("There was a problem erasing this product")
        res.status(200).json(responseObj("Product deleted successfully", response));

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