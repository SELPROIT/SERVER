const { Invert_auction, Product } = require('../db');

const create_invert_auction = async (product_id, base_price, target_quantity, total, close_date ) => {

    const newAuction = await Invert_auction.create({
        base_price,
        target_quantity,
        total,
        close_date,
        invert: true
    });

    const product = await Product.findByPk(product_id);
    if (!product) {
        throw new Error("Product not found");
    }
    await newAuction.addInvert_auction(product);

    return true;
}

module.exports = {
    create_invert_auction,
};
