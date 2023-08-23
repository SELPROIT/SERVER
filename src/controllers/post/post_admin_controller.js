const { User_admin } = require('../../db');

const postUserAdmin = async (newUserAdmin) => {
  const { role, password, name, phone } = newUserAdmin;
  const accessCondition = role === 'CEO' || role === 'Junior Developer' && password === 'selpro123*';

  if (accessCondition) {
    try {
      const userAdmin = await User_admin.create({
        name,
        role,
        password,
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
