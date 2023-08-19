const { put_auc_controller } = require("../controllers/put_auction_controller");
const { responseObj } = require("./response");


const put_auc_handler = async (req, res) => {
  const { id } = req.params
  const { base_price, close_date } = req.body;
  try {
    const auction = await put_auc_controller(id, base_price, close_date)
    if (!auction) res.json(responseObj({ error: error.message }, {}))
    return res.status(200).json(responseObj('Auction changed successfully', auction))
  } catch (error) {
    res.json(responseObj({ error: error.message }, {}))
  }
}

module.exports = {
  put_auc_handler
}