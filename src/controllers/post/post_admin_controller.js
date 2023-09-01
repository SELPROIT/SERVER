const { User_admin } = require('../../db.js');

const postUserAdmin = async (newUserAdmin) => {
  const { role, email, name, phone } = newUserAdmin;
  const accessCondition = role === 'CEO' || role === 'Junior Developer';

  if (accessCondition) {
    try {
      const userAdmin = await User_admin.create({
        name,
        email,
        role,
        phone,
      });

      return userAdmin;
    } catch (error) {
      throw new Error('Error creating user admin.');
    }
  } else {
    throw new Error('You do not have access to create an admin user.');
  }
};

module.exports = postUserAdmin;
