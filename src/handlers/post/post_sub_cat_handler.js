const { create_subCategory } = require('../controllers/post_sub_cat_controller');
const { responseObj } = require('./response');

async function post_subCategoty_handler(req, res) {
    try {
        const { category, data } = req.body;

        if (!category ||!data) throw new Error ("Missing data");

        const response = await create_subCategory(category, data);

        if (!response) throw new Error()
        res.status(200).json(responseObj("Sub-category created successfully"));

    } catch (error) {
        if (error.message === 'Missing data') {
            res.status(400).json(responseObj(error.message));
        }
        res.status(500).json(responseObj(error.message));
    }
}

module.exports = {
    post_subCategoty_handler,
}