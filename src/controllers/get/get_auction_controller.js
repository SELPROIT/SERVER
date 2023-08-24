const { Auction, Product, Category, Sub_category } = require('../../db');

// Función que obtiene información de subastas y productos relacionados utilizando promesas
const get_auction = () => {
  return Auction.findAll({
    include: Product // Incluir el Producto relacionado
  })
    .then(auctions => {
      return Promise.all(
        auctions.map(auction => {
          const { id, base_price, close_date, Product: product, authorize } = auction;
          return Sub_category.findByPk(product.SubCategoryId)
            .then(sub_category => {
              return Category.findByPk(sub_category.CategoryId)
                .then(category => {
                  const newformat = {
                    id,
                    image: product.image,
                    name: product.name,
                    brand: product.brand,
                    description: product.description,
                    datasheet: product.datasheet,
                    total: product.stock,
                    price: product.price,
                    base_price,
                    close_date,
                    product_id: product.id,
                    sub_category_id: sub_category.id,
                    category_id: category.id,
                    type: "AU"
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
