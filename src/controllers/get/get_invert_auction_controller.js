const { Invert_auction, Product, Category, Sub_category, User, Auction_bid } = require('../../db'); // Asegúrate de importar sequelize
const { handle_date } = require('./handle_date');

const get_invert_auction = async () => {
  try {
    const invert_auctions = await Invert_auction.findAll({
      include: [
        {
          model: Product,
          include: [
            { model: Sub_category, include: Category }
          ]
        },
        {
          model: User,
          attributes: ['id', 'favorites', 'created_history']
        },
        {
          model: Auction_bid // Include the Auction_bid model here
        }
      ]
    });

    const formattedAuctions = await Promise.all(
      invert_auctions.map(async auction => {
        const {
          id,
          base_price,
          close_date,
          Product: product,
          User: user,
          authorize,
          image,
          name,
          brand,
          description,
          datasheet,
          total,
          target_quantity,
          invert,
          status,
          type,
          Auction_bids // Access the associated Auction_bids here
        } = auction;

        const formattedAuctionBids = Auction_bids.map(bid => ({
          bid_id: bid.id,
          proposed_price: bid.proposed_price,
          total: bid.total,
          // Include other relevant properties from Auction_bid if needed
        }));

        return {
          id,
          base_price,
          close_date,
          product,
          user,
          authorize,
          image,
          name,
          brand,
          description,
          datasheet,
          status,
          total,
          type,
          auction_bids: formattedAuctionBids, // Include the formatted Auction_bids
          target_quantity,
          invert
        };
      })
    );

    return formattedAuctions;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  get_invert_auction
};

