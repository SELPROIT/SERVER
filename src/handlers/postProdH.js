const { postProductC } = require("../controllers/PostProd");
const { responseObj } = require("./response");

const createdProd = async (req, res) => {
  const newProduct = req.body;
  try {
    const prodCreated = await postProductC(newProduct);
    res.json(responseObj('Product created successfully', prodCreated));
  } catch (error) {
    res.json(responseObj('Error creating product', {}));
  }
};

module.exports = { createdProd }