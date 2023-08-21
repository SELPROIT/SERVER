const {
  getAuByType,
  sortAuctions,
  paginateAu,
  getAuBySubCategory,
  getAuByCategory,
  filterByPrice,
} = require("../controllers/Filtro_orden_paginado");
const { get_auction } = require("../controllers/get_auction_controller");
const {
  get_invert_auction,
} = require("../controllers/get_invertAuction_controller");
const { productByName } = require("../controllers/searchProductByName");
const { responseObj } = require("./response");

async function get_all_auctions_handler(req, res) {
  const { name, sort, type, page, pageSize, category, subCategory, price } =
    req.query;
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

      return res.status(200).json(
        responseObj("Data acquire successfully", {
          totalAu: totalAu,
          paginatedAu,
        })
      );
    }

    if (price) {

      console.log("Price: " + price + "final response " + finalResponse);

      const filterPrice = filterByPrice(price, finalResponse);

      if (!filterPrice) {
        return res
          .status(404)
          .json(
            responseObj("No se una subasta cerca de ese rango de precios.")
          );
      }

      const totalAu = filterPrice.length;
      const paginatedAu = await paginateAu(filterPrice, page, pageSize);

      return res.status(200).json(
        responseObj("Data acquired successfully", {
          totalAu,
          paginatedAu
        })
      );

    }

    if (category) {
     
      const auctions = await getAuByCategory(category, finalResponse);

      if (!auctions) {
        res.status(404).json(responseObj("No se ha encontrado ese producto."));
      }

      const totalAu = auctions.length;
      const paginatedAu = await paginateAu(auctions, page, pageSize);

      return res.status(200).json(
        responseObj("Data acquire successfully", {
          totalAu: totalAu,
          paginatedAu,
        })
      );
    }
    if (subCategory) {
      console.log(
        "subCategory: " + subCategory + " final response " + finalResponse
      );
      const auctions = await getAuBySubCategory(subCategory, finalResponse);

      if (!auctions) {
        res.status(404).json(responseObj("No se ha encontrado ese producto."));
      }
      const totalAu = auctions.length;
      const paginatedAu = await paginateAu(auctions, page, pageSize);
      return res.status(200).json(
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
    return res.status(200).json(
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

// async function get_all_auctions_handler(req, res) {
//   const data = req.query; // Almacena los valores de la consulta en la variable "data"

//   try {
//     const response = await get_auction();
//     const response2 = await get_invert_auction();
//     const finalResponse = [...response, ...response2];

//     if (!finalResponse.length) {
//       throw new Error("Empty auctions");
//     }

//     switch (data) {
//       case data.name !== undefined:
//         const auctionsByName = await productByName(data.name, finalResponse);

//         if (!auctionsByName.length) {
//           return res.status(404).json(responseObj("No se ha encontrado ese producto."));
//         }

//         const totalAuName = auctionsByName.length;
//         const paginatedAuName = await paginateAu(auctionsByName, data.page, data.pageSize);

//         return res.status(200).json(
//           responseObj("Data acquired successfully", {
//             totalAu: totalAuName,
//             paginatedAu: paginatedAuName,
//           })
//         );

//       case data.price !== undefined:
//         console.log("data.price " + data.price + "finalResponse " + finalResponse);
//         const filterPrice = filterByPrice(data.price, finalResponse);

//         if (!filterPrice.length) {
//           return res.status(404).json(responseObj("No se una subasta cerca de ese rango de precios."));
//         }

//         const totalAuPrice = filterPrice.length;
//         const paginatedAuPrice = await paginateAu(filterPrice, data.page, data.pageSize);

//         return res.status(200).json(
//           responseObj("Data acquired successfully", {
//             totalAu: totalAuPrice,
//             paginatedAu: paginatedAuPrice,
//           })
//         );

//       case data.category !== undefined:
//         const auctionsByCategory = await getAuByCategory(data.category, finalResponse);

//         if (!auctionsByCategory.length) {
//           return res.status(404).json(responseObj("No se ha encontrado esa categoría."));
//         }

//         const totalAuCategory = auctionsByCategory.length;
//         const paginatedAuCategory = await paginateAu(auctionsByCategory, data.page, data.pageSize);

//         return res.status(200).json(
//           responseObj("Data acquired successfully", {
//             totalAu: totalAuCategory,
//             paginatedAu: paginatedAuCategory,
//           })
//         );

//       case data.subCategory !== undefined:
//         const auctionsBySubCategory = await getAuBySubCategory(data.subCategory, finalResponse);

//         if (!auctionsBySubCategory.length) {
//           return res.status(404).json(responseObj("No se ha encontrado esa subcategoría."));
//         }

//         const totalAuSubCategory = auctionsBySubCategory.length;
//         const paginatedAuSubCategory = await paginateAu(auctionsBySubCategory, data.page, data.pageSize);

//         return res.status(200).json(
//           responseObj("Data acquired successfully", {
//             totalAu: totalAuSubCategory,
//             paginatedAu: paginatedAuSubCategory,
//           })
//         );

//       case data.type !== undefined:
//         if (data.type === "AU" || data.type === "IA") {
//           finalResponse = await getAuByType(data.type, finalResponse);
//         } else if (data.type) {
//           throw new Error("Invalid type");
//         }

//       case data.sort !== undefined:
//         finalResponse = await sortAuctions(data.sort, finalResponse);

//         const totalAuDefault = finalResponse.length;
//         const paginatedAuDefault = await paginateAu(finalResponse, data.page, data.pageSize);

//         return res.status(200).json(
//           responseObj("Data acquired successfully", {
//             totalAu: totalAuDefault,
//             paginatedAu: paginatedAuDefault,
//           })
//         );

//         default:

//     }
//   } catch (error) {
//     if (error.message === "Missing data") {
//       return res.status(400).json(responseObj({ error: error.message }, {}));
//     }
//     res.status(500).json(responseObj({ error: error.message }));
//   }
// }

module.exports = {
  get_all_auctions_handler,
};
