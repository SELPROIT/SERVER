const { getAllCategory } = require('../../controllers/get/get_category_controller');

async function toCategory(req, res) {
    try {
        const categories = await getAllCategory();
        if(!categories) res.status(400).json({ message: error.message });
        res.status(200).json(("Funciona", categories));
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

module.exports = {
    toCategory
};
