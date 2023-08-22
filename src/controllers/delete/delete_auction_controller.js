const { Auction } = require('../../db');

const delete_auction = async (id) => {

    const erase = await Auction.update(
        { deleteFlag: true },
        {
            where: {
                id: id,
                deleteFlag: false
            }
        }
    );

    return erase

}

module.exports = {
    delete_auction,
}
