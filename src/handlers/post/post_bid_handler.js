const { createAuctionBid } = require("../../controllers/post/post_bid_controller");
const express = require("express");
const server = express();
server.use(express.json());

const postAuction = async (req, res) => {
    try {
        const {auction_id, proposed_price, total, invert } = req.body; // el invert es un booleano que me va a decir si la tabla es inversa o no. Este booleano está en el modelo de Invert auction, y siempre que sea true es que es una subasta inversa
        const newBid = await createAuctionBid(auction_id, proposed_price, total, invert); 
        
        if (!newBid) {
            res.status(404).json(('No se ha encontrado una subasta para esa puja.'));
        } else {
            res.send(('Se ha pujado correctamente.')); 
        }
    } catch (error) {
        res.status(400).json((error.message));
    }
}

module.exports = {
    postAuction
}