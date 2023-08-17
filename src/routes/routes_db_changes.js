const { Router } = require("express");

const router = Router();
const { post_category_handler } = require("../handlers/post_category_handler");
const { post_subCategoty_handler } = require("../handlers/post_subCategory_handler");
const { post_auction_handler } = require("../handlers/post_auction_handler");
const { post_invert_auction_handler } = require("../handlers/post_invertAuction_handler");

// router.use("/login", );
// router.use("/", );
router.post("/category", post_category_handler)
router.post("/subCategory", post_subCategoty_handler)
router.post("/auction", post_auction_handler)
router.post("/invertAuction", post_invert_auction_handler)

module.exports = router;
