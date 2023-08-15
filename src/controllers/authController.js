// controllers/authController.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models');
const { JWT_SECRET } = process.env;

async function register(username, password) {
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
        throw new Error('El nombre de usuario ya está en uso');
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ username, password: hashedPassword });
    const token = jwt.sign({ userId: newUser.id }, JWT_SECRET, { expiresIn: '1h' });
    return { token, userId: newUser.id, username: newUser.username };
}

module.exports = {
    register,
};
