const { createdProd } = require('../handlers/postProdH')

const createProdRoute = require('express').Router()

createProdRoute.post('/prod', createdProd)

module.exports = createProdRoute