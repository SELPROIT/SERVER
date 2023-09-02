const { User_admin } = require('../../db.js');

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
      throw new Error('Se produjo un error creando el usuario de administrador.');
    }
  } else {
    throw new Error('Usted no tiene acceso para crear un usuario de administrador.');
  }
};

module.exports = postUserAdmin;
