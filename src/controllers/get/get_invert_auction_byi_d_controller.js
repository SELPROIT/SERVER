const { Invert_auction, Product, Category, Sub_category } = require('../../db');

// Función que obtiene información de una subasta invertida por su ID utilizando promesas
const get_invertAuction_by_id = (invertAuction_id) => {
  return Invert_auction.findByPk(invertAuction_id)
    .then(invertAuction => {
      if (!invertAuction) {
        throw new Error('Invert auction not found');
      }
      
      return Product.findByPk(invertAuction.ProductId)
        .then(product => {
          if (!product) {
            throw new Error('Product not found');
          }
          
          return Sub_category.findByPk(product.SubCategoryId)
            .then(sub_category => {
              if (!sub_category) {
                throw new Error('Sub category not found');
              }
              
              return Category.findByPk(sub_category.CategoryId)
                .then(category => {
                  if (!category) {
                    throw new Error('Category not found');
                  }
                  
                  const response = {
                    id: invertAuction.id,
                    product_id: invertAuction.ProductId,
                    sub_category_id: sub_category.id,
                    category_id: category.id,
                    name: product.name,
                    image: product.image,
                    description: product.description,
                    brand: product.brand,
                    target_quantity: invertAuction.target_quantity,
                    total: invertAuction.total,
                    base_price: invertAuction.base_price,
                    close_date: invertAuction.close_date,
                    invert: invertAuction.invert,
                  };
                  
                  return response;
                });
            });
        });
    })
    .catch(error => {
      throw error;
    });
};

module.exports = {
  get_invertAuction_by_id,
};
