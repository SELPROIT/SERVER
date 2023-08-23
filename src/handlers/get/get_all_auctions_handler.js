const { sortAuctions,
  filterByPrice,
  paginateAu,
  getAuByType,
  getAuByCategory,
  getAuBySubCategory } = require("../../controllers/get/aux_filter_sort_page");
const { get_auction } = require("../../controllers/get/get_auction_controller");
const { get_invert_auction } = require("../../controllers/get/get_invert_auction_controller");
const { productByName } = require("../../controllers/get/search_product_by_name");

async function get_all_auctions_handler(req, res) {
  const { name, order, filter, page, pageSize, category, subCategory, type, price } = req.query;

  try {
      const responsePromises = [
          get_auction(),
          get_invert_auction()
      ];

      const [response, response2] = await Promise.all(responsePromises);

      let finalResponse = [...response, ...response2];

      finalResponse.sort(() => Math.random() - 0.5);

      if (!finalResponse) {
          return res.status(400).json({ message: "No se encontró ninguna subasta." });
      }

      if (name) {
          const auctions = await productByName(name);

          if (!auctions) {
              return res.status(404).json({ message: "No se ha encontrado ese producto." });
          }

          const totalAu = auctions.length;
          const paginatedAu = await paginateAu(auctions, page, pageSize);

          return res.status(200).json({
              message: "Datos adquiridos exitosamente",
              totalAu: totalAu,
              paginatedAu
          });
      }

      if (filter) {
          finalResponse = filterByPrice(filter, finalResponse);

          if (!finalResponse) {
              return res.status(404).json({ message: "No se encontró ninguna subasta en ese rango de precios." });
          }
      }

      if (order) {
          finalResponse = await sortAuctions(order, finalResponse);

          if (!finalResponse) {
              return res.status(404).json({ message: "No se pudo ordenar las subastas." });
          }
      }

      if (category) {
          finalResponse = await getAuByCategory(category, finalResponse);

          if (!finalResponse) {
              return res.status(404).json({ message: "No se encontró ese producto." });
          }
      }

      if (subCategory) {
          finalResponse = await getAuBySubCategory(subCategory, finalResponse);

          if (!finalResponse) {
              return res.status(404).json({ message: "No se encontró ese producto." });
          }
      }

      if (type) {
          if (type === "AU" || type === "IA") {
              finalResponse = await getAuByType(type, finalResponse);
          } else {
              throw new Error("Tipo inválido");
          }
      }

      const totalAu = finalResponse.length;
      const paginatedAu = await paginateAu(finalResponse, page, pageSize);
      return res.status(200).json({
          message: "Datos adquiridos exitosamente",
          totalAu: totalAu,
          paginatedAu
      });
  } catch (error) {
      if (error.message === "Datos faltantes") {
          return res.status(400).json({ error: error.message });
      }
      res.status(500).json({ error: error.message });
  }
}


module.exports = {
  get_all_auctions_handler
};