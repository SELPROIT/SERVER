const { Auction } = require('../../db');


const get_auction_by_id = async (auction_id) => {
    const { id, image, product_name, brand, description, datasheet, total, base_price, close_date, ProductId } = await Auction.findByPk(auction_id)

    const response = {
        id,
        product_id: ProductId,
        image: image,
        name: product_name,
        brand: brand,
        description: description,
        datasheet: datasheet,
        total: total,
        base_price,
        close_date
    }
    return response
}

module.exports = {
    get_auction_by_id,
}