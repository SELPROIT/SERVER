const { User } = require('../db')

const put_user_controller = async (
  id,
  name,
  image,
  user_name,
  password,
  supplier,
  phone,
  email,
  id_subcat,
  adress,
  interaction_history,
  buy_history,
  offers_history,
  win_history,
  curr_auc,
  favorites,
  deleteFlag,
) => {
  console.log('id', id)
  const user = await User.findOne({ where: { id: id } })
  if (!user) 'User not found'

  const changed_user = {}
  if (name) {
    changed_user.name = name
  }
  if (image) {
    changed_user.image = image
  }
  if (user_name) {
    changed_user.user_name = user_name
  }
  if (password) {
    changed_user.password = password
  }
  if (supplier) {
    changed_user.supplier = supplier
  }
  if (phone) {
    changed_user.phone = phone
  }
  if (email) {
    changed_user.email = email
  }
  if (id_subcat) {
    changed_user.id_subcat = id_subcat
  }
  if (adress) {
    changed_user.adress = adress
  }
  if (interaction_history) {
    changed_user.interaction_history.push(interaction_history)
  }
  if (buy_history) {
    changed_user.buy_history.push(buy_history)
  }
  if (offers_history) {
    changed_user.offers_history.push(offers_history)
  }
  if (win_history) {
    changed_user.win_history = win_history
  }
  if (curr_auc) {
    changed_user.curr_auc.push(curr_auc)
  }
  if (favorites) {
    changed_user.favorites.push(favorites)
  }
  if (deleteFlag) {
    changed_user.deleteFlag = deleteFlag
  }

  const [updatedRows] = await User.update(changed_inv_auction, {
    where: {
      id: id
    }
  });

  if (updatedRows > 0) {
    await user.reload()
    return user;
  }
  return 'Unable to update user'

}

module.exports = {
  put_user_controller,
}