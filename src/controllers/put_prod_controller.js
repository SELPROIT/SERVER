const { Product } = require('../db')

const put_prod_controller = async (
  id,
  image,
  description,
  datasheet,
  rating,
  stock,
  price,
) => {
  console.log('id', id)
  const product = await Product.findOne({ where: { id: id } })
  if (!product) 'Product not found'

  console.log('product', product)
  const changed_product = {}
  if (image) {
    changed_product.image = image
  }
  if (description) {
    changed_product.description = description
  }
  if (datasheet) {
    changed_product.datasheet = datasheet
  }
  if (rating) {
    changed_product.rating = rating
  }
  if (stock) {
    changed_product.stock = stock
  }
  if (price) {
    changed_product.price = price
  }

  const [updatedRows] = await Product.update(changed_product, {
    where: {
      id: id
    }
  });

  if (updatedRows > 0) {
    await product.reload()
    return product;
  }
  return 'Unable to update product'

}

module.exports = {
  put_prod_controller,
}