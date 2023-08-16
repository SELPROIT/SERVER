const { create_subCategory } = require('../controllers/post_subCategory_controller');
const { response } = require('./response');

async function post_subCategoty_handler(req, res) {
    try {
        const { category, data } = req.body;

        if (!category ||!data) throw new Error ("Missing data");

        const result = await create_subCategory(category, data);

        if (!result) throw new Error()
        res.status(200).json(response("Sub-category created successfully"));

    } catch (error) {
        if (error.message === 'Missing data') {
            res.status(400).json(response(error.message));
        }
        res.status(500).json(response(error.message));
    }
}

module.exports = {
    post_subCategoty_handler,
}