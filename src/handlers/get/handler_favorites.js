const { favorites } = require("../../controllers/get/favorites.js");
const { validate: validateUUID } = require('uuid');

const handler_favorites = async (req, res) => {
    
    try {
        const {auction_id, isFavorite, user_id, type} = req.query;
        console.log(auction_id, isFavorite, id, type);
    
        if (!validateUUID(auction_id) || !validateUUID(user_id)) throw new Error("ID inválida.");

        if(!user_id || !isFavorite || !auction_id || !type) return res.status(400).json("Falta data.");
    
        const newFavorites = await favorites(auction_id, isFavorite, user_id, type);
        
        if(!newFavorites){
            return res.status(404).json({ message: error.message });
        }

        return res.status(200).json("Los favoritos se han actualizado correctamente.", newFavorites);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }

};

module.exports = {
    handler_favorites
}