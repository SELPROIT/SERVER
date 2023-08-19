const { Router } = require('express');
const getRoutes = require('./getRoutes')
const postRoutes = require('./postRoutes');
const deleteRoutes = require('./deleteRoutes');
const putRoutes = require('./putRoutes');



const router = Router();

router.use('/', getRoutes)
router.use('/create', postRoutes)
router.use('/delete', deleteRoutes)
router.use('/change', putRoutes)


module.exports = router;
