const { create_category } = require('../controllers/post_category_controller');
const { responseObj } = require('./response');

async function post_category_handler(req, res) {
    try {
        const { category, data } = req.body;

        if (!category ||!data) throw new Error ("Missing data");

        const response = await create_category(category, data);

        if (!response) throw new Error()
        res.status(200).json(responseObj("Category created successfully", response));

    } catch (error) {
        if (error.message === 'Missing data') {
            res.status(400).json(responseObj(error.message));
        }
        res.status(500).json(responseObj(error.message));
    }
}

module.exports = {
    post_category_handler,
}