const {Auction, Invert_auction} = require("../db");
const { Op } = require('sequelize'); 

const productByName = async (product_name) => {

    product_name.trim();

    const auctions = await Auction.findAll({
        where: { product_name: {
            [Op.iLike]: `%${product_name}%`
        }}
    });
    
    const invert_auctions = await Invert_auction.findAll({
        where: { product_name: {
            [Op.iLike]: `%${product_name}%`
        }}
    });

    return [ ...auctions, ...invert_auctions];
};

module.exports = {
    productByName
};