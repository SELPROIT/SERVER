require('dotenv').config();
const { Auction, Invert_auction, Product } = require('../../db');
const mercadopago = require("mercadopago")
const { MERCADOPAGO_KEY } = process.env;

const mercado_pago = async (auction) => {
    mercadopago.configure({ access_token: "TEST-6508841798496540-082620-75c515c0d097a7644d34f05fc0d0b7f0-1462578434" })
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
                    currency_id: "ARS",
                    picture_url: image,
                    quantity: 1,
                }
            ],
            back_urls: {
                success: "http://localhost:3001",
                failure:"",
                pending:"",
            },
            notification_url: "https://7cda-190-12-11-34.ngrok-free.app/create/webhook",
        })

        const url = payment.body.init_point
        return url
    }

    // if (isInvert) {
    //     const {product_name, brand, description, image, bid} = auction;
    //     const payment = await mercadopago.preferences.create({
    //         items: [
    //             {
    //                 id: id,
    //                 title: product_name,
    //                 unit_price: 500, //precio de la puja ganadora
    //                 currency_id: "ARS",
    //                 picture_url: image,
    //                 quantity: 1,
    //             }
    //         ],
    //         back_urls: {
    //             success: "",
    //             failure:"",
    //             pending:"",
    //         },
    //         notification_url: "https://7cda-190-12-11-34.ngrok-free.app/create/webhook",
    //     })
    //     const url = payment.init_point
    //     return url
    // }
};

const receiveWebhook = async (payment) => {
    console.log(payment);
    if (payment.type === "payment") {
        const data = await mercadopago.payment.findById(payment["data.id"] )
        console.log(data);
        return data
    }
}

module.exports = { 
    mercado_pago,
    receiveWebhook,
};
