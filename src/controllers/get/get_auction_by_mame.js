const { Auction, Invert_auction } = require("../../db.js");
const { Op } = require('sequelize');
const { handle_status } = require("./handle_status.js");

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
    // const timer = auctions.map(auction => {
    //     return handle_status(auction.id, auction.status, type, auction.close_date);
    // });
    return auctions;
};

module.exports = {
    auctionByName
};