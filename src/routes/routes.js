const { Router } = require('express');
const getRoutes = require('./delete_routes');
const postRoutes = require('./put_routes');
const deleteRoutes = require('./delete_routes');
const putRoutes = require('./put_routes');



const router = Router();

router.use('/', getRoutes)
router.use('/create', postRoutes)
router.use('/delete', deleteRoutes)
router.use('/change', putRoutes)


module.exports = router;
