const { User, Invert_auction, Auction_bid } = require('../../db.js');


const handle_finish_auction = async (auction_id, type) => {
  //hacer un winners que se relacione con interaction_history del usuario

  if (type === "AU") {
    //put_user_controller(interaction_history) le agrego la subasta ganada al usuario
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
      return user
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
    // const proposed_price = invertAuction.auction_bids.proposed_price;
    // const proposed_amount = invertAuction.auction_bids.proposed_amount;
    // const user = invertAuction.auction_bids.UserId;
    // const target_quantity = invertAuction.target_quantity;

    const bids = await Auction_bid.findAll({
      where: {
        InvertAuctionId: auction_id
      }
    });
    const invert = await Invert_auction.findByPk(auction_id);
    const { target_quantity } = invert;

    // Ordena las ofertas por precio ascendente
    bids.sort((a, b) => a.proposed_price - b.proposed_price);
    const winners = [];
    let currentQuantity = 0;

    for (const bid of bids) {
      if (currentQuantity < target_quantity) {
        const remainingQuantity = target_quantity - currentQuantity;
        if (bid.proposed_amount <= remainingQuantity) {
          // Esta oferta puede cumplir completamente la cantidad restante
          winners.push({
            user: bid.UserId,
            amount: bid.proposed_amount,
            price: bid.proposed_price
          });
          currentQuantity += bid.proposed_amount;
        } else {
          // Esta oferta puede cumplir parcialmente la cantidad restante
          winners.push({
            user: bid.UserId,
            amount: remainingQuantity,
            price: bid.proposed_price
          });
          currentQuantity = target_quantity; // Se alcanzó la cantidad objetivo
        }
      } else {
        // Se alcanzó la cantidad objetivo, sal del bucle
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
