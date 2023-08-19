const { Invert_auction } = require('../db');

const delete_invertAuction = async (invertAuction_id) => {

    const erase = await Invert_auction.destroy({
        where: {
            id: invertAuction_id
        }
    });

    return erase

}

module.exports = {
    delete_invertAuction,
}
