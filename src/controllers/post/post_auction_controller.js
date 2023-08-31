const { Auction, Product, User } = require('../../db.js');

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
                throw new Error('Product not found');
            }
            if (!user) {
                throw new Error('User not found');
            }

            const { name, image, brand, description, datasheet, SubCategoryId } = product;

            const new_auction = await Auction.create({
                image: image,
                product_name: name,
                brand: brand,
                description: description,
                datasheet: datasheet,
                stock: auction.stock,
                base_price: auction.base_price,
                close_date: auction.close_date,
                subCategory: SubCategoryId,
                type: 'AU'
            });

            await new_auction.setUser(user);
            await product.addAuction(new_auction);

            createdAuctions.push(new_auction);
        }

        return createdAuctions;

    } catch (error) {
        throw new Error(`Error creating auction: ${error.message}`);
    }
};

module.exports = {
    create_auction,
};
