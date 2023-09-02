const { put_auc_controller } = require("../../controllers/put/put_auction_controller.js");

const put_auc_handler = async (req, res) => {
  const { id } = req.params;
  const { status,
    close_date,
    base_price,
    authorize,
    deleteFlag } = req.body;

  try {
    const auction = await put_auc_controller(status,
      close_date,
      base_price,
      authorize,
      deleteFlag);
      
    if (!auction) {
      return  res.status(400).json({ error: 'Auction not found' });
    }
    return res.json({ message: 'Auction changed successfully', auction });
  } catch (error) {
    return res.json({ error: `Error changing auction: ${error.message}` });
  }
};

module.exports = {
  put_auc_handler
};
