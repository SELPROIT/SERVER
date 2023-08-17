const { Auction, Product } = require('../db');

const create_auction = async (product_id, base_price, close_date) => {

    const newAuction = await Auction.create({
        base_price,
        close_date
    });

    const product = await Product.findByPk(product_id);
    if (!product) {
        throw new Error("Product not found");
    }
    await newAuction.addProduct(product);

    return true;
}

module.exports = {
    create_auction,
};
