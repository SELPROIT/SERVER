const { Category, Sub_category } = require('../../db');
const { Op } = require("sequelize");

const create_subCategory = (type, data) => {
    return new Promise((resolve, reject) => {
        Promise.all(data.map(data => {
            const { name } = data;
            const exist = name.map(sub_name => {
                return Sub_category.findOne({
                    where: {
                        name: sub_name
                    }
                });
            });

            return Promise.all(exist);
        }))
        .then(verify => {
            if (verify[0].some(result => result !== null)) {
                reject(new Error("This category name already exists"));
                return;
            }

            Promise.all(data.map(async data => {
                const { id_category, name } = data;
                const category = await Category.findByPk(id_category);

                if (!
category) {
                    return "Missing category";
                }

                const sub_category_id = await Sub_category.count({
                    where: {
                        id: {
                            [Op.startsWith]: id_category
                        }
                    },
                });

                let counter = sub_category_id + 1;

                const subCategoryPromises = name.map(async subCategory_name => {
                    const id = `${id_category}${counter}`;
                    const subCategory = await Sub_category.create({
                        id,
                        name: subCategory_name,
                        type,
                    });
                    await category.addSub_category(subCategory);
                    counter++;
                });

                Promise.all(subCategoryPromises)
                    .then(() => {
                        resolve(true);
                    })
                    .catch(error => {
                        reject(new Error(`Error creating sub-categories: ${error.message}`));
                    });
            }));
        })
        .catch(error => {
            reject(new Error(`Error verifying sub-category existence: ${error.message}`));
        });
    });
};

module.exports = {
    create_subCategory
};