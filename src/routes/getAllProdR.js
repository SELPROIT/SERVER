const express = require('express');
const router = express.Router();
const { getProdHandler } = require('../handlers/getAllProdH');

router.get('/prod', getProdHandler);

module.exports = router;
