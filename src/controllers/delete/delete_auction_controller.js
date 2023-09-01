const { Auction } = require('../../db.js');

const delete_auction = async (id) => {

    const erase = await Auction.destroy(
        {
            where: {
                id: id,
            }
        }
    );

    return erase

}

module.exports = {
    delete_auction,
}
