const { Product } = require('../db');

const put_prod_controller = async (
  id,
  name,
  brand,
  image,
  description,
  datasheet,
  rating,
  stock,
  price,
) => {
  const product = await Product.findByPk(id);
  if (!product) {
    return 'Product not found';
  }

  const changed_product = {};

  if (!!name) {
    changed_product.name = name;
  }
  if (!!brand) {
    changed_product.brand = brand;
  }
  if (!!image) {
    changed_product.image = image;
  }
  if (!!description) {
    changed_product.description = description;
  }
  if (!!datasheet) {
    changed_product.datasheet = datasheet;
  }
  if (!!rating) {
    changed_product.rating = rating;
  }
  if (!!stock) {
    changed_product.stock = stock;
  }
  if (!!price) {
    changed_product.price = price;
  }

  const [updatedRows] = await Product.update(changed_product, {
    where: {
      id: id,
    },
  });

  if (updatedRows > 0) {
    const updatedProduct = await Product.findByPk(id);
    return updatedProduct;
  }
  return 'Unable to update product';
};

module.exports = {
  put_prod_controller,
};
