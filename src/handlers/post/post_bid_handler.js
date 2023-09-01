const { createAuctionBid } = require("../../controllers/post/post_bid_controller.js");

async function postAuction(req, res) {
    const { auction_id, proposed_price, proposed_amount, invert, user_id } = req.body;

    const newBid = await createAuctionBid(auction_id, proposed_price, proposed_amount, invert, user_id);

    if (!newBid) {
        res.status(404).json({ message: 'No se ha encontrado una subasta para esa puja.' });
    } else {
        res.status(200).json({ message: 'Se ha pujado correctamente.', newBid });
    }
}

module.exports = {
    postAuction
};
