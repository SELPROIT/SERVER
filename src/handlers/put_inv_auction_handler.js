const { put_inv_auc_controller } = require("../controllers/put_invert_auction_controller");
const { responseObj } = require("./response");


const put_inv_auc_handler = async (req, res) => {
  const { id } = req.params
  const { base_price, target_quantity, total, close_date } = req.body;
  try {
    const inv_auction = await put_inv_auc_controller(id, base_price, target_quantity, total, close_date)
    if (!inv_auction) res.json(responseObj({ error: error.message }, {}))
    return res.status(200).json(responseObj('Inverted auction changed successfully', inv_auction))
  } catch (error) {
    res.json(responseObj({ error: error.message }, {}))
  }
}

module.exports = {
  put_inv_auc_handler
}