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

  switch (true) {
    case !!name:
      changed_product.name = name;
      break;
    case !!brand:
      changed_product.brand = brand;
      break;
    case !!image:
      changed_product.image = image;
      break;
    case !!description:
      changed_product.description = description;
      break;
    case !!datasheet:
      changed_product.datasheet = datasheet;
      break;
    case !!rating:
      changed_product.rating = rating;
      break;
    case !!stock:
      changed_product.stock = stock;
      break;
    case !!price:
      changed_product.price = price;
      break;
    default:
      break;
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
