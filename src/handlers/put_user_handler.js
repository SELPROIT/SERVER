const { put_user_controller } = require("../controllers/put_user_controller");
const { responseObj } = require("./response");


const put_user_handler = async (req, res) => {
  const { id } = req.params
  const { name, image, user_name, password, supplier, phone, email, id_subcat, adress, interaction_history, buy_history, offers_history, win_history, curr_auc, deleteFlag, } = req.body;
  try {
    const user = await put_user_controller(id, name, image, user_name, password, supplier, phone, email, id_subcat, adress, interaction_history, buy_history, offers_history, win_history, curr_auc, deleteFlag,)
    if (!user) res.json(responseObj({ error: error.message }, {}))
    return res.status(200).json(responseObj('User changed successfully', user))
  } catch (error) {
    res.json(responseObj({ error: error.message }, {}))
  }
}

module.exports = {
  put_user_handler
}