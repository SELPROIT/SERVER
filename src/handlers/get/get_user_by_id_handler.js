const { userById } = require("../../controllers/get/get_user_by_id.js");


const getUserById = async (req, res) => {
    
    try {
        const {user_id} = req.params;
    
        if(!user_id) return res.status(400).json("Falta data.");

        const user = await userById(user_id);

        if(!user){
            return res.status(404).json({ message: error.message });
        }
        res.status(200).json("Se ha encontrado al usuario:", user);
        
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }

};


module.exports = {
    getUserById
};
