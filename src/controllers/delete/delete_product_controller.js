const { Product } = require('../../db');

const delete_product = async (id) => {

    const erase = await Product.update(        
        { deleteFlag: true },
        {
            where: {
                id: id,
                deleteFlag: false
            }
        });

    return erase

}

module.exports = {
    delete_product,
}