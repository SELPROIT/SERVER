const { Invert_auction, Product } = require('../../db.js');

const create_invert_auction = async (auctionArray) => {
    try {
        const productIds = auctionArray.map(auction => auction.product_id);

        const products = await Product.findAll({
            where: {
                id: productIds
            }
        });
        console.log('productIds', productIds)
        const createdAuctions = [];

        for (let i = 0; i < auctionArray.length; i++) {
            const auction = auctionArray[i];
            const product = products.find(p => p.id === auction.product_id);
            if (!product) {
                throw new Error('Product not found');
            }

            const { name, image, brand, description, datasheet, SubCategoryId } = product;
            console.log('auction', auction)
            const new_auction = await Invert_auction.create({
                image: image,
                product_name: name,
                brand: brand,
                description: description,
                datasheet: datasheet,
                target_quantity: auction.target_quantity,
                close_date: auction.close_date,
                desired_price: auction.desired_price,
                invert: true,
                subCategory: SubCategoryId,
                type: 'IA',
                ProductId: product.id
            });
            createdAuctions.push(new_auction);
        }

        return createdAuctions;
    } catch (error) {
        throw new Error(error);
    }
};

module.exports = {
    create_invert_auction
};