const cloudinary = require('cloudinary').v2;
const config = require('../configCloud');
const streamifier = require('streamifier');
//IMPORTANTE : esta function solo lleva la imagen a la carpeta PRODUCTS de cloudinary!!
//se utiliza SOLO para funcion POST PRODUCT
cloudinary.config({
    cloud_name: config.cloud_name,
    api_key: config.api_key,
    api_secret: config.api_secret,
});

const uploadProd = async (imageInput) => {
    try {
        let result;

        if (typeof imageInput === 'string') {
            console.log('imageInput', imageInput)
            result = await cloudinary.uploader.upload(imageInput, {
                folder: 'selpro/Products',
                resource_type: 'auto'
            });
            return result.secure_url;
        } else {
            return new Promise((resolve, reject) => {
                const result = cloudinary.uploader.upload_stream(
                    {
                        folder: 'selpro/Products',
                        resource_type: 'auto',
                    },
                    (error, cloudinaryResult) => {
                        if (error) {
                            reject(error);
                        } else {
                            resolve(cloudinaryResult.secure_url);
                        }
                    }
                );
                const bufferStream = streamifier.createReadStream(imageInput);
                bufferStream.pipe(result);
            });
        }
    } catch (error) {
        throw error;
    }
};
module.exports = { uploadProd };