
const { create_subCategory } = require('../../controllers/post/post_sub_cat_controller');

function post_subCategoty_handler(req, res) {
    const { category, data } = req.body;

    if (!category || !data) {
        return res.status(400).json('Missing data');
    }

    create_subCategory(category, data)
        .then(response => {
            if (!response) {
                return res.status(500).json('Error creating sub-category');
            }
            res.status(200).json('Sub-category created successfully');
        })
        .catch(error => {
            if (error.message === 'Missing data') {
                res.status(400).json(error.message);
            } else {
                res.status(500).json(error.message);
            }
        });
}

module.exports = {
    post_subCategoty_handler
};