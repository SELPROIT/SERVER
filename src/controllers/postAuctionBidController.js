const {Auction_bid, Auction, Invert_auction} = require ("../db");

const createAuctionBid = async (auction_id, proposed_price, total, invert) => {
     
    const newAuctionBid = await Auction_bid.create({
        proposed_price,
        total
    });
        
    if(invert){

        // if(proposed_price > Auction.base_price){
        //     throw new Error(`No se encontró esa subasta inversa.`);
        // }

        let invertAuction = await Invert_auction.findByPk(auction_id);
    
        if (!invertAuction) {
           
            throw new Error(`No se encontró esa subasta inversa.`);
        }
    
        await invertAuction.addAuction_bid(newAuctionBid);
    
        return true;
    }
    
        
    let auction = await Auction.findByPk(auction_id); //busco por ID para confirmar que exista esa subasta

    if (!auction) {
        throw new Error(`No se encontró esa subasta.`); //si no existe una subasta me devuelve este error
    }

    await auction.addAuction_bid(newAuctionBid);

    return true;
};

module.exports = {
    createAuctionBid
};
