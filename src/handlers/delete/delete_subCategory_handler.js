const { delete_subCategory } = require('../../controllers/delete/delete_subCategory_controller.js');


async function delete_subCategory_handler(req, res) {
    const { id } = req.query
    try {
        const response = await delete_subCategory(id);
        if (!response) throw new Error("There was a problem erasing this category")
        res.status(200).send("Sub-category soft-deleted successfully");
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = {
    delete_subCategory_handler,
}