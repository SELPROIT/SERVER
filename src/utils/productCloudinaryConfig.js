const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const upload = multer().single('image');
const config = require('../configCloud');
//IMPORTANTE : esta function solo lleva la imagen a la carpeta PRODUCTS de cloudinary!!
//se utiliza SOLO para funcion POST PRODUCT
const productCloudinaryConfig = async (imageURL) => {
    // se le envia por parametro la imagen (value) de la prop del objeto x ej: newUser.RUT_image (
    //recuerde q newUser es la constante creada en el handler para mandar las props dentro de una palabra, asi el controller post solo recibe está y no todas las props q son muchas)
    cloudinary.config({
        cloud_name: config.cloud_name,
        api_key: config.api_key,
        api_secret: config.api_secret,
    });

    try {
        const result = await cloudinary.uploader.upload(imageURL, {
            folder: 'selpro/Products',
        });
        return result.secure_url;
    } catch (error) {
        throw error;
    }
};
module.exports = productCloudinaryConfig;