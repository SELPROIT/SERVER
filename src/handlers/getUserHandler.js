const {getUsers} = require("../controllers/getUserController");
const {responseObj} = require("./response")

const getAllUsers = async (req, res) => {

    try {
        const users = await getUsers(); 
        
        if (users.length === 0) {
            res.status(404).json(responseObj('No se encontraron usuarios.'));
        } else {
            res.status(200).json(responseObj('Estos son los usuarios creados', users)); 
        }
    } catch (error) {
        res.status(400).json(responseObj(error.message));
    }
};

module.exports = {
    getAllUsers
};