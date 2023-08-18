const { post_category_handler } = require("../handlers/post_category_handler");
const { post_subCategoty_handler } = require("../handlers/post_subCategory_handler");
const { createdProd } = require('../handlers/postProdH');
const { toPostUser } = require('../handlers/UserToPost');
const {createUserAdmin} = require('../handlers/userAdminToPost')


const postRoutes = require('express').Router()

postRoutes.post("/category", post_category_handler);
postRoutes.post("/subCategory", post_subCategoty_handler);
postRoutes.post('/prod', createdProd);
postRoutes.post('/admin', createUserAdmin) // no va al front
postRoutes.post('/user', toPostUser);

module.exports = postRoutes