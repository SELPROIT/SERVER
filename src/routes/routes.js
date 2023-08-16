const { Router } = require('express');
const routerUser = require('./UserRouterPost');

const router = Router();

router.use('/user', routerUser);
// router.use("/", );

module.exports = router;
