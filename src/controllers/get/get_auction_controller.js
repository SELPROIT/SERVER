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

// Función que obtiene información de subastas y productos relacionados utilizando promesas
const get_auction = () => {
  return Auction.findAll({
    include: Product // Incluir el Producto relacionado
  })
    .then(auctions => {
      return Promise.all(
        auctions.map(auction => {
          const { id, base_price, close_date, Product: product, authorize, image, product_name, brand, description, datasheet, stock, price, type } = auction;
          return Sub_category.findByPk(product.SubCategoryId)
            .then(sub_category => {
              return Category.findByPk(sub_category.CategoryId)
                .then(category => {
                  const newformat = {
                    id,
                    image,
                    product_name,
                    brand,
                    description,
                    datasheet,
                    total: stock,
                    price: price,
                    base_price,
                    close_date,
                    product_id: product.id,
                    sub_category_id: sub_category.id,
                    category_id: category.id,
                    type
                  };
                  return newformat;
                });
            });
        })
      );
    })
    .catch(error => {
      throw error;
    });
};

module.exports = {
  get_auction,
};
