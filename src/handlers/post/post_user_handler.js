const { postUser } = require('../../controllers/post/post_user_controller');
const { register } = require('../../controllers/get/auth_controller');

const toPostUser = async (req, res) => {
  try {
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
    } = req.body;

    // const files = req.files
    console.log('req.body', req.body)

    const registrationResult = await register(user_name, password);

    if (registrationResult) {
      return res.status(400).json(('User registration failed'));
    }

    const newUser = await postUser({
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
    });

    res.status(200).json(('User created successfully', newUser));
  } catch (error) {
    res.status(400).json((`Error creating user: ${error.message}`));
  }
};

module.exports = { toPostUser };
