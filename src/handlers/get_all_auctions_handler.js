const {
  getAuByType,
  sortAuctions,
  paginateAu,
  getAuBySubCategory,
  getAuByCategory,
  filterByPrice
} = require("../controllers/Filtro_orden_paginado");
const { get_auction } = require("../controllers/get_auction_controller");
const {
  get_invert_auction,
} = require("../controllers/get_invertAuction_controller");
const { productByName } = require("../controllers/searchProductByName");
const { responseObj } = require("./response");

async function get_all_auctions_handler(req, res) {
  const data = req.query; // Almacena los valores de la consulta en la variable "data"

  try {
    const response = await get_auction();
    const response2 = await get_invert_auction();
    const finalResponse = [...response, ...response2];

    if (!finalResponse.length) {
      throw new Error("Empty auctions");
    }

    switch (data) {
      case data.name !== undefined:
        const auctionsByName = await productByName(data.name);

        if (!auctionsByName.length) {
          return res.status(404).json(responseObj("No se ha encontrado ese producto."));
        }

        const totalAuName = auctionsByName.length;
        const paginatedAuName = await paginateAu(auctionsByName, data.page, data.pageSize);

        return res.status(200).json(
          responseObj("Data acquired successfully", {
            totalAu: totalAuName,
            paginatedAu: paginatedAuName,
          })
        );

      case data.price !== undefined:
        console.log("data.price " + data.price + "finalResponse " + finalResponse);
        const filterPrice = filterByPrice(data.price, finalResponse);

        if (!filterPrice.length) {
          return res.status(404).json(responseObj("No se una subasta cerca de ese rango de precios."));
        }

        const totalAuPrice = filterPrice.length;
        const paginatedAuPrice = await paginateAu(filterPrice, data.page, data.pageSize);

        return res.status(200).json(
          responseObj("Data acquired successfully", {
            totalAu: totalAuPrice,
            paginatedAu: paginatedAuPrice,
          })
        );

      case data.category !== undefined:
        const auctionsByCategory = await getAuByCategory(data.category, finalResponse);

        if (!auctionsByCategory.length) {
          return res.status(404).json(responseObj("No se ha encontrado esa categoría."));
        }

        const totalAuCategory = auctionsByCategory.length;
        const paginatedAuCategory = await paginateAu(auctionsByCategory, data.page, data.pageSize);

        return res.status(200).json(
          responseObj("Data acquired successfully", {
            totalAu: totalAuCategory,
            paginatedAu: paginatedAuCategory,
          })
        );

      case data.subCategory !== undefined:
        const auctionsBySubCategory = await getAuBySubCategory(data.subCategory, finalResponse);

        if (!auctionsBySubCategory.length) {
          return res.status(404).json(responseObj("No se ha encontrado esa subcategoría."));
        }

        const totalAuSubCategory = auctionsBySubCategory.length;
        const paginatedAuSubCategory = await paginateAu(auctionsBySubCategory, data.page, data.pageSize);

        return res.status(200).json(
          responseObj("Data acquired successfully", {
            totalAu: totalAuSubCategory,
            paginatedAu: paginatedAuSubCategory,
          })
        );

        default:
        if (data.type === "AU" || data.type === "IA") {
          finalResponse = await getAuByType(data.type, finalResponse);
        } else if (data.type) {
          throw new Error("Invalid type");
        }

        if (data.sort) {
          finalResponse = await sortAuctions(data.sort, finalResponse);
        }

        const totalAuDefault = finalResponse.length;
        const paginatedAuDefault = await paginateAu(finalResponse, data.page, data.pageSize);

        return res.status(200).json(
          responseObj("Data acquired successfully", {
            totalAu: totalAuDefault,
            paginatedAu: paginatedAuDefault,
          })
        );
    }
  } catch (error) {
    if (error.message === "Missing data") {
      return res.status(400).json(responseObj({ error: error.message }, {}));
    }
    res.status(500).json(responseObj({ error: error.message }));
  }
}

module.exports = {
  get_all_auctions_handler,
};

