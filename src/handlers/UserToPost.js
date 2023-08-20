const postUser = require('../controllers/PostUser');
const { register } = require('../controllers/authController'); // Importa la funciÃ³n register
const { responseObj } = require('../handlers/response');

const toPostUser = async (req, res) => {
  try {
    const {
      name,
      // image,
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
      adress
    } = req.body;

    const result = await register(user_name, password);
    console.log('result', result)
    if (!result) {
      const newUser = await postUser({
        name,
        // image,
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
        adress
      });
      console.log('newUser', newUser)

      res.status(200).json(responseObj('User created successfully', newUser));
    }
  } catch (error) {
    res.status(400).json(responseObj({ error: error.message }, {}));
  }
};

module.exports = { toPostUser };
