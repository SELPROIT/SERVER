const { Product, Sub_category } = require('../../db');
const productCloudinaryConfig = require('../../utils/productCloudinaryConfig');

const postProductC = async ({
  name,
  brand,
  image,
  description,
  datasheet,
  rating,
  stock,
  price,
  ref_subCategory
}) => {
  
  if(!name || !brand || !image || !description || !datasheet || !rating || !stock || !price) throw new Error ("Faltan completar campos.");

  //falta esto?

  const [cloudImage, cloudDatasheet] = await Promise.all([
    productCloudinaryConfig(image),
    productCloudinaryConfig(datasheet),
  ]);

  const foundRef = await Sub_category.findOne({ where: { id: ref_subCategory } });

  if (!foundRef) {
    console.error("Could not find Sub-Category");
    return null;
  }

  const prodCount = await Product.count({ where: { SubCategoryId: ref_subCategory } });
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
    price,
    SubCategoryId: ref_subCategory,
  }];

  const newProds = await Product.bulkCreate(products, { returning: true });

  await Promise.all(newProds.map((newProd) => newProd.setSub_category(foundRef)));

  return newProds;
};

module.exports = { postProductC };
