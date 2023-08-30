const { Invert_auction } = require("../../db.js");

// Función que obtiene información de una subasta invertida por su ID utilizando promesas
const get_invertAuction_by_id = (invertAuction_id) => {
  return Invert_auction.findByPk(invertAuction_id)
    .then((invertAuction) => {
      if (!invertAuction) {
        throw new Error("Invert auction not found");
      }

      const response = {
        id: invertAuction.id,
        product: invertAuction.product,
        product_name: invertAuction.product_name,
        image: invertAuction.image,
        description: invertAuction.description,
        brand: invertAuction.brand,
        target_quantity: invertAuction.target_quantity,
        total: invertAuction.total,
        base_price: invertAuction.base_price,
        close_date: invertAuction.close_date,
        invert: invertAuction.invert,
        user: invertAuction.user,
        authorize: invertAuction.authorize,
        datasheet: invertAuction.datasheet,
        status: invertAuction.status,
        type: invertAuction.type,
        auction_bids: invertAuction.auction_bids, // Include the formatted Auction_bids
      };

      return response;
    })
    .catch((error) => {
      throw error;
    });
};


module.exports = {
  get_invertAuction_by_id
};
