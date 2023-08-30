const { Auction } = require('../../db.js');

const put_auc_controller = async (
  id,
  base_price,
  close_date,
  authorize,
  deleteFlag
) => {
  const auction = await Auction.findByPk(id);
  if (!auction) {
    throw new Error('Auction not found');
  }

  const changed_auction = {};

  if (base_price !== undefined) {
    changed_auction.base_price = base_price;
  }
  if (close_date !== undefined) {
    const parsedCloseDate = new Date(close_date);
    if (isNaN(parsedCloseDate)) {
      throw new Error('Invalid date format for close_date');
    }
    changed_auction.close_date = parsedCloseDate;
  }
  if (deleteFlag !== undefined) {
    changed_auction.deleteFlag = deleteFlag;
  }
  if (authorize !== undefined) {
    changed_auction.authorize = authorize;
  }

  if (Object.keys(changed_auction).length === 0) {
    throw new Error('No valid fields provided for update');
  }

  const [updatedRows] = await Auction.update(changed_auction, {
    where: { id }
  });

  if (updatedRows > 0) {
    await auction.reload();
    return auction;
  }

  throw new Error('Unable to update auction');
};

module.exports = {
  put_auc_controller,
};
