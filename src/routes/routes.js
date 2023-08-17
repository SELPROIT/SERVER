const { Router } = require('express');
const prodRoute = require('./getAllProdR');
const { toRegister } = require('../handlers/authHandler');
const { toCategory } = require('../handlers/catHandler');
const routerUser = require('./UserRouterPost');
const createProdRoute = require("./postProdR");

const router = Router();

router.use('/home', prodRoute);
router.get('/categories', toCategory);
router.post('/register', toRegister);
router.use('/user', routerUser);
router.use('/home/create', createProdRoute)

module.exports = router;
