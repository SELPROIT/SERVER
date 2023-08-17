const { Product } = require('../db')

const getAllProd = async () => {
    const prod = await Product.findAll()
    return prod
}

module.exports = {
    getAllProd,
}