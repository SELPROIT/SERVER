const {Product} = require("../db");
const { Op } = require('sequelize'); 

const productByName = async (name) => {

    name.trim();

    const product = await Product.findAll({
        where: { name: {
            [Op.iLike]: `%${name}%`,
        }}
    });
    
    return product;
};

module.exports = {
    productByName
};