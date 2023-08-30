const { Invert_auction, Product } = require('../../db.js');

const create_invert_auction = async (product_id, desired_price, target_quantity, close_date) => {

    if (!product_id || !target_quantity || !close_date || !desired_price) throw new Error("Faltan completar campos.");
    try {
        const product = await Product.findByPk(product_id);

        if (!product) {
            throw new Error('Producto no encontrado.');
        }

        const { name, image, brand, description, datasheet, SubCategoryId } = product;

        const new_invert_auction = await product.createInvert_auction({
            image: image,
            product_name: name,
            brand: brand,
            description: description,
            datasheet: datasheet,
            target_quantity,
            close_date,
            desired_price,
            invert: true,
            subCategory: SubCategoryId,
            type: 'IA'
        }).catch((error) => {
            throw new Error('Se produjo un error creando esa subasta inversa.', error.message);
        });

        return new_invert_auction;
    } catch (error) {
        throw new Error('Error creating invert auction.');
    }
};

module.exports = {
    create_invert_auction
};