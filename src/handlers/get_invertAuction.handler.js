const { get_invert_auction } = require('../controllers/get_invertAuction_controller');
const { responseObj } = require('./response');

async function get_invertAuction_handler(req, res) {
    try {

        const response = await get_invert_auction();
        if (!response) throw new Error()
        res.status(200).json(responseObj("Data acquire successfully", response));

    } catch (error) {
        if (error.message === 'Missing data') {
            return res.status(400).json(responseObj(error.message));
        }
        res.status(500).json(responseObj(error.message));
    }
}

module.exports = {
    get_invertAuction_handler,
}