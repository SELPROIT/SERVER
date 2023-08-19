const { toCategory } = require('../handlers/catHandler');
const { toSubCategory } = require('../handlers/subCatHandler');
const { getProdHandler } = require('../handlers/getAllProdH');
const { getAllUsers } = require('../handlers/getUserHandler');
const { getAllAuctionBids } = require('../handlers/getAuctionBidHandler');
const { getUserAdmin } = require('../handlers/getUserAdm');
const { get_all_auctions_handler } = require("../handlers/get_all_auctions_handler");
const { get_invertAuction_handler } = require("../handlers/get_invertAuction.handler");
const { get_auction_handler } = require("../handlers/get_auction_handler");
const { get_AuctionById_handler } = require("../handlers/get_auctionById_handler");
const { get_invertAuctionById_handler } = require("../handlers/get_invertAuctionById_handler");

const getRoutes = require('express').Router()

getRoutes.get('/cat', toCategory);
getRoutes.get('/subcat', toSubCategory);
getRoutes.get('/prod', getProdHandler);
getRoutes.get('/users', getAllUsers);
getRoutes.get('/bid', getAllAuctionBids);
getRoutes.get('/admins', getUserAdmin);
getRoutes.get("/allAuctions", get_all_auctions_handler)
getRoutes.get("/invertAuction", get_invertAuction_handler)
getRoutes.get("/auction", get_auction_handler)
getRoutes.get("/auction/:auction_id", get_AuctionById_handler)
getRoutes.get("/invertAuction/:invertAuction_id", get_invertAuctionById_handler)

module.exports = getRoutes