const { delete_product } = require('../../controllers/delete/delete_product_controller');


async function delete_product_handler(req, res) {
    try {
        const { product_id } = req.query

        if (!product_id) throw new Error("Missing data")

        const response = await delete_product(product_id);
        if (!response[0]) throw new Error("There was a problem erasing this product")
        res.status(200).json(("Product deleted successfully", response[0]));

    } catch (error) {
        if (error.message === 'Missing data') {
            return res.status(400).json((error.message));
        }
        res.status(500).json((error.message));
    }
}

module.exports = {
    delete_product_handler,
}