const { Auction, Product, Category, Sub_category, User, Auction_bid } = require('../../db'); // Asegúrate de importar sequelize
const { handle_date } = require('./handle_date');

const get_auction = async () => {
  try {
    const auctions = await Auction.findAll({
      include: [
        {
          model: Product, // Incluir el Producto relacionado
          include: [
            { model: Sub_category, include: Category } // Incluir Subcategoría y Categoría
          ]
        },
        {
          model: User, // Incluir el Usuario relacionado
          attributes: ['id', 'favorites', 'created_history'] // Incluir solo las propiedades relevantes
        },
        {
          model: Auction_bid
        }
      ]
    });

    const formattedAuctions = await Promise.all(
      auctions.map(async auction => {
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
          type
        } = auction;

        // const formatted_close_date = handle_date(close_date);
        
        // Realizar alguna manipulación o formateo de datos aquí si es necesario

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
          total,
          type
        };
      })
    );
    
    return formattedAuctions;

  } catch (error) {
    throw error;
  }
};

module.exports = {
  get_auction
};