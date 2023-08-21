const {postUser} = require('../controllers/post_user_controller');
const { register } = require('../controllers/auth_controller');
const { responseObj } = require('../handlers/response');

const toPostUser = async (req, res) => {
  try {
    const {
      name,
      num_ident,
      user_name,
      password,
      company_name,
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
    } = req.body;

	const files = req.files

    const registrationResult = await register(user_name, password);

    if (registrationResult) {
      return res.status(400).json(responseObj('User registration failed'));
    }

    const newUser = await postUser({
      name,
      num_ident,
      user_name,
      password,
      company_name,
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
	  files
    });

    res.status(200).json(responseObj('User created successfully', newUser));
  } catch (error) {
    res.status(400).json(responseObj(`Error creating user: ${error.message}`));
  }
};

module.exports = { toPostUser };
