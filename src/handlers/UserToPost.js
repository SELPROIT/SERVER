const postUser = require('../controllers/PostUser');
const { register } = require('../controllers/authController'); // Importa la funciÃ³n register
const responseObj = require('../handlers/response');

const toPostUser = async (req, res) => {
	try {
		const {
			name,
			image,
			num_ident,
			user_name,
			password,
			supplier,
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
			interaction_history,
			buy_history,
			offers_history,
			win_history,
			curr_auc,
			favorites,
		} = req.body;

		const result = await register(user_name, password);
		if (!result) {
			const newUser = await postUser({
				name,
				image,
				num_ident,
				user_name,
				password,
				supplier,
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
				interaction_history,
				buy_history,
				offers_history,
				win_history,
				curr_auc,
				favorites,
			});

			res.status(200).json(newUser);
		}
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

module.exports = { toPostUser };
