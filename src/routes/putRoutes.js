const { put_prod_handler } = require('../handlers/put_prod_handler')


const putRoutes = require('express').Router()

putRoutes.put('/product/:id', put_prod_handler)

module.exports = putRoutes