const { Router } = require("express");
const prodRoute = require('./getAllProdR');
const { toRegister } = require('../handlers/authHandler');
const { toCategory } = require('../handlers/catHandler');
const routerUser = require('./UserRouterPost');

const router = Router();

router.use('/home', prodRoute);
router.get("/categories", toCategory);
router.post("/register", toRegister);
router.use('/user', routerUser);

module.exports = router;

