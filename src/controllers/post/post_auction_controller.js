const { Auction, Product, User } = require('../../db');

const create_auction = async (product_id, base_price, close_date, user_id ,stock ) => {

    if(!product_id || !base_price || !close_date || !user_id || !stock) throw new Error ("Faltan completar campos.");
    //deleteFlag, authorize falta esto?
    try {
        const product = await Product.findByPk(product_id);
        if (!product) {
            throw new Error('Producto no encontrado');
        }
        if (product.Auction) {
            throw new Error('Ya existe una subasta para ese producto.');
        }
        const user = await User.findByPk(user_id);

        if (!user) {
            throw new Error('Usuario no encontrado.');
        }

        let sale_price;
        sale_price = Math.ceil(base_price * 1.75); //le agrego un 1.75 para agregarle un porcentaje al precio de venta
         //preguntarle el porcentaje a steven, o que se haga en base al valor inicial, y después poner la posibilidad a modificarlo en el put

        // const {user_name} = user;
        //guardar la subasta en created_history, hacerle eun update 
        const { name, image, brand, description, datasheet, SubCategoryId } = product;
        
        const new_auction = await product.createAuction({
            image: image,
            product_name: name,
            brand: brand,
            description: description,
            datasheet: datasheet,
            stock,
            base_price,
            close_date,
            sale_price, 
            type: 'AU',
            subCategory: SubCategoryId
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