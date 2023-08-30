const { receiveWebhook } = require('../../controllers/post/mercado_pago_controller.js');

async function weebhook_handler(req, res) {
    try {
        const payment = req.query;
        console.log(payment);
        if (!payment) throw new Error ("Error processing this payment");

        const response = await receiveWebhook(payment);

        if (!response) throw new Error()
        res.status(200).json(("payment completed", response));

    } catch (error) {
        if (error.message === 'Error processing this payment') {
            res.status(400).json((error.message));
        }
        res.status(500).json((error.message));
    }
}

module.exports = {
    weebhook_handler,
}