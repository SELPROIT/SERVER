const { Product, Sub_category } = require('../db')

const postProductC = async ({
  id,
  name,
  brand,
  image,
  description,
  datasheet,
  rating,
  stock,
  price,
  ref_subCategory,
}) => {
  let product = {
    id,
    name,
    brand,
    image,
    description,
    datasheet,
    rating,
    stock,
    price,
  };

  const foundRef = await Sub_category.findOne({ where: { id: ref_subCategory } });

  if (foundRef.id) {
    const newProd = await Product.create(product);
    await newProd.setSub_category(foundRef);
    console.log('newProd', newProd)
    return newProd;
  } else {
    console.error("Could not find Category");
    return null;
  }
};

module.exports = { postProductC }

