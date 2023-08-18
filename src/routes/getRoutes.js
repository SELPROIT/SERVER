const { toCategory } = require('../handlers/catHandler');
const { toSubCategory } = require('../handlers/subCatHandler');
const { getProdHandler } = require('../handlers/getAllProdH');
const { getAllUsers } = require('../handlers/getUserHandler');
const { getAllAuctionBids } = require('../handlers/getAuctionBidHandler');
const {getUserAdmin} = require('../handlers/getUserAdm');
const { get_auction_handler } = require("../handlers/get_auction_handler");
const { get_invertAuction_handler } = require("../handlers/get_invertAuction.handler");


const getRoutes = require('express').Router()

getRoutes.get('/cat', toCategory);
getRoutes.get('/subcat', toSubCategory);
getRoutes.get('/prod', getProdHandler);
getRoutes.get('/users', getAllUsers);
getRoutes.get('/bid', getAllAuctionBids);
getRoutes.get('/admins', getUserAdmin);
getRoutes.get("/auction", get_auction_handler)
getRoutes.get("/invertAuction", get_invertAuction_handler)

module.exports = getRoutes