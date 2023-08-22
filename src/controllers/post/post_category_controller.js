const { Category } = require('../db');

const create_category = async (type, data) => {
    await Promise.all(
        data.map(async (category) => {
            let { id, name } = category
            return await Category.create(
                {
                    id,
                    name,
                    type,
                }
            )
        })
    )

    return true
}

module.exports = {
    create_category,
};