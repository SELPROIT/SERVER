const { User } = require('../db');
const bcrypt = require('bcrypt');
const { userCloudinaryConfig } = require('../utils/userCloudinaryConfig');

const postUser = async (newUser) => {
  // const image = await userCloudinaryConfig('', newUser.image ? newUser.image : '');
  const RUT_image = await userCloudinaryConfig(null, newUser.RUT_image);
  const commerce_chamber = await userCloudinaryConfig(null, newUser.commerce_chamber);
  const legal_ident = await userCloudinaryConfig(null, newUser.legal_ident);
  const commercial_references = await userCloudinaryConfig(null, newUser.commercial_references);
  const hashedPassword = await bcrypt.hash(newUser.password, 10);

  console.log('RUT_image', RUT_image)
  console.log('newUser.RUT_image', newUser.RUT_image)
  if (newUser.RUT) {
    const user = await User.create({
      name: newUser.name,
      // image: image,
      num_ident: newUser.num_ident,
      user_name: newUser.user_name,
      password: hashedPassword,
      company_name: newUser.company_name,
      supplier: false,
      RUT: newUser.RUT,
      sector: newUser.sector,
      CIIU: newUser.CIIU,
      phone: newUser.phone,
      email: newUser.email,
      id_subcat: newUser.id_subcat,
      adress: newUser.adress,
      interaction_history: [],
      buy_history: [],
      offers_history: [],
      win_history: [],
      curr_auc: [],
      favorites: [],
      deleteFlag: false,
    });
    return user;
  }
  const provedor = await User.create({
    name: newUser.name,
    // image: image,
    num_ident: newUser.num_ident,
    user_name: newUser.user_name,
    password: hashedPassword,
    company_name: newUser.company_name,
    supplier: true,
    RUT_image: RUT_image, // result.secure_url,
    commerce_chamber: commerce_chamber, //
    legal_ident: legal_ident, //
    commercial_references: commercial_references, //
    sector: newUser.sector,
    CIIU: newUser.CIIU,
    phone: newUser.phone,
    email: newUser.email,
    id_subcat: newUser.id_subcat,
    adress: newUser.adress,
    interaction_history: [],
    buy_history: [],
    offers_history: [],
    win_history: [],
    curr_auc: [],
    favorites: [],
    deleteFlag: false,
  });
  return provedor;
};

module.exports = postUser;
