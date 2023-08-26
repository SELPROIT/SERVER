require('dotenv').config();
const { Auction, Invert_auction, Product } = require('../../db');
const mercadopago = require("mercadopago")
const { MERCADOPAGO_KEY } = process.env;

const mercado_pago = async (auction) => {
    mercadopago.configure({ access_token: MERCADOPAGO_KEY })
    const { id, product_id } = auction
    const isAuction = Auction.findByPk(id)
    const isInvert = Invert_auction.findByPk(id)
    const product = Product.findByPk(product_id)

    if(!isAuction || !isInvert || !product) throw new Error ("Subasta o producto no existen")

    if (isAuction) {
        const {product_name, brand, description, image, bid} = auction;
        const payment = await mercadopago.preferences.create({
            items: [
                {
                    id: id,
                    title: product_name,
                    unit_price: 500, //precio de la puja ganadora
                    currency_id: "COP",
                    picture_url: image,
                    quantity: 1,
                }
            ],
            back_urls: {
                success: "http://localhost:3000",
                failure:"",
                pending:"",
            },
            auto_return: "approved",
            binary_mode: true,
        })
        return payment
    }

    if (isInvert) {
        const {product_name, brand, description, image, bid} = auction;
        const payment = await mercadopago.preferences.create({
            items: [
                {
                    id: id,
                    title: product_name,
                    unit_price: 500, //precio de la puja ganadora
                    currency_id: "COP",
                    picture_url: image,
                    quantity: 1,
                }
            ],
            back_urls: {
                success: "http://localhost:3000",
                failure:"",
                pending:"",
            },
            auto_return: "approved",
            binary_mode: true,
        })
        return payment
    }
};

module.exports = mercado_pago;
