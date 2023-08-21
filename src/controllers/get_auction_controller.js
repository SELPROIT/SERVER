const { Auction, Product, Category, Sub_category } = require('../db');


const get_auction = async () => {
  const auction = await Auction.findAll()
  const format = Promise.all(
    auction.map(async (auction) => {
      const { id, base_price, close_date, ProductId, authorize } = auction
      const product = await Product.findByPk(ProductId)
      const sub_category = await Sub_category.findByPk(product.SubCategoryId)
      const category = await Category.findByPk(sub_category.CategoryId)

      // if (authorize === true) {
        const newformat = {
          id,
          product_id: ProductId,
          sub_category_id: sub_category.id,
          category_id: category.id,
          name: product.name,
          price: product.price,
          description: product.description,
          brand: product.brand,
          base_price,
          total: product.stock,
          close_date,
          rating: product.rating,
        }
        return newformat
      // }

})
  )

  return format
}

module.exports = {
  get_auction,
}