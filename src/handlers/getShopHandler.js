const {getShop} = require("../controllers/getShopController");
const {responseObj} = require("./response")

const getAllShops = async (req, res) => {

    try {
        const shops = await getShop(); 

        if (shops.length === 0) {
            res.status(404).json(responseObj('No se encontró ninguna puja para este producto.'));
        } else {
            res.status(200).json(responseObj('Estas son las pujas de este producto.', shops)); 
        }
    } catch (error) {
        res.status(400).json(responseObj(error.message));
    }
};

module.exports = {
    getAllShops
};