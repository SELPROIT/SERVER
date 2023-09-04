const { User } = require("../../db.js");

const post_favorites = async (auction_id, isFavorite, user_id) => {
  const user = await User.findOne({
    where: { id: user_id },
  });

  if (!user) {
    throw new Error("No se encontró ningún usuario con ese id.");
  }

  let { favorites } = user;

  if (!isFavorite) {
    favorites = favorites.filter((favorite) => favorite !== auction_id);
  }
  if (!favorites.includes(auction_id)) {
    const newFavorites = [...favorites, auction_id];
    const update = {
      favorites: newFavorites
    };
    await User.update(update, { where: { id: user_id } });

    return user;
  }
};

module.exports = {
  post_favorites,
};
