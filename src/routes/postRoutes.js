const { post_category_handler } = require("../handlers/post_category_handler");
const { post_subCategoty_handler } = require("../handlers/post_subCategory_handler");
const { createdProd } = require('../handlers/postProdH');
const { toPostUser } = require('../handlers/UserToPost');
const {createUserAdmin} = require('../handlers/post_userAdmin_handler')
const { postAuction } = require("../handlers/postAuctionBidHandler");
const { post_auction_handler } = require("../handlers/post_auction_handler");
const { post_invert_auction_handler } = require("../handlers/post_invertAuction_handler");




const postRoutes = require('express').Router()

postRoutes.post("/category", post_category_handler);
postRoutes.post("/subCategory", post_subCategoty_handler);
postRoutes.post('/prod', createdProd);
postRoutes.post('/admin', createUserAdmin) // no va al front
postRoutes.post('/user', toPostUser);
postRoutes.post('/bid', postAuction);
postRoutes.post("/auction", post_auction_handler)
postRoutes.post("/invertAuction", post_invert_auction_handler)

module.exports = postRoutes