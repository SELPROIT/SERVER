const { Invert_auction, Product, Sub_category, Category } = require('../db');


const get_invert_auction = async () => {
    const auction = await Invert_auction.findAll()
    const format = Promise.all(
        auction.map(async (invertAuction) => {
            const { id, base_price, close_date, ProductId, target_quantity, total, invert } = invertAuction
            const product = await Product.findByPk(ProductId)
            const sub_category = await Sub_category.findByPk(product.SubCategoryId)
            const category = await Category.findByPk(sub_category.CategoryId)
        
            const newformat = {
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
            return newformat
        })
    )
    
    return format
}

module.exports = {
    get_invert_auction,
}