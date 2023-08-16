const {getUsers} = require("../controllers/getUserController");
const {responseObj} = require("./response")

const getAllUsers = async (req, res) => {

    try {
        const users = await getUsers(); 
        res.status(200).json(responseObj('Estos son los usuarios creados', users)); 
    } catch (error) {
        res.status(400).json(responseObj('Error al obtener usuarios'));
    }
};

module.exports = {
    getAllUsers
};