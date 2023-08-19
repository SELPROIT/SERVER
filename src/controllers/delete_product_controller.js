const { Product } = require('../db');

const delete_product = async (id) => {

    const erase = await Product.destroy({
        where: {
            id: id
        }
    });
    console.log('id', id)
    return erase

}

module.exports = {
    delete_product,
}