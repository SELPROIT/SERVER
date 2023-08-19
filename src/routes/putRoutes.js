const { put_auc_handler } = require('../handlers/put_auction_handler')
const { put_prod_handler } = require('../handlers/put_prod_handler')


const putRoutes = require('express').Router()

putRoutes.put('/product/:id', put_prod_handler)
putRoutes.put('/auction/:id', put_auc_handler)

module.exports = putRoutes