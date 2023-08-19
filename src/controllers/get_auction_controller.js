const { Auction, Product } = require('../db');


const get_auction = async () => {
    const auction = await Auction.findAll()
    const format = Promise.all(
        auction.map(async (auction) => {
            const { id, base_price, close_date, ProductId } = auction
            const product = await Product.findByPk(ProductId)
            const newformat = {
                id,
                product_id: ProductId,
                name: product.name,
                description: product.description,
                brand: product.brand,
                base_price,
                close_date
            }
            return newformat
        })
    )
    
    return format
}

module.exports = {
    get_auction,
}