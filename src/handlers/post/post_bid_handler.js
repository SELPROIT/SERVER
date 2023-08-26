const { createAuctionBid } = require("../../controllers/post/post_bid_controller");
const express = require("express");
const server = express();
server.use(express.json());

function postAuction(req, res) {
    const { auction_id, proposed_price, total, invert, user_id } = req.body;

    createAuctionBid(auction_id, proposed_price, total, invert, user_id)
        .then(newBid => {
            if (!newBid) {
                res.status(404).json('No se ha encontrado una subasta para esa puja.');
            } else {
                res.send('Se ha pujado correctamente.', newBid);
            }
        })
        .catch(error => {
            res.status(400).json(error.message);
        });
}

module.exports = {
    postAuction
};
