const { Router } = require('express');
const { getAllAuctionBids } = require('../handlers/getAuctionBidHandler')

const bidsRouter = Router();

bidsRouter.get('/', getAllAuctionBids);

module.exports = bidsRouter;