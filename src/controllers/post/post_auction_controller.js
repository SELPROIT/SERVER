const { Auction, Product } = require('../../db');

const create_auction = async (product_id, base_price, close_date) => {
    try {
        const product = await Product.findByPk(product_id);
        if (!product) {
            throw new Error('Product not found');
        }

        const { name } = product;

        const new_auction = await product.createAuction({
            base_price,
            close_date,
            product_name: name,
            type: 'AU',
        });

        return new_auction;
    } catch (error) {
        throw new Error(`Error creating auction: ${error.message}`);
    }
};

module.exports = {
    create_auction,
};

