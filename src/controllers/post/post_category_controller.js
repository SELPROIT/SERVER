const { Category } = require('../../db.js');

const create_category = async (type, data) => {

    if(!data) throw new Error ("Faltan completar campos.");

    //deleteFlag falta esto?

    await Promise.all(
        data.map(async (category) => {
            let { id, name } = category

            if(!id || !name) throw new Error ("Faltan completar campos.");

            return await Category.create(
                {
                    id,
                    name,
                    type
                }
            )
        })
    )

    return true;
}

module.exports = {
    create_category
};