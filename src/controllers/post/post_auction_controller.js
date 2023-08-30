const { Auction, Product, Sub_category } = require('../../db.js');

const create_auction = async (product_id, base_price, close_date) => {

    if(!product_id || !base_price || !close_date) throw new Error ("Faltan completar campos.");
    //deleteFlag, authorize falta esto?
    try {
        const product = await Product.findByPk(product_id);
        if (!product) {
            throw new Error('Product not found');
        }

        const { name, image, brand, description, datasheet, stock, SubCategoryId } = product;
        
        const new_auction = await product.createAuction({
            image: image,
            product_name: name,
            brand: brand,
            description: description,
            datasheet: datasheet,
            total: stock,
            base_price,
            close_date,
            subCategory: SubCategoryId,
            type: 'AU',
        });

        return new_auction;
    } catch (error) {
        throw new Error(`Error creating auction: ${error.message}`);
    }
};

module.exports = {
    create_auction,
};