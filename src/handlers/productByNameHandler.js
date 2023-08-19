const { productByName } = require("../controllers/searchProductByName");
const { responseObj } = require("./response");

const getProductByName = async (req, res) => {
    
    const { name } = req.query;

    try {
        const product = await productByName(name); 
        
        if (!product) {
            res.status(404).json(responseObj('No se ha encontrado ese producto.'));
        }
        res.status(200).json(responseObj(product)); 
    } catch (error) {
        res.status(400).json(responseObj(error.message));
    }
};

module.exports = {
    getProductByName
};