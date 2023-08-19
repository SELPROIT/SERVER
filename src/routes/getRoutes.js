const { toCategory } = require('../handlers/catHandler');
const { toSubCategory } = require('../handlers/subCatHandler');
const { getProdHandler } = require('../handlers/getAllProdH');
const { getAllUsers } = require('../handlers/getUserHandler');
const { getAllAuctionBids } = require('../handlers/getAuctionBidHandler');
const {getUserAdmin} = require('../handlers/getUserAdm');
const { get_auction_handler } = require("../handlers/get_auction_handler");
const { get_invertAuction_handler } = require("../handlers/get_invertAuction.handler");
const { get_AuctionById_handler } = require("../handlers/get_auctionById_handler");
const { get_invertAuctionById_handler } = require("../handlers/get_invertAuctionById_handler");
const { getProductByName } = require('../handlers/productByNameHandler');

const getRoutes = require('express').Router()

getRoutes.get('/cat', toCategory);
getRoutes.get('/subCat', toSubCategory);
getRoutes.get('/prod', getProdHandler);
getRoutes.get('/users', getAllUsers);
getRoutes.get('/admins', getUserAdmin);
getRoutes.get('/bids', getAllAuctionBids);
getRoutes.get("/auction", get_auction_handler)
getRoutes.get("/invertAuction", get_invertAuction_handler)
getRoutes.get("/auction/:auction_id", get_AuctionById_handler)
getRoutes.get("/invertAuction/:invertAuction_id", get_invertAuctionById_handler)
getRoutes.get("/prod/name", getProductByName)
module.exports = getRoutes