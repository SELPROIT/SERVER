const { put_user_controller } = require("../../controllers/put/put_user_controller");

const put_user_handler = async (req, res) => {
  const { id } = req.params;
  const {
    name,
    num_ident,
    user_name,
    phone,
    email,
    adress,
    company_name,
    NIT,
    sector,
    CIIU,
    id_subcat,
    image,
    RUT_image,
    commerce_chamber,
    legal_ident,
    commercial_references,
    interaction_history,
    offers_history,
    win_history,
    curr_auc,
    favorites,
    supplier,
    deleteFlag,
  } = req.body;

  try {
    const user = await put_user_controller(
      id,
      name,
      num_ident,
      user_name,
      phone,
      email,
      adress,
      company_name,
      NIT,
      sector,
      CIIU,
      id_subcat,
      image,
      RUT_image,
      commerce_chamber,
      legal_ident,
      commercial_references,
      interaction_history,
      offers_history,
      win_history,
      curr_auc,
      favorites,
      supplier,
      deleteFlag
    );

    if (!user) {
      return res.json({ error: "User not found" });
    }

    return res.json({ message: "User changed successfully", user });
  } catch (error) {
    return res.json({ error: `Error changing user: ${error.message}` });
  }
};

module.exports = {
  put_user_handler,
};
