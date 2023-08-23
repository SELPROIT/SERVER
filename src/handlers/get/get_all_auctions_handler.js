const { sortAuctions,
  filterByPrice,
  paginateAu,
  getAuByType,
  getAuByCategory,
  getAuBySubCategory } = require("../../controllers/get/aux_filter_sort_page");
const { get_auction } = require("../../controllers/get/get_auction_controller");
const { get_invert_auction } = require("../../controllers/get/get_invertAuction_controller");
const { productByName } = require("../../controllers/get/searchProductByName");

async function get_all_auctions_handler(req, res) {
  const { name, order, filter, page, pageSize, category, subCategory, type, price } = req.query;

  try {
    const response = await get_auction();
    const response2 = await get_invert_auction();

    let finalResponse = [...response, ...response2];

    finalResponse.sort(() => Math.random() - 0.5);

    if (!finalResponse) res.status(400).json({ message: error.message });

    if (name) {
      const auctions = await productByName(name);

      if (!auctions) {
        res.status(404).json(("No se ha encontrado ese producto."));
      }

      const totalAu = auctions.length;
      const paginatedAu = await paginateAu(auctions, page, pageSize);

      return res.status(200).json(
        ("Data acquire successfully", {
          totalAu: totalAu,
          paginatedAu
        })
      );
    }
    if (filter) {
      finalResponse = filterByPrice(filter, finalResponse);

      if (!finalResponse) {
        return res
          .status(404)
          .json(
            ("No se una subasta cerca de ese rango de precios.")
          );
      }
    }
    if (order) {
      finalResponse = await sortAuctions(order, finalResponse);

      if (!finalResponse) {
        res.status(404).json(("No se ha podido ordenar las subastas."));
      }
    }
    if (category) {
      finalResponse = await getAuByCategory(category, finalResponse);

      if (!finalResponse) {
        res.status(404).json(("No se ha encontrado ese producto."));
      }
    }
    if (subCategory) {
      finalResponse = await getAuBySubCategory(subCategory, finalResponse);

      if (!finalResponse) {
        res.status(404).json(("No se ha encontrado ese producto."));
      }
    }
    if (type) {
      if (type === "AU" || type === "IA") {
        finalResponse = await getAuByType(type, finalResponse);
      }
      if (type !== "AU" && type !== "IA") {
        throw new Error("Invalid type");
      }
    }

    const totalAu = finalResponse.length;
    const paginatedAu = await paginateAu(finalResponse, page, pageSize);
    return res
      .status(200)
      .json(
        ("Data acquire successfully", {
          totalAu: totalAu,
          paginatedAu
  })
  );
  } catch (error) {
    if (error.message === "Missing data") {
      return res.status(400).json(({ error: error.message }, {}));
    }
    res.status(500).json(({ error: error.message }));
  }
}

module.exports = {
  get_all_auctions_handler
};