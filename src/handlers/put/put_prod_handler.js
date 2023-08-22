const { put_prod_controller } = require("../controllers/put_prod_controller");
const { responseObj } = require("./response");


const put_prod_handler= async (req, res) => {
  const { id } = req.params
  const { name, brand, image, description, datasheet, rating, stock, price } = req.body;
  try {
    const product = await put_prod_controller(id, name, brand, image, description, datasheet, rating, stock, price)
    if(!product) res.json(responseObj({ error: error.message }, {}))
    return res.status(200).json(responseObj('Product changed successfully', product))
  } catch (error) {
    res.json(responseObj({ error: error.message }, {}))
  }
}

module.exports = {
  put_prod_handler
}