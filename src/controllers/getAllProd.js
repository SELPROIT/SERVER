const getAllProd = async () => {
    const prod = await Product.findAll({
        include: [
            {
                model: Sub_category,
                atributes:["id"],
                through: { attributes: [] }
            }
        ]
    })
    return prod
}

module.exports = {
    getAllProd,
}