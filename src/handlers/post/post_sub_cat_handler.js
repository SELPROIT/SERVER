const { create_subCategory } = require('../../controllers/post/post_sub_cat_controller');


async function post_subCategoty_handler(req, res) {
    try {
        const { category, data } = req.body;

        if (!category ||!data) throw new Error ("Missing data");

        const response = await create_subCategory(category, data);

        if (!response) throw new Error()
        res.status(200).json(("Sub-category created successfully"));

    } catch (error) {
        if (error.message === 'Missing data') {
            res.status(400).json((error.message));
        }
        res.status(500).json((error.message));
    }
}

module.exports = {
    post_subCategoty_handler,
}