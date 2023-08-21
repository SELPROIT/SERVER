const { toCategory } = require('../handlers/get_category_handler');
const { toSubCategory } = require('../handlers/get_sub_category_handler');
const { getProdHandler } = require('../handlers/get_products_handler');
const { getAllUsers } = require('../handlers/getUserHandler');
const { getAllAuctionBids } = require('../handlers/getAuctionBidHandler');
const { getUserAdmin } = require('../handlers/getUserAdm');
const { getUserByName } = require('../handlers/getToUserByName');
const { get_all_auctions_handler } = require("../handlers/get_all_auctions_handler");
const { get_invertAuction_handler } = require("../handlers/get_invertAuction.handler");
const { get_auction_handler } = require("../handlers/get_auction_handler");
const { get_AuctionById_handler } = require("../handlers/get_auctionById_handler");
const { get_invertAuctionById_handler } = require("../handlers/get_invertAuctionById_handler");

const getRoutes = require('express').Router()

getRoutes.get('/category', toCategory);
getRoutes.get('/subcategory', toSubCategory);
getRoutes.get('/product', getProdHandler);
getRoutes.get('/allUsers', getAllUsers);
getRoutes.get('/user/:name', getUserByName)
getRoutes.get('/bid', getAllAuctionBids);
getRoutes.get('/admins', getUserAdmin);
getRoutes.get("/allAuctions", get_all_auctions_handler)
getRoutes.get("/invertAuction", get_invertAuction_handler)
getRoutes.get("/auction", get_auction_handler)
getRoutes.get("/auction/:auction_id", get_AuctionById_handler)
getRoutes.get("/invertAuction/:invertAuction_id", get_invertAuctionById_handler)

module.exports = getRoutes