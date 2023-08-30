const { delete_auction_handler } = require('../handlers/delete/delete_auction_handler.js');
const { delete_invertAuction_handler } = require('../handlers/delete/delete_invertAuction.handler.js');
const { delete_product_handler } = require('../handlers/delete/delete_product_handler.js');
const { delete_user_handler } = require('../handlers/delete/delete_user_handler.js');
const { delete_auctionBid_handler } = require('../handlers/delete/delete_auctionBid_handler.js')
const { delete_userAdmin_handler } = require('../handlers/delete/delete_userAdmin_handler.js')
const { delete_category_handler } = require('../handlers/delete/delete_category_handler.js')
const { delete_subCategory_handler } = require('../handlers/delete/delete_subCategory_handler.js')

const deleteRoutes = require('express').Router()

deleteRoutes.delete('/auction', delete_auction_handler);
deleteRoutes.delete('/invertAuction', delete_invertAuction_handler);
deleteRoutes.delete('/product', delete_product_handler);
deleteRoutes.delete('/user', delete_user_handler);
deleteRoutes.delete('/bid', delete_auctionBid_handler);
deleteRoutes.delete('/admin', delete_userAdmin_handler);
deleteRoutes.delete('/category', delete_category_handler);
deleteRoutes.delete('/subcategory', delete_subCategory_handler);

module.exports = deleteRoutes