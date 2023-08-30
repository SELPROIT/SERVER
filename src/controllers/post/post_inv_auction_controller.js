const { Invert_auction, Product } = require('../../db.js');

const create_invert_auction = async (product_id, base_price, target_quantity, close_date) => {

    if (!product_id || !base_price || !target_quantity || !close_date) throw new Error("Faltan completar campos.");
    try {
        const product = await Product.findByPk(product_id);

        if (!product) {
            throw new Error('Product not found');
        }

        if (product.Invert_auction) {
            throw new Error('An auction already exists for this product');
        }

        const { name, image, brand, description, datasheet, stock, SubCategoryId } = product;

        const new_invert_auction = await product.createInvert_auction({
            image: image,
            product_name: name,
            brand: brand,
            description: description,
            datasheet: datasheet,
            total: stock,
            target_quantity,
            base_price,
            close_date,
            invert: true,
            subCategory: SubCategoryId,
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