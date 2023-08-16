const { Router } = require("express");
const { toRegister } = require('../handlers/authHandler');
const { toCategory } = require('../handlers/catHandler');

const router = Router();


router.get("/categories", toCategory);

router.post("/register", toRegister);
// router.use("/login", );
// router.use("/", );

module.exports = router;
