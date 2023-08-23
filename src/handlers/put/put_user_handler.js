const { put_user_controller } = require("../../controllers/put/put_user_controller");

const put_user_handler = async (req, res) => {
  const { id } = req.params;
  const {
    name,
    image,
    user_name,
    password,
    company_name,
    supplier,
    phone,
    email,
    id_subcat,
    adress,
    interaction_history,
    offers_history,
    win_history,
    curr_auc,
    deleteFlag,
  } = req.body;

  try {
    const user = await put_user_controller(
      id,
      name,
      image,
      user_name,
      password,
      company_name,
      supplier,
      phone,
      email,
      id_subcat,
      adress,
      interaction_history,
      offers_history,
      win_history,
      curr_auc,
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
