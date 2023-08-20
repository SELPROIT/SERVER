const { delete_auction_handler } = require('../handlers/delete_auction_handler');
const { delete_invertAuction_handler } = require('../handlers/delete_invertAuction.handler');
const { delete_product_handler } = require('../handlers/delete_product_handler');
const { delete_user_handler } = require('../handlers/delete_user_handler');
const { delete_auctionBid_handler } = require('../handlers/delete_auctionBid_handler')
const { delete_userAdmin_handler } = require('../handlers/delete_userAdmin_handler')
const { delete_category_handler } = require('../handlers/delete_category_handler')
const { delete_subCategory_handler } = require('../handlers/delete_subCategory_handler')

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