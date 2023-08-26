const { Invert_auction, Product, Auction_bid, User } = require('../../db');

const create_invert_auction = async (product_id, base_price, target_quantity, total, close_date, user_id) => {
    try {
        const product = await Product.findByPk(product_id);

        if (!product) {
            throw new Error('Product not found');
        }

        const { name, image, brand, description, datasheet, price, SubCategoryId } = product;

        const user = await User.findByPk(user_id);
        if (!user) {
            throw new Error('User not found');
        }

        const new_invert_auction = await product.createInvert_auction({
            image: image,
            product_name: name,
            brand: brand,
            description: description,
            datasheet: datasheet,
            total,
            price: price,
            target_quantity, //llegar a lo pedido por el cliente
            base_price,
            close_date,
            invert: true,
            subCategory: SubCategoryId,
            type: 'IA',
            user_id,
            //status
        });

        await new_invert_auction.setUser(user); // Associate the user with the invert auction

        return new_invert_auction;
    } catch (error) {
        throw new Error('Error creating invert auction.');
    }
};

module.exports = {
    create_invert_auction
};
