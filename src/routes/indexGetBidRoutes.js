const { Router } = require("express");
const bidsRouter = require("./getAuctionBidsRoutes");

const router = Router();

router.use("/bids", bidsRouter);

module.exports = router;