const { Auction_bid, Invert_auction, Auction } = require("../db");

const getAuctionBid = async () => {

  const auction_bid = await Auction_bid.findAll({
    include: [
      {
        model: Invert_auction,
        through: {
          attributes: []
        }
      },
      {
        model: Auction,
        through: {
          attributes: []
        }
      }
    ]
  });

  return auction_bid;
};

module.exports = {
  getAuctionBid
};