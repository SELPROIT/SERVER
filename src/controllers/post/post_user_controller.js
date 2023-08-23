const { User } = require('../../db');
const bcrypt = require('bcrypt');
// const { userCloudinaryConfig } = require('../../utils/userCloudinaryConfig');

const postUser = async (newUser) => {
	const {
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
		// files = [],
		// RUT_image,
		// commerce_chamber,
		// legal_ident,
		// commercial_references,
	} = newUser;

	// user_name = user_name.trim().toLowerCase(); //para que se guarde en minusculas siempre

	const hashedPassword = await bcrypt.hash(password, 10);

	// const fileObjects = [...files];

	// if (RUT_image)
	// 	fileObjects.push({ name: 'RUT_image', value: RUT_image });
	// if (commerce_chamber)
	// 	fileObjects.push({ name: 'commerce_chamber', value: commerce_chamber });
	// if (legal_ident)
	// 	fileObjects.push({ name: 'legal_ident', value: legal_ident });
	// if (commercial_references)
	// 	fileObjects.push({ name: 'commercial_references', value: commercial_references });

	// const imagesURL = await Promise.all(
	// 	fileObjects.map(async (file) => {
	// 		const URL = await userCloudinaryConfig(file.value)
	// 		const image = {
	// 			name: file.name,
	// 			URL: URL
	// 		}
	// 		return image
	// 	})
	// )

	// 	let image = imagesURL.filter((image) => image.name === "image")[0]?.URL || "";
	// 	let RUT_image_url = imagesURL.filter((image) => image.name === "RUT_image")[0]?.URL || "";
	// 	let commerce_chamber_url = imagesURL.filter((image) => image.name === "commerce_chamber")[0]?.URL || "";
	// 	let legal_ident_url = imagesURL.filter((image) => image.name === "legal_ident")[0]?.URL || "";
	// 	let commercial_references_url = imagesURL.filter((image) => image.name === "commercial_references")[0]?.URL || "";
	// console.log('first', newUser)
	if(!name, !num_ident, !user_name, !password, !company_name, !NIT, !sector, !CIIU, !phone, !email, !id_subcat, !adress) {
		throw new Error ('Missing data');
	};
	const user = await User.create({
		name,
		num_ident,
		user_name,
		password: hashedPassword,
		phone,
		email,
		adress,
		company_name,
		NIT,
		sector,
		CIIU,
		id_subcat,
		image: 'https://res.cloudinary.com/dig5mhr7d/image/upload/v1692815971/selpro/user-documents/guest_kcab3k.png',
		RUT_image: null,
		commerce_chamber: null,
		legal_ident: null,
		commercial_references: null,
		interaction_history: [],
		offers_history: [],
		win_history: [],
		curr_auc: [],
		favorites: [],
		supplier: false,
		deleteFlag: false,
	});
	return user;
};

module.exports = {
	postUser
};

