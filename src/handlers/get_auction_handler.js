const { auctionByName } = require('../controllers/getAuctionByName');
const { get_auction } = require('../controllers/get_auction_controller');
const { responseObj } = require('./response');

async function get_auction_handler(req, res) {
    const { name } = req.query;

    try {
        if (name) {
            const auction = await auctionByName(name);
            if (!auction) {
                return res.status(404).json(responseObj('No se ha encontrado esa subasta.'));
            }
            return res.status(200).json(responseObj("Data acquire successfully", auction)); 
        }

        const response = await get_auction();
        if (!response.length) {
            return res.status(404).json(responseObj('No se han encontrado subastas.'));
        }
        return res.status(200).json(responseObj("Data acquire successfully", response));
    } catch (error) {
        if (error.message === 'Missing data') {
            return res.status(400).json(responseObj(error.message));
        }
        return res.status(500).json(responseObj(error.message));
    }
}


module.exports = {
    get_auction_handler
}