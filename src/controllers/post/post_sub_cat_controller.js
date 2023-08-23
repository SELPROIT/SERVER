const { Category, Sub_category } = require('../../db');
const { Op } = require("sequelize");


const create_subCategory = async (type, data) => {

    // * Verificacion si ya esxiste ese nombre guardado

    const exist = await Promise.all(data.map(async (data) => {
        const { name } = data
        const exist = name.map(async (sub_name) => {
            return await Sub_category.findOne({
                where: {
                    name: sub_name,
                }
            });
        })

        return Promise.all(exist)
    }));
    const verify = await Promise.all(exist)

    if (verify[0].some(result => result !== null)) {
        throw new Error("This category name already exists")
    }

    await Promise.all(
        data.map(async (data) => {
            const { id_category, name } = data;
            const category = await Category.findByPk(id_category)

            if (!category) return "Missing category";

            const sub_category_id = await Sub_category.count({
                where: {
                    id: {
                        [Op.startsWith]: id_category
                    }
                },
            });

            let counter = sub_category_id + 1;

            for (const subCategory_name of name) {

                const id = `${id_category}${counter}`;
                const subCategory = await Sub_category.create({
                    id,
                    name: subCategory_name,
                    type,
                });
                await category.addSub_category(subCategory);
                counter++;
            }
        })
    )

    return true

}

module.exports = {
    create_subCategory,
};
