const { getAuByType, sortAuByName, paginateAu } = require('../controllers/Filtro_orden_paginado');
const { get_auction } = require('../controllers/get_auction_controller');
const { get_invert_auction } = require('../controllers/get_invertAuction_controller');
const { responseObj } = require('./response');

async function get_all_auctions_handler(req, res) {
  const { sort, type, page, pageSize } = req.query
  try {

    const response = await get_auction();
    const response2 = await get_invert_auction();
    let finalResponse = [...response, ...response2]
    if (!finalResponse.length) throw new Error("Empty auctions")
    if (type) {
      console.log('type', type)
      if (type === "AU" || type === "IA") {
        finalResponse = await getAuByType(type, finalResponse)
        console.log('filterResponse', finalResponse)
      }
      if (type !== "AU" && type !== "IA") {
        console.log('type', type)
        throw new Error("Invalid type")
      }
    }
    if (sort) {
      if (sort === "asc" || sort === "des") {
        finalResponse = await sortAuByName(sort, finalResponse)
      }
      if (sort !== "asc" || sort === "des") {
        throw new Error("Invalid sort order")
      }
    }

    const totalAu = finalResponse.length
    const paginatedAu = await paginateAu(finalResponse, page, pageSize)
    return res.status(200).json(responseObj("Data acquire successfully", { totalAu: totalAu, paginatedAu }));

  } catch (error) {
    if (error.message === 'Missing data') {
      return res.status(400).json(responseObj({ error: error.message }, {}));
    }
    res.status(500).json(responseObj({ error: error.message }));
  }
}

module.exports = {
  get_all_auctions_handler,
}