const { Auction, Product } = require('../db');

const create_auction = async (product_id, base_price, close_date) => {
    try {
        const product = await Product.findByPk(product_id);
        if (!product) {
            throw new Error('Product not found');
        }

        const new_auction = await Auction.create({
            base_price,
            close_date,
            product_name: product.name,
            type: 'AU',
        });

        await product.addAuction(new_auction);

        return true;
    } catch (error) {
        throw new Error('Error creating auction.');
    }
};

module.exports = {
    create_auction,
};
