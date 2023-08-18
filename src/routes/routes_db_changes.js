const { Router } = require("express");

const router = Router();
const { post_auction_handler } = require("../handlers/post_auction_handler");
const { post_invert_auction_handler } = require("../handlers/post_invertAuction_handler");
const { get_auction_handler } = require("../handlers/get_auction_handler");
const { get_invertAuction_handler } = require("../handlers/get_invertAuction.handler");
const { get_AuctionById_handler } = require("../handlers/get_auctionById_handler");
const { get_invertAuctionById_handler } = require("../handlers/get_invertAuctionById_handler");



router.post("/auction", post_auction_handler)
router.post("/invertAuction", post_invert_auction_handler)

router.get("/auction", get_auction_handler)
router.get("/invertAuction", get_invertAuction_handler)

router.get("/auction/:auction_id", get_AuctionById_handler)
router.get("invertAuction", get_invertAuctionById_handler)

module.exports = router;
