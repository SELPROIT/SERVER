const { Router } = require('express');
const getRoutes = require('./getRoutes')
const postRoutes = require('./postRoutes');



const router = Router();

router.use('/', getRoutes)
router.use('/create', postRoutes)


module.exports = router;
