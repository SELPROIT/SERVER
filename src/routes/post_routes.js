const { post_category_handler } = require("../handlers/post/post_category_handler");
const { post_subCategoty_handler } = require("../handlers/post/post_sub_cat_handler");
const { createdProd } = require('../handlers/post/post_product_handler');
const { toPostUser } = require('../handlers/post/post_user_handler');
const { createUserAdmin } = require('../handlers/post/post_admin_handler')
const { postAuction } = require("../handlers/post/post_bid_handler");
const { post_auction_handler } = require("../handlers/post/post_auction_handler");
const { post_invert_auction_handler } = require("../handlers/post/post_inv_auction_handler");
const { emailSend } = require("../handlers/post/email_service_handler");
const { mercado_pago_handler } = require("../handlers/post/mercado_pago_handler");
const { weebhook_handler } = require("../handlers/post/mercado_pago_webhook_handler");




const postRoutes = require('express').Router()

postRoutes.post("/category", post_category_handler);
postRoutes.post("/subcategory", post_subCategoty_handler);
postRoutes.post('/product', createdProd);
postRoutes.post('/admin', createUserAdmin)
postRoutes.post('/user', toPostUser);
postRoutes.post('/bid', postAuction);
postRoutes.post("/auction", post_auction_handler)
postRoutes.post("/invertAuction", post_invert_auction_handler)
postRoutes.post("/email", emailSend)
postRoutes.post("/payment", mercado_pago_handler)
postRoutes.post("/webhook", weebhook_handler)

module.exports = postRoutes