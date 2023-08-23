const { Category } = require('../../db');

const delete_category = async (id) => {

    const erase = await Category.update(
        { deleteFlag: true },
        {
            where: {
                id: id,
                deleteFlag: false
            }
        }
    );

    return erase

}

module.exports = {
    delete_category,
}