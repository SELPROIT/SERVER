const { getAllSubCategory } = require('../controllers/subCategory.js');
const responseObj = require('./response.js')


async function toCategory(req, res) {
    try {
        const subCategories = await getAllSubCategory();
        res.status(200).json(responseObj("Funciona", subCategories));
    } catch (error) {
        return res.status(500).json(responseObj);
    }
}

module.exports = {
    toCategory,
}
