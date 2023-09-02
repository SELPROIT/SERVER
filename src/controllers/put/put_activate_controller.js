const { Auction, Invert_auction } = require('../../db');
const { get_auction_by_id } = require('../get/get_auction_by_id_controller');
const {get_invertAuction_by_id} = require('../get/get_invert_auction_by_id_controller');

const put_activate = async (auction_id, status, type, admin) => {
   
    const id = auction_id;

    console.log(id);
    if (type === "AU") {
        if(admin){

        }
        
        const newStatus = {
            status
        };
        await Auction.update(newStatus, {
            where: {id }
        });
        
        const auction = await get_auction_by_id(id);

        return auction;
    }
    else if(type === "IA"){
        const newStatus = {
            status
        };
        await Invert_auction.update(newStatus, {
            where: { id }
        });
        const invert = await get_invertAuction_by_id(id);
        
        return invert;
    }
    
}

module.exports = {
    put_activate
}