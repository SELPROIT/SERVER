const { postAuction } = require("../handlers/postAuctionBidHandler");

const postBidsrouter = require('express').Router();

postBidsrouter.post('/', postAuction);

module.exports = postBidsrouter;