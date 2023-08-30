const { Auction_bid } = require('../../db.js');

const delete_auctionBid = async (id) => {

    const erase = await Auction_bid.update(
        { deleteFlag: true },
        {
            where: {
                id: id,
                deleteFlag: false
            }
        }
    );

    return erase

}

module.exports = {
    delete_auctionBid,
}