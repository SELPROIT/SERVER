const { Router } = require("express");

const router = Router();
const { post_auction_handler } = require("../handlers/post_auction_handler");
const { post_invert_auction_handler } = require("../handlers/post_invertAuction_handler");
const { get_auction_handler } = require("../handlers/get_auction_handler");
const { get_invertAuction_handler } = require("../handlers/get_invertAuction.handler");



router.post("/auction", post_auction_handler)
router.post("/invertAuction", post_invert_auction_handler)

router.get("/auction", get_auction_handler)
router.get("/invertAuction", get_invertAuction_handler)

module.exports = router;
