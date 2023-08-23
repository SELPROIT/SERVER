const {getUsers} = require("../../controllers/get/getUserController");


const getAllUsers = async (req, res) => {

    try {
        const users = await getUsers(); 
        if(!users) res.status(400).json({ message: error.message });
        
        if (users.length === 0) {
            res.status(404).json(('No se encontraron usuarios.'));
        } else {
            res.status(200).json(('Estos son los usuarios creados', users)); 
        }
    } catch (error) {
        res.status(400).json((error.message));
    }
};

module.exports = {
    getAllUsers
};