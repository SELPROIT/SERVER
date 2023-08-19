const { getAllCategory } = require('../controllers/getCategory')
const responseObj = require('./response.js')


async function toCategory(req, res) {
    try {
        const categories = await getAllCategory();
        if(!categories) res.status(400).json({ message: error.message });
        res.status(200).json(("Funciona", categories));
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

module.exports = {
    toCategory,
};
