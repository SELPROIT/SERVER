const toPostUser = require('../handlers/UserToPost');

const routerUser = require('express').Router();
routerUser.post('/', toPostUser);

module.exports = routerUser;
