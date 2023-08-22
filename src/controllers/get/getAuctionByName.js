const {Auction} = require("../db");
const { Op } = require('sequelize'); 

const auctionByName = async (product_name) => {

    product_name = product_name.trim();

    const auctions = await Auction.findOne({
        where: { product_name: {
            [Op.iLike]: `%${product_name}%`
        }}
    });

    return auctions;
};

module.exports = {
    auctionByName
};