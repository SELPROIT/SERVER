const { Router } = require('express');
const { getAllUsers } = require('../handlers/getUserHandler')

const usersRouter = Router();

usersRouter.get('/', getAllUsers);

module.exports = usersRouter;