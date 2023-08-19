const { delete_auction_handler } = require('../handlers/delete_auction_handler');
const { delete_invertAuction_handler } = require('../handlers/delete_invertAuction.handler');

const deleteRoutes = require('express').Router()

deleteRoutes.delete('/auction', delete_auction_handler);
deleteRoutes.delete('/invertAuction', delete_invertAuction_handler);


module.exports = deleteRoutes