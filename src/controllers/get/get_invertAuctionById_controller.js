const { Invert_auction, Product, Category, Sub_category } = require('../../db');


const get_invertAuction_by_id = async (invertAuction_id) => {
    const { id, base_price, close_date, ProductId, target_quantity, total, invert } = await Invert_auction.findByPk(invertAuction_id)
    const product = await Product.findByPk(ProductId)
    const sub_category = await Sub_category.findByPk(product.SubCategoryId)
    const category = await Category.findByPk(sub_category.CategoryId)

    const response = {
        id,
        product_id: ProductId,
        sub_category_id: sub_category.id,
        category_id: category.id,
        name: product.name,
        image: product.image,
        description: product.description,
        brand: product.brand,
        target_quantity,
        total,
        base_price,
        close_date,
        invert,
    }
    return response
}

module.exports = {
    get_invertAuction_by_id,
}