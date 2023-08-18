const { Router } = require("express");
const postBidsrouter = require("./postAuctionBidRoutes");

const router = Router();

router.use("/bids", postBidsrouter);

module.exports = router;