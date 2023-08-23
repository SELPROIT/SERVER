const {getAuctionBid} = require("../../controllers/get/getAuctionBidController");

const getAllAuctionBids = async (req, res) => {

    try {
        const bids = await getAuctionBid(); 
        if(!bids) res.status(400).json({ message: error.message });

        if (bids.length === 0) {
            res.status(404).json(('No se encontró ninguna puja para este producto.'));
        } else {
            res.status(200).json(('Estas son las pujas de este producto.', bids)); 
        }
    } catch (error) {
        res.status(400).json((error.message));
    }
};

module.exports = {
    getAllAuctionBids
};