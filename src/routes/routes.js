const { Router } = require("express");
const usersRouter = require("./getUserRoutes");

const router = Router();

// router.use("/login", );
// router.use("/", );

router.use("/users", usersRouter);

module.exports = router;
