const { Auction } = require('../db');

const delete_auction = async (auction_id) => {

    const erase = await Auction.destroy({
        where: {
            id: auction_id
        }
    });

    return erase

}

module.exports = {
    delete_auction,
}
