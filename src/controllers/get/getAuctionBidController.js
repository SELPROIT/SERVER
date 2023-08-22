const { Auction_bid, Invert_auction, Auction } = require("../db");

const getAuctionBid = async () => {
  
  const auction_bids = await Auction_bid.findAll();
  
  return auction_bids;
};

module.exports = {
  getAuctionBid
};
