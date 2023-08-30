const { Invert_auction } = require('../../db.js');

const delete_invertAuction = async (id) => {

    const erase = await Invert_auction.update(        
        { deleteFlag: true },
        {
            where: {
                id: id,
                deleteFlag: false
            }
        });

    return erase

}

module.exports = {
    delete_invertAuction,
}
