const { User } = require('../db');
const bcrypt = require('bcrypt');
const userCloudinaryConfig = require('../utils/userCloudinaryConfig');

const postUser = async (newUser) => {
	try {
		const RUT_image = await userCloudinaryConfig(newUser.RUT_image);
		const image = await userCloudinaryConfig(newUser.image);
		//mando en const RUT_imagen al newUser.RUT_image, para luego pisar la prop con su propio nombre, es decir no necesito del newUser delante
		const hashedPassword = await bcrypt.hash(newUser.password, 10);
		const user = await User.create({
			name: newUser.name,
			image: image,
			num_ident: newUser.num_ident,
			user_name: newUser.user_name,
			password: hashedPassword,
			supplier: newUser.supplier,
			RUT: newUser.RUT,
			RUT_image: RUT_image, // result.secure_url,
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
		});

		return user;
	} catch (error) {
		throw error;
	}
};

module.exports = postUser;
