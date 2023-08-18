const { Router } = require("express");
const usersRouter = require("./getUserRoutes");

const router = Router();

router.use("/users", usersRouter);

module.exports = router;