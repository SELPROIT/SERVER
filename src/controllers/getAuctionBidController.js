const { Auction_bid, Invert_auction, Auction } = require("../db");

const getAuctionBid = async () => {
  const auction_bids = await Auction_bid.findAll();

  // Obtener los detalles de las subastas invertidas (Invert_auction) y subastas (Auction) relacionadas
  const auction_bidDetails = await Promise.all(auction_bids.map(async (bid) => {
    const invert_auction = await Invert_auction.findByPk(bid.invert_auction_id);
    const auction = await Auction.findByPk(bid.auction_id);
    return {
      bid,
      invert_auction,
      auction,
    };
  }));

  return auction_bidDetails;
};

module.exports = {
  getAuctionBid,
};
