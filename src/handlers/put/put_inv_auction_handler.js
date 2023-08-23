const { put_inv_auc_controller } = require("../../controllers/put/put_inv_auction_controller");


const put_inv_auc_handler = async (req, res) => {
  const { id } = req.params
  const { base_price, target_quantity, total, close_date, deleteFlag, authorize } = req.body;
  try {
    const inv_auction = await put_inv_auc_controller(id, base_price, target_quantity, total, close_date, deleteFlag, authorize)
    if (!inv_auction) res.json(({ error: error.message }, {}))
    return res.status(200).json(('Inverted auction changed successfully', inv_auction))
  } catch (error) {
    res.json(({ error: error.message }, {}))
  }
}

module.exports = {
  put_inv_auc_handler
}