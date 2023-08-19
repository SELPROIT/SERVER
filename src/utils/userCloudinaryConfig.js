const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const upload = multer().single('image');
const config = require('../configCloud');

//IMPORTANTE : esta function solo lleva la imagen a la carpeta user-documents de cloudinary!!
//se utiliza SOLO para funcions de user y user_admin
const userCloudinaryConfig = async (image, imageURL) => {
  console.log('image', image)
  console.log('imageURL', imageURL)
  // se le envia por parametro la imagen (value) de la prop del objeto x ej: newUser.RUT_image (
  //recuerde q newUser es la constante creada en el handler para mandar las props dentro de una palabra, asi el controller post solo recibe está y no todas las props q son muchas)
  cloudinary.config({
    cloud_name: config.cloud_name,
    api_key: config.api_key,
    api_secret: config.api_secret,
  });

  try {
    let result;
    if (image) {
      result = await cloudinary.uploader.upload(image.path, {
        folder: 'selpro/user-documents',
      });
      return result.secure_url;
    }
    if (imageURL) {
      result = await cloudinary.uploader.upload(imageURL, {
        folder: 'selpro/user-documents',
      });
      console.log('result', result.secure_url);
      return result.secure_url;
    }
    if (!image && !imageURL) {
      throw new Error('The file must be an image or an URL')
    }
  } catch (error) {
    throw error;
  }
};

module.exports = { userCloudinaryConfig };
