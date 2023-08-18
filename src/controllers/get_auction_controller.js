const { Auction } = require('../db');


const get_auction = async () => {
    const auction = await Auction.findAll()
    return auction
}

module.exports = {
    get_auction,
}