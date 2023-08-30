const { Auction, Product, User } = require('../../db');

const create_auction = async (product_id, base_price, close_date, user_id) => {

    if(!product_id || !base_price || !close_date || !user_id) throw new Error ("Faltan completar campos.");
    //deleteFlag, authorize falta esto?
    try {
        const product = await Product.findByPk(product_id);
        if (!product) {
            throw new Error('Product not found');
        }
        if (product.Auction) {
            throw new Error('Ya existe una subasta para ese producto.');
        }
        const user = await User.findByPk(user_id);

        if (!user) {
            throw new Error('Usuario no encontrado.');
        }

        // const {user_name} = user;
        //guardar la subasta en created_history, hacerle eun update 
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
            type: 'AU'
        });

        await new_auction.setUser(user);

        return new_auction;
    } catch (error) {
        throw new Error(`Error creating auction: ${error.message}`);
    }
};

module.exports = {
    create_auction,
};