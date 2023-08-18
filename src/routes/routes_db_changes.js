const { Router } = require("express");

const router = Router();
const { post_category_handler } = require("../handlers/post_category_handler");
const { post_subCategoty_handler } = require("../handlers/post_subCategory_handler");

// router.use("/login", );
// router.use("/", );
router.post("/category", post_category_handler)
router.post("/subCategory", post_subCategoty_handler)

module.exports = router;
