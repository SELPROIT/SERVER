const { Invert_auction } = require('../db');


const get_invert_auction = async () => {
    const invert_auction = await Invert_auction.findAll()
    return invert_auction
}

module.exports = {
    get_invert_auction,
}