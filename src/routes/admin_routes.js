const { delete_auctionBid_handler } = require('../handlers/delete/delete_auctionBid_handler');
const { delete_auction_handler } = require('../handlers/delete/delete_auction_handler');
const { delete_category_handler } = require('../handlers/delete/delete_category_handler');
const { delete_invertAuction_handler } = require('../handlers/delete/delete_invertAuction.handler');
const { delete_product_handler } = require('../handlers/delete/delete_product_handler');
const { delete_subCategory_handler } = require('../handlers/delete/delete_subCategory_handler');
const { delete_userAdmin_handler } = require('../handlers/delete/delete_userAdmin_handler');
const { delete_user_handler } = require('../handlers/delete/delete_user_handler');


const adminRoutes = require('express').Router()

adminRoutes.delete('/delete/auction', delete_auction_handler);
adminRoutes.delete('/delete/invertAuction', delete_invertAuction_handler);
adminRoutes.delete('/delete/product', delete_product_handler);
adminRoutes.delete('/delete/user', delete_user_handler);
adminRoutes.delete('/delete/bid', delete_auctionBid_handler);
adminRoutes.delete('/delete/admin', delete_userAdmin_handler);
adminRoutes.delete('/delete/category', delete_category_handler);
adminRoutes.delete('/delete/subcategory', delete_subCategory_handler);

module.exports= adminRoutes