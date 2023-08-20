const { User } = require('../db');
const bcrypt = require('bcrypt');
const { userCloudinaryConfig } = require('../utils/userCloudinaryConfig');

const postUser = async (newUser) => {
  const {
    name,
    num_ident,
    user_name,
    password,
    company_name,
    RUT,
    sector,
    CIIU,
    phone,
    email,
    id_subcat,
    adress,
    RUT_image,
    commerce_chamber,
    legal_ident,
    commercial_references,
  } = newUser;

  const hashedPassword = await bcrypt.hash(password, 10);

  if (RUT) {
    const user = await User.create({
      name,
      num_ident,
      user_name,
      password: hashedPassword,
      company_name,
      supplier: false,
      RUT,
      sector,
      CIIU,
      phone,
      email,
      id_subcat,
      adress,
      interaction_history: [],
      offers_history: [],
      win_history: [],
      curr_auc: [],
      favorites: [],
      deleteFlag: false,
    });
    return user;
  }

  const RUTImage = await userCloudinaryConfig(null, RUT_image);
  const commerceChamber = await userCloudinaryConfig(null, commerce_chamber);
  const legalIdent = await userCloudinaryConfig(null, legal_ident);
  const commercialReferences = await userCloudinaryConfig(null, commercial_references);

  const provedor = await User.create({
    name,
    num_ident,
    user_name,
    password: hashedPassword,
    company_name,
    supplier: true,
    RUT_image: RUTImage,
    commerce_chamber: commerceChamber,
    legal_ident: legalIdent,
    commercial_references: commercialReferences,
    sector,
    CIIU,
    phone,
    email,
    id_subcat,
    adress,
    interaction_history: [],
    offers_history: [],
    win_history: [],
    curr_auc: [],
    favorites: [],
    deleteFlag: false,
  });

  return provedor;
};

module.exports = postUser;
