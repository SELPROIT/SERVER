const { User } = require('../../db.js');

const favorites = async (auction_id, isFavorite, user_id, type) => {
    
        // Buscar al usuario por user_id
        const user = await User.findOne({
            where: { id: user_id },
        });

        if (!user) {
            throw new Error("No se encontró ningún usuario con ese id.");
        }

        // Obtener el array de favoritos del usuario
        let userFavorites = user.favorites || [];

        if (isFavorite === true) {
            // Agregar auction_id a los favoritos si isFavorite es true
            userFavorites.push(auction_id);
        } else {
            // Remover auction_id de los favoritos si isFavorite es false
            userFavorites = userFavorites.filter(favorite => favorite !== auction_id);
        }

        // Actualizar la propiedad 'favorites' del usuario
        await user.update({ favorites: userFavorites });

        return user;
   
};

module.exports = {
    favorites
};
