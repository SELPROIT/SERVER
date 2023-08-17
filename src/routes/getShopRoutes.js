const { Router } = require('express');
const { getAllShops } = require('../handlers/getShopHandler')

const shopsRouter = Router();

shopsRouter.get('/', getAllShops);

module.exports = shopsRouter;