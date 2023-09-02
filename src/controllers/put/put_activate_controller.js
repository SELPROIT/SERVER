const { Auction, Invert_auction } = require('../../db');
const { get_auction_by_id } = require('../get/get_auction_by_id_controller');
const { handle_status } = require('../get/handle_status');
//const {get_auction_by_id} = require('../get/get_invert_auction_by_id_controller')

const put_activate = async (id, status) => {
    const auction = get_auction_by_id(id)
    //const invert = get_invertAuction_by_id(id)
    if (auction) {
        const newStatus = {
            status
        };
        await Auction.update(newStatus, {
            where: { id }
        });
        const {close_date, type} = auction;
        handle_status(status, close_date, type, null, null, id)

        return true
    }
}

module.exports = {
    put_activate,
}