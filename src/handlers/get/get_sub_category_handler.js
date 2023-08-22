const { getAllSubCategories } = require('../controllers/get_sub_category_controller');


async function toSubCategory(req, res) {
    try {
        const subCategories = await getAllSubCategories();
        if(!subCategories) res.status(400).json({ message: error.message });
        res.status(200).json(("SubCategories fetched successfully", subCategories));
    } catch (error) {
        return res.status(500).json(("Error fetching subcategories", null));
    }
}

module.exports = {
    toSubCategory,
}
