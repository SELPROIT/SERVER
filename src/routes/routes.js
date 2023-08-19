const { Router } = require('express');
const getRoutes = require('./getRoutes')
const postRoutes = require('./postRoutes');
const deleteRoutes = require('./deleteRoutes');



const router = Router();

router.use('/', getRoutes)
router.use('/create', postRoutes)
router.use('/delete', deleteRoutes)


module.exports = router;
