const { get_invert_auction } = require('../../controllers/get/get_invert_auction_controller');

function get_invertAuction_handler(req, res) {
    get_invert_auction()
        .then(response => {
            if (!response.length) {
                throw new Error("Subastas invertidas vacías");
            }
            res.status(200).json({ message: "Datos adquiridos exitosamente", response });
        })
        .catch(error => {
            if (error.message === 'Faltan datos') {
                return res.status(400).json({ error: error.message });
            }
            res.status(500).json({ error: error.message });
        });
}

module.exports = {
    get_invertAuction_handler
};
