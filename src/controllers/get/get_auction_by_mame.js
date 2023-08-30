const { Auction, Invert_auction } = require("../../db.js");
const { Op } = require('sequelize');

const auctionByName = async (type, product_name) => {

    product_name = product_name.trim();

    let auctions
    if(type === 'AU') {
        auctions = await Auction.findAll({
            where: {
                product_name: {
                    [Op.iLike]: `%${product_name}%`
                }
            }
        });
    }
    if (type === 'IA') {
        auctions = await Invert_auction.findAll({
            where: {
                product_name: {
                    [Op.iLike]: `%${product_name}%`
                }
            }
        });
    }

    return auctions;
};

module.exports = {
    auctionByName
};