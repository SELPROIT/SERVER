const { delete_auction_handler } = require('../handlers/delete_auction_handler');
const { delete_invertAuction_handler } = require('../handlers/delete_invertAuction.handler');
const { delete_product_handler } = require('../handlers/delete_product_handler');

const deleteRoutes = require('express').Router()

deleteRoutes.delete('/auction', delete_auction_handler);
deleteRoutes.delete('/invertAuction', delete_invertAuction_handler);
deleteRoutes.delete('/product', delete_product_handler);
deleteRoutes.delete('/user',)
deleteRoutes.delete('/bid',)
deleteRoutes.delete('/admin',)

module.exports = deleteRoutes