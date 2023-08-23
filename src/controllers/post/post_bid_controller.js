const { Auction_bid, Auction, Invert_auction } = require("../../db");

const createAuctionBid = async (auction_id, proposed_price, total, invert) => {
    
    if(!auction_id || !proposed_price || !total || !invert) throw new Error ("Faltan completar campos.");
    
    //deleteFlag?

    const newAuctionBid = await Auction_bid.create({
        proposed_price,
        total
    });

    let auction = null;
    if (invert) {
        const invertAuction = await Invert_auction.findOne({
            where: { id: auction_id }
        });

        if (!invertAuction) {
            throw new Error(`No se encontró esa subasta inversa.`);
        }

        await invertAuction.addAuction_bid(newAuctionBid);
    } else {
        auction = await Auction.findOne({
            where: { id: auction_id }
        });

        if (!auction) {
            throw new Error(`No se encontró esa subasta.`);
        }

        await auction.addAuction_bid(newAuctionBid);
    }

    return true;
};

module.exports = {
    createAuctionBid,
};
