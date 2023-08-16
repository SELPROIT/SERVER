const getProdHandler = require('../handlers/getAllProdH');

const prodRoute = require('express').Router();

prodRoute.get('/', getProdHandler)

module.exports = prodRoute