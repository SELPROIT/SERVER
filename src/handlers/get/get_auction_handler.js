const { auctionByName } = require('../../controllers/get/getAuctionByName');
const { get_auction } = require('../../controllers/get/get_auction_controller');


function get_auction_handler(req, res) {
  const { name } = req.query;

  // Maneja las consultas y respuestas utilizando promesas
  Promise.resolve()
    .then(async () => {
      if (name) {
        const auction = await auctionByName(name);
        if (!auction) {
          return res.status(404).json(('No se ha encontrado esa subasta.'));
        }
        return res.status(200).json(("Data acquire successfully", auction));
      }

      const response = await get_auction();
      if (!response.length) {
        return res.status(404).json(('No se han encontrado subastas.'));
      }
      return res.status(200).json(("Data acquire successfully", response));
    })
    .catch(error => {
      if (error.message === 'Missing data') {
        return res.status(400).json((error.message));
      }
      return res.status(500).json((error.message));
    });
}

module.exports = {
  get_auction_handler
};
