const { User } = require('../../db');
const bcrypt = require('bcrypt');

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
	} = newUser;

	const hashedPassword = await bcrypt.hash(password, 10);



	if(!name, !num_ident, !user_name, !password, !company_name, !NIT, !sector, !CIIU, !phone, !email, !id_subcat, !adress) {
		throw new Error ('Missing data');
	};
	let user_id = Math.floor(100000 + Math.random() * 900000);

	const user_id_exists = async (user_id)=> {
		user_id = Math.floor(100000 + Math.random() * 900000);
		let exists = await User.findByPk(user_id)
		if (exists){
			user_id = Math.floor(100000 + Math.random() * 900000);
			return user_id_exists(user_id)
		}
	}

	const user = await User.create({
		user_id,
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