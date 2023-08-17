const {Auction_bid, Auction, Invert_auction} = require ("../db");

const createAuctionBid = async (auction_id, proposed_price, total, auction_type) => {
     
    const newAuctionBid = await Auction_bid.create({
        proposed_price,
        total
    });
        
    if(auction_type){

        let invertAuction = await Invert_auction.findByPk(auction_id); //busco por ID para confirmar que exista esa subasta

        if (!invertAuction) {
            throw new Error(`No se encontró esa subasta inversa.`); //si no existe una subasta inversa me devuelve este error
        }

        await Invert_auction.addAuction_bid(newAuctionBid);

        return true;
    }
        
    let auction = await Auction.findByPk(auction_id); //busco por ID para confirmar que exista esa subasta

    if (!auction) {
        throw new Error(`No se encontró esa subasta.`); //si no existe una subasta me devuelve este error
    }

    await Auction.addAuction_bid(newAuctionBid);

    return true;
};

module.exports = {
    createAuctionBid
};
