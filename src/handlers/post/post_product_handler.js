const { postProductC } = require("../../controllers/post/post_prod_controller");


const createdProd = async (req, res) => {
  const newProduct = req.body;
  try {
    const prodCreated = await postProductC(newProduct);
    res.json(('Product created successfully', prodCreated));
  } catch (error) {
    res.json(({error: error.message}, {}));
  }
};

module.exports = { createdProd }