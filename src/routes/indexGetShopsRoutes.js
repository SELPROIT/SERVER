const { Router } = require("express");
const shopsRouter = require("./getShopRoutes");

const router = Router();

router.use("/shops", shopsRouter);

module.exports = router;