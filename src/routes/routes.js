
const { Router } = require("express");
const { toRegister } = require('../handlers/authHandler');
const { toCategory } = require('../handlers/catHandler');
const routerUser = require('./UserRouterPost');
const router = Router();


router.get("/categories", toCategory);

router.post("/register", toRegister);
router.use('/user', routerUser);


module.exports = router;
