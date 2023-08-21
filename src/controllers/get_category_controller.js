const { Category, Sub_category } = require('../db');

const getAllCategory = async () => {
    const categories = await Category.findAll({
        include: Sub_category, // Include related Sub_categories
        atributes: []
    });

    return categories;
}

module.exports = { getAllCategory };