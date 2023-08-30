const { createAuctionBid } = require("../../controllers/post/post_bid_controller.js");
 
function postAuction(req, res) {
    const { auction_id, proposed_price, target_accumulated, invert, user_id } = req.body;

    createAuctionBid(auction_id, proposed_price, target_accumulated, invert, user_id)
        .then(newBid => {
            if (!newBid) {
                res.status(404).json({ message: 'No se ha encontrado una subasta para esa puja.' });
            } else {
                res.status(200).json({ message: 'Se ha pujado correctamente.', newBid });
            }
        })
        .catch(error => {
            res.status(400).json({ message: error.message });
        });
}


module.exports = {
    postAuction
};
