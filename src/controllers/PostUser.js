const { User } = require('../db');
const postUser = async (newUser) => {
	const user = await User.create({
		name: newUser.name,
		num_ident: newUser.num_ident,
		user_name: newUser.user_name,
		password: newUser.password,
		supplier: newUser.supplier,
		RUT: newUser.RUT, //numero de identificacion empresarial
		RUT_image: newUser.RUT_image, //cloudinary imagen de documento legal.
		commerce_chamber: newUser.commerce_chamber,
		legal_ident: newUser.DNI,
		commercial_references: newUser.commercial_references,
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
	});
	return user;
};
module.exports = postUser;
