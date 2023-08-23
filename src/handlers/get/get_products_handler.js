const { getAllProd } = require('../../controllers/get/get_products_controller')

const getProdHandler = async (req, res) => {
  try {
    const getAll = await getAllProd()
    if(!getAll) res.status(400).json({ message: error.message });
    return res.json(('Successful response', getAll))
  } catch (error) {
    return res.status(400).json(('Error with database response', {}))
  }

}

module.exports = {
  getProdHandler,
}