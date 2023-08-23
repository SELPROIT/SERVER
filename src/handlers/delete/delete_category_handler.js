const { delete_category } = require('../../controllers/delete/delete_category_controller');


async function delete_category_handler(req, res) {
    try {
        const { category_id } = req.query

        if (!category_id) throw new Error("Missing data")

        const response = await delete_category(category_id);
        if (!response[0]) throw new Error("There was a problem erasing this category")
        res.status(200).json(("Category deleted successfully", response[0]));

    } catch (error) {
        if (error.message === 'Missing data') {
            return res.status(400).json((error.message));
        }
        res.status(500).json((error.message));
    }
}

module.exports = {
    delete_category_handler,
}