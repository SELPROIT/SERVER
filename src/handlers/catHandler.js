const { getAllCategory } = require('../controllers/getCategory')
const responseObj = require('./response.js')


async function toCategory(req, res) {
    try {
        const categories = await getAllCategory();
        res.status(200).json(responseObj("Funciona", categories));
    } catch (error) {
        return res.status(500).json(responseObj);
    }
}

module.exports = {
    toCategory,
}
