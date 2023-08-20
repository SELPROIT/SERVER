const { User } = require('../db');

const put_user_controller = async (
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
  deleteFlag,
) => {
  const user = await User.findOne({ where: { id } });
  if (!user) {
    throw new Error('User not found');
  }

  const changedUser = {};

  if (name) {
    changedUser.name = name;
  }
  if (image) {
    changedUser.image = image;
  }
  if (user_name) {
    changedUser.user_name = user_name;
  }
  if (password) {
    changedUser.password = password;
  }
  if (company_name) {
    changedUser.company_name = company_name;
  }
  if (supplier) {
    changedUser.supplier = supplier;
  }
  if (phone) {
    changedUser.phone = phone;
  }
  if (email) {
    changedUser.email = email;
  }
  if (id_subcat) {
    changedUser.id_subcat = id_subcat;
  }
  if (adress) {
    changedUser.adress = adress;
  }
  if (interaction_history) {
    changedUser.interaction_history = [...user.interaction_history, interaction_history];
  }
  if (offers_history) {
    changedUser.offers_history = [...user.offers_history, offers_history];
  }
  if (win_history) {
    changedUser.win_history = [...user.win_history, win_history];
  }
  if (curr_auc) {
    changedUser.curr_auc = [...user.curr_auc, curr_auc];
  }
  if (deleteFlag) {
    changedUser.deleteFlag = deleteFlag;
  }

  const [updatedRows] = await User.update(changedUser, {
    where: {
      id,
    },
  });

  if (updatedRows > 0) {
    await user.reload();
    return user;
  }

  throw new Error('Unable to update user');
};

module.exports = {
  put_user_controller,
};
