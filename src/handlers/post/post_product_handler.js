
const { postProductC } = require("../../controllers/post/post_prod_controller.js");

function createdProd(req, res) {
  const productData = req.body; // Assuming you're parsing the request body properly
  postProductC(productData)
    .then(newProducts => {
      res.status(201).json(newProducts); // Use a proper HTTP status code and send JSON response
    })
    .catch(error => {
      res.status(500).json({ error: error.message }); // Use proper status code and send error message as JSON
    });
}

module.exports = { createdProd };