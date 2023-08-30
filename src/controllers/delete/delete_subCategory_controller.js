const { Sub_category } = require('../../db.js');

const delete_subCategory = async (id) => {

    const erase = await Sub_category.update(
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
    delete_subCategory,
}