const { Auction_bid, Auction, Invert_auction, User } = require("../../db.js");

const createAuctionBid = async (auction_id, proposed_price, target_accumulated, invert, user_id) => {
   
    if (!auction_id || !proposed_price || !user_id) {
        throw new Error("Faltan completar campos.");
    }

    const user = await User.findByPk(user_id);
    if (!user) {
        throw new Error("Usuario no encontrado.");
    }

    
    if (invert) {

        const invertAuction = await Invert_auction.findByPk(auction_id);
    

        if(proposed_price > invertAuction.desired_price){
            throw new Error(`No se puede crear una puja con un precio mayor al de base.`);
        }
        if(proposed_price <= 0){
            throw new Error(`La puja no puede ser 0 o un número negativo.`);
        }
        if(target_accumulated >= invertAuction.target_quantity){
            throw new Error(`La cantidad de productos ofrecidos no pueden ser mayor al la cantidad de productos solicitados. La cantidad de los meta es: ${target_quantity}`);
        }
        
        if (!invertAuction) {
            throw new Error(`No se encontró esa subasta inversa.`);
        }
        
        const bid = await Auction_bid.findAll({
            where:{InvertAuctionId: invertAuction.id}
        })
        let totalTargetAccumulated = 0;
        if (bid.length) {
            const accumulatedValues = bid.map(bid => bid.target_accumulated);
            console.log(accumulatedValues);
            totalTargetAccumulated = accumulatedValues.reduce((sum, value) => sum + value, 0);

        }
     
        console.log(totalTargetAccumulated);
        
        

        const newAuctionBid = await Auction_bid.create({
            proposed_price,
            target_accumulated: totalTargetAccumulated,
            UserId: user_id
        });
        await invertAuction.addAuction_bid(newAuctionBid);

        return newAuctionBid;
    } else {
        const auction = await Auction.findByPk(auction_id);

        const newAuctionBid = await Auction_bid.create({
            proposed_price,
            UserId: user_id
        });

        await auction.addAuction_bid(newAuctionBid);

        return newAuctionBid;
    }
};

module.exports = {
    createAuctionBid
};