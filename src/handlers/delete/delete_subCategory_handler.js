const { delete_subCategory } = require('../../controllers/delete/delete_subCategory_controller.js');


async function delete_subCategory_handler(req, res) {
    try {
        const { subCategory_id } = req.query

        if (!subCategory_id) throw new Error("Falta data.")

        const response = await delete_subCategory(subCategory_id);
        if (!response[0]) throw new Error("Hubo un problema borrando esta sub-categoría.")
        res.status(200).json(("La sub-categoría ha sido borrada correctamente.", response[0]));

    } catch (error) {
        if (error.message === 'Falta data.') {
            return res.status(400).json((error.message));
        }
        res.status(500).json((error.message));
    }
}

module.exports = {
    delete_subCategory_handler,
}