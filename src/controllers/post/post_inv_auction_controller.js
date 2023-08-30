const { Invert_auction, Product, User } = require('../../db.js');

const create_invert_auction = async (product_id, base_price, target_quantity, close_date, user_id) => {

    if (!product_id || !base_price || !target_quantity || !close_date || !user_id) throw new Error("Faltan completar campos.");
    try {
        const product = await Product.findByPk(product_id);

        if (!product) {
            throw new Error('Producto no encontrado.');
        }

        const user = await User.findByPk(user_id);

        if (!user) {
            throw new Error('Usuario no encontrado.');
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
            throw new Error('Se produjo un error creando esa subasta inversa.', error.message);
        });

        await new_invert_auction.setUser(user);

        return new_invert_auction;
    } catch (error) {
        throw new Error('Error creating invert auction.');
    }
};

module.exports = {
    create_invert_auction
};