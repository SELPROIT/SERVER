const { filterByPrice, sortAuctions, getAuByCategory, getAuBySubCategory, paginateAu } = require('../../controllers/get/aux_filter_sort_page');
const { auctionByName } = require('../../controllers/get/get_auction_by_mame');
const { get_auction } = require('../../controllers/get/get_auction_controller');


function get_auction_handler(req, res) {
  const { name, filter, order, category, subCategory, page, pageSize } = req.query;

  // Maneja las consultas y respuestas utilizando promesas
  Promise.resolve()
    .then(async () => {
      if (name) {
        const type = "AU"
        const auction = await auctionByName(type, name);
        if (!auction) {
          return res.status(404).json(('No se ha encontrado esa subasta.'));
        }
        return res.status(200).json(("Data acquire successfully", auction));
      }
      let response = await get_auction();

      if (!response.length) {
        return res.status(404).json(('No se han encontrado subastas.'));
      }
      if (filter) {
        response = await filterByPrice(filter, response)
        if (!response.length) {
          return res.status(404).json(('No se han encontrado subastas.'));
        }
      }
      if (order) {
        response = await sortAuctions(order, response)
        if (!response.length) {
          return res.status(404).json(('No se han encontrado subastas.'));
        }
      }
      if (category) {
        response = await getAuByCategory(category, response)
        if (!response.length) {
          return res.status(404).json(('No se han encontrado subastas.'));
        }
      }
      if (subCategory) {
        response = await getAuBySubCategory(subCategory, response)
        if (!response.length) {
          return res.status(404).json(('No se han encontrado subastas.'));
        }
      }
      const totalAu = response.length;
      const paginatedAu = await paginateAu(response, page, pageSize);
      return res.status(200).json({
        message: "Datos adquiridos exitosamente",
        totalAu: totalAu,
        paginatedAu
      });
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
