const { Auction } = require('../db')

const put_auc_controller = async (
  id,
  base_price,
  close_date,
) => {
  console.log('id', id)
  const auction = await Auction.findOne({ where: { id: id } })
  if (!auction) 'Auction not found'

  const changed_auction = {}
  if (base_price) {
    changed_auction.base_price = base_price
  }
  if (close_date) {
    changed_auction.close_date = close_date
  }

  const [updatedRows] = await Auction.update(changed_auction, {
    where: {
      id: id
    }
  });

  if (updatedRows > 0) {
    await auction.reload()
    return auction;
  }
  return 'Unable to update auction'

}

module.exports = {
  put_auc_controller,
}