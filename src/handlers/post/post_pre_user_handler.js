const { postPreUser } = require('../../controllers/post/post_preUser_controller');
const { register } = require('../../controllers/get/auth_email_controller');

const toPostPreUser = async (req, res) => {
  try {
    const {email} = req.body;

    if(!email) throw new Error ("Missing data");

    const registrationResult = await register(email);

    if (registrationResult) {
      return res.status(400).json(('The username is alredy in using'));
    }

    const newPreUser = await postPreUser({
      email,
    });
    console.log('newPreUser', newPreUser)

    res.status(200).json(('User created successfully', newPreUser));
  } catch (error) {
    res.status(400).json((`Error creating preUser: ${error.message}`));
  }
};

module.exports = { toPostPreUser };
