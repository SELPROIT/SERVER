const {getAllProd} = require('../controllers/getAllProd')

const getProdHandler = async (req, res) => {
  try {
    const getAll = await getAllProd()
  return res.json(getAll)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
  
}

module.exports = {
  getProdHandler,
}