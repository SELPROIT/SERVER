const { Invert_auction, Product } = require('../db');

const create_invert_auction = async (product_id, base_price, target_quantity, total, close_date ) => {

    const product = await Product.findByPk(product_id, {
        include: Invert_auction
    });

    if (!product) {
        throw new Error("Product not found");
    }

    if (product.Invert_auction) {
        throw new Error("Auction already exists for this product");
    }

    const new_invert_auction = await Invert_auction.create({
        base_price,
        target_quantity,
        total,
        close_date,
        invert: true,
        product_name: product.name,
        type: "IA"
    });

    await product.setInvert_auction(new_invert_auction);
    return product;
}

module.exports = {
    create_invert_auction,
};
