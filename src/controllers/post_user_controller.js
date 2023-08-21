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
		files,
		RUT_image,
		commerce_chamber,
		legal_ident,
		commercial_references,
	} = newUser;

	const hashedPassword = await bcrypt.hash(password, 10);

	if (!RUT) {
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

	const imagesURL = await Promise.all(
		files.map(async (file) => {
			const URL = await userCloudinaryConfig(file.buffer)
			const image = {
				name: file.fieldname,
				URL: URL
			}
			return image
		})
	)

	//   const RUTImage = await userCloudinaryConfig(null, RUT_image);
	//   const commerceChamber = await userCloudinaryConfig(null, commerce_chamber);
	//   const legalIdent = await userCloudinaryConfig(null, legal_ident);
	//   const commercialReferences = await userCloudinaryConfig(null, commercial_references);

	image = imagesURL.filter((image) => image.name === "image")[0]?.URL || "";
	RUT_image = imagesURL.filter((image) => image.name === "RUT_image")[0]?.URL || "";
	commerce_chamber = imagesURL.filter((image) => image.name === "commerce_chamber")[0]?.URL || "";
	legal_ident = imagesURL.filter((image) => image.name === "legal_ident")[0]?.URL || "";
	commercial_references = imagesURL.filter((image) => image.name === "commercial_references")[0]?.URL || "";

	console.log(image[0].URL);

	const provedor = await User.create({
		name,
		num_ident,
		user_name,
		image,
		password: hashedPassword,
		company_name,
		supplier: true,
		RUT,
		RUT_image,
		commerce_chamber,
		legal_ident,
		commercial_references,
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

module.exports = {
	postUser
};
