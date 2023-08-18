const express = require('express');
const router = express.Router();
const { toCategory } = require('../handlers/subCatHandler');

router.get('/subCategories', toCategory);

module.exports = router;
