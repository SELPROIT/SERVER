const { Sub_category } = require('../db')


const getAllSubCategories = async () => {
    const subCategories = await Sub_category.findAll()
    return subCategories

}

module.exports = { getAllSubCategories }