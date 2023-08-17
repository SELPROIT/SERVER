const express = require('express');
const router = express.Router();
const { toCategory } = require('../handlers/catHandler');

router.get('/categories', toCategory);

module.exports = router;
