const { Auction, Product, Category, Sub_category, User } = require('../../db'); // Asegúrate de importar sequelize
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

        return {
          id,
          image,
          name,
          brand,
          description,
          datasheet,
          total,
          base_price,
          close_date,
          product_id: product.id,
          sub_category_id: product.SubCategoryId,
          category_id: product.Sub_category.CategoryId,
          type,
          user_id: user.id,
          favorites: user.favorites,
          created_history: user.created_history
        };
      })
    );

    return formattedAuctions;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  get_auction,
};
