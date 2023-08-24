const { Invert_auction, Product, Category, Sub_category } = require('../../db');

// Función que obtiene subastas invertidas y productos relacionados utilizando promesas
const get_invert_auction = () => {
  return Invert_auction.findAll({
    include: Product // Incluir el Producto relacionado
  })
    .then(invert_auctions => {
      return Promise.all(
        invert_auctions.map(auction => {
          const { id, base_price, target_quantity, close_date, invert, type, Product: product, authorize } = auction;
          return Sub_category.findByPk(product.SubCategoryId)
            .then(sub_category => {
              return Category.findByPk(sub_category.CategoryId)
                .then(category => {
                  const newformat = {
                    id,
                    image: product.image,
                    name: product.name,
                    brand: product.brand,
                    desription: product.description,
                    datasheet: product.datasheet,
                    total: product.total,
                    price: product.price,
                    target_quantity,
                    base_price,
                    close_date,
                    invert,
                    product_id: product.id,
                    sub_category_id: sub_category.id,
                    category_id: category.id,
                    type
                  };
                  // Puedes agregar aquí una lógica de autorización si es necesario
                  // if (authorize === true) {
                  //   return newformat;
                  // }
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
  get_invert_auction,
};
