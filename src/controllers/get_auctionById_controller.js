const { Auction, Product } = require('../db');


const get_auction_by_id = async (auction_id) => {
    const { id, base_price, close_date, ProductId } = await Auction.findByPk(auction_id)
    const product = await Product.findByPk(ProductId)

    const response = {
        auction_id: id,
        product_id: ProductId,
        name: product.name,
        description: product.description,
        brand: product.brand,
        base_price,
        close_date
    }
    return response
}

module.exports = {
    get_auction_by_id,
}