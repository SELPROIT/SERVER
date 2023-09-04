const { User, Invert_auction, Auction_bid } = require('../../db.js');

const handle_finish_auction = async (auction_id, type) => {

  if (type === "AU") {
    
    const bids = await Auction_bid.findAll({
      where: {
        AuctionId: auction_id
      }
    });

    await Promise.all(bids.map(async (bid) => {
      const update = {
        interaction_history: [auction_id]
      }
      const user = await User.update(update, {
        where: {
          id: bid.UserId
        }
      })
      return user;
    }))

    const maxBid = bids.reduce((max, bid) => {
      if (bid.proposed_price > max.value) {
        return {
          value: bid.proposed_price,
          user: bid.UserId
        };
      } else {
        return max;
      }
    }, { value: 0, user: null });

    //Mandar el Email

    return true

  }

  if (type === "IA") {
   
    const bids = await Auction_bid.findAll({
      where: {
        InvertAuctionId: auction_id
      }
    });
    const invert = await Invert_auction.findByPk(auction_id);
    const { target_quantity } = invert;

    bids.sort((a, b) => a.proposed_price - b.proposed_price);
    const winners = [];
    let currentQuantity = 0;

    for (const bid of bids) {
      if (currentQuantity < target_quantity) {
        const remainingQuantity = target_quantity - currentQuantity;
        if (bid.proposed_amount <= remainingQuantity) {
          
          winners.push({
            user: bid.UserId,
            amount: bid.proposed_amount,
            price: bid.proposed_price
          });
          currentQuantity += bid.proposed_amount;
        } else {
          
          winners.push({
            user: bid.UserId,
            amount: remainingQuantity,
            price: bid.proposed_price
          });
          currentQuantity = target_quantity;
        }
      } else {
        
        break;
      }
    }

    if (currentQuantity === target_quantity) {
      // Envía el correo electrónico
      // para los ganadores
      // winners contiene la lista de ganadores con sus cantidades y precios
      // { //Asi estan definidos los ganadores el el array winners
      //   user: '3d2f8589-138d-4a9a-ba05-00633d3fe795',
      //   amount: 200,
      //   price: 900
      // }
      // !EMAIL
    }


  }

};

module.exports = {
  handle_finish_auction
};
