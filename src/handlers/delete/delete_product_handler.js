const { delete_product } = require('../../controllers/delete/delete_product_controller.js');


async function delete_product_handler(req, res) {
    try {
        const { product_id } = req.query

        if (!product_id) throw new Error("Falta data.")

        const response = await delete_product(product_id);
        if (!response[0]) throw new Error("Hubo un problema borrando este producto.")
        res.status(200).json("El producto se ha borrado correctamente.", response[0]);

    } catch (error) {
        if (error.message === 'Falta data.') {
            return res.status(400).json((error.message));
        }
        res.status(500).json((error.message));
    }
}

module.exports = {
    delete_product_handler,
}