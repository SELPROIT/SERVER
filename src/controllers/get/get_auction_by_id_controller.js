const { Auction } = require("../../db.js");

const get_auction_by_id = async (auction_id) => {
  const {
    id,
    base_price,
    close_date,
    product,
    user,
    authorize,
    image,
    product_name,
    brand,
    sale_price,
    description,
    datasheet,
    status,
    stock,
    type,
    auction_bids
  } = await Auction.findByPk(auction_id);

  const response = {
    id,
    base_price,
    close_date,
    authorize,
    image,
    sale_price,
    product_name,
    brand,
    description,
    datasheet,
    status,
    stock,
    type,
    product,
    user,
    auction_bids
  };
  return response;
};

module.exports = {
  get_auction_by_id
};