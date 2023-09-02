const { Auction, Product, User } = require('../../db.js');
const { put_activate } = require('../put/put_activate_controller.js');

const create_auction = async (auctionArray) => {
    try {
        const productIds = auctionArray.map(auction => auction.product_id);
        const userIds = auctionArray.map(auction => auction.user_id);

        const products = await Product.findAll({
            where: {
                id: productIds
            }
        });

        const users = await User.findAll({
            where: {
                id: userIds
            }
        });

        const createdAuctions = [];

        for (let i = 0; i < auctionArray.length; i++) {
            const auction = auctionArray[i];
            const product = products.find(p => p.id === auction.product_id);
            const user = users.find(u => u.id === auction.user_id);

            if (!product) {
                throw new Error('Producto no encontrado.');
            }
            if (!user) {
                throw new Error('Usuario no encontrado');
            }

            const { name, image, brand, description, datasheet, SubCategoryId } = product;

            
            let sale_price_IVA;
            sale_price_IVA = Math.ceil(auction.base_price * 1.75); //le agrego un 1.75 para agregarle un porcentaje al precio de venta

            auction.sale_price = sale_price_IVA;

            const new_auction = await Auction.create({
                image: image,
                product_name: name,
                brand: brand,
                description: description,
                datasheet: datasheet,
                stock: auction.stock,
                base_price: auction.base_price,
                sale_price: auction.sale_price,
                close_date: auction.close_date,
                subCategory: SubCategoryId,
                type: 'AU',
                ProductId: product.id
            });
            await new_auction.setUser(user);
            createdAuctions.push(new_auction);

            //se guarda la subasta creada en el historial de creación del usuario
            user.created_history.push(new_auction.id);
            await user.save();

            //llamar al admin para que me apruebe o no la auction creada
            // put_activate(new_auction.id, new_auction.status, new_auction.close_date, new_auction.type);
            console.log(user);
        }


        return createdAuctions;

    } catch (error) {
        throw new Error(`Se produjo un error creando esa subasta: ${error.message}`);
    }
};

module.exports = {
    create_auction,
};