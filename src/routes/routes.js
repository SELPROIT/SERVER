const { Router } = require("express");

const router = Router();

// router.use("/login", );
// router.use("/", );

router.use("/users", getAllUsers);

module.exports = router;
