const { Product, Sub_category, Auction, Invert_auction } = require('../../db');

const getAllProd = async () => {
    const products = await Product.findAll({
        include: [
            {
                model: Sub_category,
                attributes: [] // Exclude subcategory attributes
            },
            {
                model: Auction,
                attributes: ['id', 'base_price', 'close_date']
            },
            {
                model: Invert_auction,
                attributes: ['id', 'base_price', 'close_date']
            }
        ],
        // attributes: ['id', 'name', 'price', 'description', 'brand', 'stock', 'rating'] // Exclude product attributes if needed
    });
    return products;
};

module.exports = {
    getAllProd
};
