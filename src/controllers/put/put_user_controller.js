const { User, Auction, Invert_auction, Auction_bid } = require('../../db');
const bcrypt = require('bcrypt')
const { userCloudinaryConfig } = require('../../utils/userCloudinaryConfig');

const put_user_controller = async (
  id,
  name,
  num_ident,
  user_name,
  password,
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
  files = [],
  interaction_history,
  offers_history,
  win_history,
  curr_auc,
  favorites,
  supplier,
  deleteFlag,

) => {
  const user = await User.findOne({ where: { id } });

  const fileObjects = [...files];

	if (RUT_image)
		fileObjects.push({ name: 'RUT_image', value: RUT_image });
	if (commerce_chamber)
		fileObjects.push({ name: 'commerce_chamber', value: commerce_chamber });
	if (legal_ident)
		fileObjects.push({ name: 'legal_ident', value: legal_ident });
	if (commercial_references)
		fileObjects.push({ name: 'commercial_references', value: commercial_references });

	const imagesURL = await Promise.all(
		fileObjects.map(async (file) => {
			const URL = await userCloudinaryConfig(file.value)
			const image = {
				name: file.name,
				URL: URL
			}
			return image
		})
	)

    let image_url = imagesURL.filter((image) => image.name === "image")[0]?.URL || "";
		let RUT_image_url = imagesURL.filter((image) => image.name === "RUT_image")[0]?.URL || "";
		let commerce_chamber_url = imagesURL.filter((image) => image.name === "commerce_chamber")[0]?.URL || "";
		let legal_ident_url = imagesURL.filter((image) => image.name === "legal_ident")[0]?.URL || "";
		let commercial_references_url = imagesURL.filter((image) => image.name === "commercial_references")[0]?.URL || "";

  if (!user) {
    throw new Error('User not found');
  }

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
  if (!!password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    changedUser.password = hashedPassword;
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
    changedUser.image = image_url;
  }
  if (!!RUT_image) {
    changedUser.RUT_image = RUT_image_url;
  }
  if (!!commerce_chamber) {
    changedUser.commerce_chamber = commerce_chamber_url;
  }
  if (!!legal_ident) {
    changedUser.legal_ident = legal_ident_url;
  }
  if (!!commercial_references) {
    changedUser.commercial_references = commercial_references_url;
  }
  // console.log('interaction_history', interaction_history)
  // if (!!interaction_history) {
  //   let auc_id = await Auction.findOne({where: {id: interaction_history}})
  //   if(!auc_id) {
  //     auc_id = await Invert_auction.findByPk(interaction_history)
  //   }
  //   if(auc_id) {
  //     changedUser.interaction_history = [...user.interaction_history, interaction_history];
  //   }
  // }
  // if (!!offers_history) {
  //   let bid_id = await Auction_bid.findByPk(offers_history)
  //   changedUser.offers_history = [...user.offers_history, bid_id];
  // }
  // if (!!win_history) {
  //   let auc_id = await Auction.findByPk(interaction_history)
  //   if(!auc_id) {
  //     auc_id = await Invert_auction.findByPk(interaction_history)
  //   }
  //   changedUser.win_history = [...user.win_history, auc_id];
  // }
  // if (!!curr_auc) {
  //   let auc_id = await Auction.findByPk(interaction_history)
  //   if(!auc_id) {
  //     auc_id = await Invert_auction.findByPk(interaction_history)
  //   }
  //   changedUser.curr_auc = [...user.curr_auc, auc_id];
  // }
  // if (!!favorites) {
  //   let auc_id = await Auction.findByPk(interaction_history)
  //   if(!auc_id) {
  //     auc_id = await Invert_auction.findByPk(interaction_history)
  //   }
  //   changedUser.favorites = [...user.favorites, auc_id];
  // }
  if (supplier !== undefined || supplier !== null) {
    changedUser.supplier = supplier;
  }
  if (deleteFlag !== undefined || deleteFlag !== null) {
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
