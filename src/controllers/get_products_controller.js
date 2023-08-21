const { Product, Sub_category } = require('../db')

const getAllProd = async () => {
    const products = await Product.findAll({
        include: Sub_category, // Include related Sub_category
        atributes: []
    });
    return products;
}

module.exports = {
    getAllProd,
}