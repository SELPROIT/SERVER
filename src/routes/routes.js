const { Router } = require('express');
const prodRoute = require('./getAllProdR');
const { toRegister } = require('../handlers/authHandler');
const { toCategory } = require('../handlers/catHandler');
const routerUser = require('./UserRouterPost');
const createProdRoute = require("./postProdR");
const { post_category_handler } = require("../handlers/post_category_handler");
const { post_subCategoty_handler } = require("../handlers/post_subCategory_handler");


const router = Router();

router.use('/home', prodRoute);
router.get('/categories', toCategory);
router.post('/register', toRegister);
router.use('/user', routerUser);
router.use('/create', createProdRoute)
router.post("/category", post_category_handler)
router.post("/subCategory", post_subCategoty_handler)


module.exports = router;
