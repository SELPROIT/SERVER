require('dotenv').config();
const { Auction, Product } = require('../../db.js');
const mercadopago = require("mercadopago")
const { MERCADOPAGO_KEY } = process.env;

const mercado_pago = async (auction) => {
    mercadopago.configure({ access_token: "TEST-6508841798496540-082620-75c515c0d097a7644d34f05fc0d0b7f0-1462578434" })
    const { id, product, sale_price } = auction
    console.log(sale_price);
    const isAuction = Auction.findByPk(id)
    const existProduct = Product.findByPk(product.id)

    if(!isAuction || !existProduct) throw new Error ("Subasta o producto no existen")

    if (isAuction) {
        const {product_name, description, image} = auction;
        console.log(image);
        const payment = await mercadopago.preferences.create({
            items: [
                {
                    id: id,
                    title: product_name,
                    description: description,
                    unit_price: sale_price, //precio del comprar ya
                    currency_id: "ARS",
                    picture_url: image,
                    quantity: 1,
                    deferred_payment: false,
                }
            ],
            back_urls: {
                success: "http://localhost:3001",
                failure:"",
                pending:"",
            },
            notification_url: "https://121e-190-12-11-34.ngrok-free.app/create/webhook",
        })

        const url = payment.body.init_point
        return url
    }

};

const receiveWebhook = async (payment) => {
    console.log(payment);
    if (payment.type === "payment") {
        const data = await mercadopago.payment.findById(payment["data.id"] )
        
        return data
    }
}

module.exports = { 
    mercado_pago,
    receiveWebhook,
};
