const { put_auc_controller } = require("../../controllers/put/put_auction_controller");

const put_auc_handler = async (req, res) => {
  const { id } = req.params;
  const { base_price, close_date, authorize, deleteFlag } = req.body;

  try {
    const auction = await put_auc_controller(id, base_price, close_date, authorize, deleteFlag);
    if (!auction) {
      return res.json({ error: 'Auction not found' });
    }
    return res.json({ message: 'Auction changed successfully', auction });
  } catch (error) {
    return res.json({ error: `Error changing auction: ${error.message}` });
  }
};

module.exports = {
  put_auc_handler,
};
