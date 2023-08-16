const { Router } = require("express");
const { toRegister } = require('../handlers/authHandler');

const router = Router();

router.post("/register", toRegister);
// router.use("/login", );
// router.use("/", );

module.exports = router;
