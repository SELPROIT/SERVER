const { Product, Sub_category, Auction, Invert_auction, Auction_bid } = require('../../db.js');
const productCloudinaryConfig = require('../../utils/productCloudinaryConfig.js');

const postProductC = ({
  name,
  brand,
  image,
  description,
  datasheet,
  rating,
  stock,
  ref_subCategory,
  user_id
}) => {
  return new Promise((resolve, reject) => {
    if (!name || !brand || !image || !description || !datasheet || !rating || !stock || !ref_subCategory || !user_id) {
      reject(new Error("Faltan completar campos."));
      return;
    }

    Promise.all([
      productCloudinaryConfig(image),
      productCloudinaryConfig(datasheet),
    ])
    .then(([cloudImage, cloudDatasheet]) => {
      Sub_category.findOne({ where: { id: ref_subCategory } })
        .then(foundRef => {
          if (!foundRef) {
            console.error("Could not find Sub-Category");
            resolve(null);
            return;
          }

          User.findOne({ where: { id: user_id } })
            .then(foundUser => {
              if (!foundUser) {
                console.error("Could not find User");
                resolve(null);
                return;
              }

              Product.count({ where: { SubCategoryId: ref_subCategory } })
                .then(prodCount => {
                  const newID = prodCount + 1;

                  const products = [{
                    id: `${ref_subCategory}${newID}`,
                    name,
                    brand,
                    image: cloudImage,
                    description,
                    datasheet: cloudDatasheet,
                    rating,
                    stock,
                    SubCategoryId: ref_subCategory,
                    UserId: user_id, // Set the user ID
                  }];

                  Product.bulkCreate(products, { returning: true })
                    .then(newProds => {
                      Promise.all(newProds.map(newProd => newProd.setSub_category(foundRef)))
                        .then(() => {
                          resolve(newProds);
                        })
                        .catch(error => {
                          reject(new Error(`Error setting sub-category for products: ${error.message}`));
                        });
                    })
                    .catch(error => {
                      reject(new Error(`Error creating products: ${error.message}`));
                    });
                })
                .catch(error => {
                  reject(new Error(`Error counting products: ${error.message}`));
                });
            })
            .catch(error => {
              reject(new Error(`Error finding user: ${error.message}`));
            });
        })
        .catch(error => {
          reject(new Error(`Error finding sub-category: ${error.message}`));
        });
    })
    .catch(error => {
      reject(new Error(`Error configuring Cloudinary: ${error.message}`));
    });
  });
};


module.exports = { postProductC };
