const { getAllSubCategories } = require('../controllers/getSubCategory');
const { responseObj } = require('./response.js')


async function toSubCategory(req, res) {
    try {
        const subCategories = await getAllSubCategories();
        res.status(200).json(responseObj("SubCategories fetched successfully", subCategories));
    } catch (error) {
        return res.status(500).json(responseObj("Error fetching subcategories", null));
    }
}

module.exports = {
    toSubCategory,
}
