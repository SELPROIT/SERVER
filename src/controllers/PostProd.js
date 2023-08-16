const { Product, Sub_category } = require('../db')

const postProductC = async ({
  id,
  ref_category,
  brand,
  description,
  image,
  rating,
  stock,
  price,
}) => {
  let product = {
    id,
    brand,
    description,
    image,
    rating,
    stock,
    price,
  };

  const foundRef = await Sub_category.findOne({ where: { id: ref_category } });

  if (foundRef.length > 0) {
    const newProd = await Product.create(product);
    await newProd.setSub_category(foundRef);

    const createdProd = {
      id: newProd.id,
      ref_category: foundRef,
      brand: newProd.brand,
      description: newProd.description,
      image: newProd.image,
      rating: newProd.rating,
      stock: newProd.stock,
      price: newProd.price,
    };

    return createdProd;
  } else {
    console.error("Could not find Category");
    return null;
  }
};

module.exports = { postProductC }

