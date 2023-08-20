const {
  getAuByType,
  sortAuctions,
  paginateAu,
  getAuByCategoty,
  getAuBySubCategoty,
} = require("../controllers/Filtro_orden_paginado");
const { get_auction } = require("../controllers/get_auction_controller");
const {
  get_invert_auction,
} = require("../controllers/get_invertAuction_controller");
const { productByName } = require("../controllers/searchProductByName");
const { responseObj } = require("./response");

async function get_all_auctions_handler(req, res) {
  const { name, sort, type, page, pageSize, category, subCategory } = req.query;
  try {
    const response = await get_auction();
    const response2 = await get_invert_auction();

    let finalResponse = [...response, ...response2];
    if (!finalResponse) res.status(400).json({ message: error.message });

    if (name) {
      const auctions = await productByName(name);

      if (!auctions) {
        res.status(404).json(responseObj("No se ha encontrado ese producto."));
      }

      const totalAu = auctions.length;
      const paginatedAu = await paginateAu(auctions, page, pageSize);

      return res
        .status(200)
        .json(
          responseObj("Data acquire successfully", {
            totalAu: totalAu,
            paginatedAu,
          })
        );
    }

    if (category) {
      const auctions = await getAuByCategoty(category, finalResponse);
      
      if (!auctions) {
        res.status(404).json(responseObj("No se ha encontrado ese producto."));
      }

      const totalAu = auctions.length;
      const paginatedAu = await paginateAu(auctions, page, pageSize);

      return res
        .status(200)
        .json(
          responseObj("Data acquire successfully", {
            totalAu: totalAu,
            paginatedAu,
          })
        );
    }
    if (subCategory) {
      const auctions = await getAuBySubCategoty(subCategory, finalResponse);
      
      if (!auctions) {
        res.status(404).json(responseObj("No se ha encontrado ese producto."));
      }
      const totalAu = auctions.length;
      const paginatedAu = await paginateAu(auctions, page, pageSize);
      return res
        .status(200)
        .json(
          responseObj("Data acquire successfully", {
            totalAu: totalAu,
            paginatedAu,
          })
        );
    }

    if (!finalResponse.length) throw new Error("Empty auctions");
    if (type) {
      console.log("type", type);
      if (type === "AU" || type === "IA") {
        finalResponse = await getAuByType(type, finalResponse);
        console.log("filterResponse", finalResponse);
      }
      if (type !== "AU" && type !== "IA") {
        console.log("type", type);
        throw new Error("Invalid type");
      }
    }
    if (sort) {
      finalResponse = await sortAuctions(sort, finalResponse);
    }

    const totalAu = finalResponse.length;
    const paginatedAu = await paginateAu(finalResponse, page, pageSize);
    return res
      .status(200)
      .json(
        responseObj("Data acquire successfully", {
          totalAu: totalAu,
          paginatedAu,
        })
      );
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
