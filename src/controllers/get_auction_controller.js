const { Auction, Product, Category, Sub_category } = require('../db');


const get_auction = async () => {
  
  const auctions = await Auction.findAll({
    include: Product, // Include related Product
  });

  const format = await Promise.all(
    auctions.map(async auction => {
      const { id, base_price, close_date, Product: product, authorize } = auction;
      const sub_category = await Sub_category.findByPk(product.SubCategoryId);
      const category = await Category.findByPk(sub_category.CategoryId);

      const newformat = {
        id,
        product_id: product.id,
        sub_category_id: sub_category.id,
        category_id: category.id,
        image: product.image,
        name: product.name,
        price: product.price,
        base_price,  
        close_date,
        type: "AU"
      };
      
      return newformat;
    })
  );

  return format;
}

module.exports = {
  get_auction,
}

