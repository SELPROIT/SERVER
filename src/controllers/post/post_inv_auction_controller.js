const { Invert_auction, Product } = require('../../db');

const create_invert_auction = async (product_id, base_price, target_quantity, total, close_date) => {
    try {
        const product = await Product.findByPk(product_id);

        if (!product) {
            throw new Error('Product not found');
        }

        if (product.Invert_auction) {
            throw new Error('An auction already exists for this product');
        }

        const { name } = product;

        const new_invert_auction = await product.createInvert_auction({
            base_price,
            target_quantity,
            total,
            close_date,
            invert: true,
            product_name: name,
            type: 'IA',
        }).catch((error) => {
            console.log('error', error)
        });

        return new_invert_auction;
    } catch (error) {
        throw new Error('Error creating invert auction.');
    }
};

module.exports = {
    create_invert_auction,
};