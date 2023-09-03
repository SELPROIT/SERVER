const { User, Auction, Invert_auction, Auction_bid } = require('../../db.js');
const bcrypt = require('bcrypt')
const { uploadImage } = require('../../utils/userCloudinaryConfig.js');
const { uploadFile } = require('../../utils/PDFCloudinaryConfig.js');

const put_user_controller = async (
  id, { interaction_history,
    created_history,
    favorites,
    name,
    num_ident,
    user_name,
    phone,
    email,
    adress,
    company_name,
    NIT,
    sector,
    CIIU,
    id_subcat,
    image,
    RUT_image,
    commerce_chamber,
    legal_ident,
    commercial_references,
    supplier, }) => {
  console.log('supplier', supplier)
  const user = await User.findOne({ where: { id } });
  console.log('user.supplier', user.supplier)
  if (!user) {
    throw new Error('User not found');
  }
  console.log('created_history', created_history)
  const changedUser = {};

  if (!!name) {
    changedUser.name = name;
  }
  if (!!num_ident) {
    changedUser.num_ident = num_ident;
  }
  if (!!user_name) {
    changedUser.user_name = user_name;
  }
  if (!!phone) {
    changedUser.phone = phone;
  }
  if (!!email) {
    changedUser.email = email;
  }
  if (!!adress) {
    changedUser.adress = adress;
  }
  if (!!company_name) {
    changedUser.company_name = company_name;
  }
  if (!!NIT) {
    changedUser.NIT = NIT;
  }
  if (!!sector) {
    changedUser.sector = sector;
  }
  if (!!CIIU) {
    changedUser.CIIU = CIIU;
  }
  if (!!id_subcat) {
    changedUser.id_subcat = id_subcat;
  }
  if (!!image) {
    const cloudImage = await uploadImage(image)
    changedUser.image = cloudImage;
  }
  if (!!RUT_image) {
    let cloudDatasheet = await uploadFile(RUT_image)
    changedUser.RUT_image = cloudDatasheet;
  }
  if (!!commerce_chamber) {
    let cloudDatasheet = await uploadFile(commerce_chamber)
    changedUser.commerce_chamber = cloudDatasheet;
  }
  if (!!legal_ident) {
    let cloudDatasheet = await uploadFile(legal_ident)
    changedUser.legal_ident = cloudDatasheet;
  }
  if (!!commercial_references) {
    let cloudDatasheet = await uploadFile(commercial_references)
    changedUser.commercial_references = cloudDatasheet;
  }
  if (!!interaction_history) {
    let bid_id = await Auction_bid.findByPk(interaction_history)
    if (bid_id) {
      changedUser.interaction_history = [...user.interaction_history, bid_id]
    };
  }
  // console.log('created_history', created_history)
  // if (!!created_history) {
  //   let auc_id = await Auction.findByPk(created_history)
  //   if (!auc_id) {
  //     auc_id = await Invert_auction.findByPk(created_history)
  //   }
  //   changedUser.created_history = [...user.created_history, auc_id];
  // }
  if (!!favorites) {
    let auc_id = await Auction.findByPk(favorites_history)
    if (!auc_id) {
      auc_id = await Invert_auction.findByPk(favorites_history)
    }
    changedUser.favorites = [...user.favorites, auc_id];
  }
  if (!!supplier) {
    changedUser.supplier = supplier;
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