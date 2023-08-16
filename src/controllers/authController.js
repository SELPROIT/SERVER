const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../db');
const { JWT_SECRET } = process.env;

async function register(user_name, password) {
    const existingUser = await User.findOne({ where: { user_name } });
    if (existingUser) {
        throw new Error('El nombre de usuario ya está en uso');
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ user_name, password: hashedPassword });


    const token = jwt.sign({ userId: newUser.id }, JWT_SECRET, { expiresIn: '1h' });
    return { token, userId: newUser.id, user_name: newUser.user_name };

}

module.exports = { 
    register 
};

