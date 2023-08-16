const { Router } = require("express");
const prodRoute = require('express')

const router = Router();

router.use('/home', prodRoute)

// router.use("/login", );
// router.use("/", );

module.exports = router;
