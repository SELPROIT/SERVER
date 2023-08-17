
const { Category } = require('../db');

const getAllCategory = async () => {
    const categories = await Category.findAll();
    return categories;
}

module.exports = { getAllCategory };