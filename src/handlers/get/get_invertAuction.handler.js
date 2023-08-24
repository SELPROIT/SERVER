const { filterByPrice, sortAuctions, getAuByCategory, getAuBySubCategory, paginateAu } = require('../../controllers/get/aux_filter_sort_page');
const { auctionByName } = require('../../controllers/get/get_auction_by_mame');
const { get_invert_auction } = require('../../controllers/get/get_invert_auction_controller');


function get_invertAuction_handler(req, res) {
    const { name, filter, order, category, subCategory, page, pageSize } = req.query

    Promise.resolve()
        .then(async () => {
            if (name) {
                const type = 'IA'
                const auction = await auctionByName(type, name);
                if (!auction) {
                    return res.status(404).json(('No se ha encontrado esa subasta.'));
                }
            }
            let response = await get_invert_auction()
            if (!response.length) {
                throw new Error("Subastas invertidas vacías");
            }
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
            if (error.message === 'Faltan datos') {
                return res.status(400).json({ error: error.message });
            }
            res.status(500).json({ error: error.message });
        });
}

module.exports = {
    get_invertAuction_handler
};
