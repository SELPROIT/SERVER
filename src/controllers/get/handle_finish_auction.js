const { put_user_controller } = require("../put/put_user_controller.js");
const { get_auction_by_id } = require("./get_auction_by_id_controller.js");
const { get_invertAuction_by_id } = require("./get_invert_auction_by_id_controller.js");


const handle_finish_auction = (auction_id, type, close_date) => {
  //hacer un winners que se relacione con interaction_history del usuario
  console.log("hola");
  
  if (type === "AU") {
    //put_user_controller(interaction_history) le agrego la subasta ganada al usuario
    const auction = get_auction_by_id(auction_id);

    const auctionWinner =  Math.max(auction.auction_bids.proposed_price);

    //como sacar el id del usuario de acá?
    put_user_controller();
  }
  else if(type === "IA"){

    const invertAuction = get_invertAuction_by_id(auction_id);
    const proposed_price = invertAuction.auction_bids.proposed_price;
    const proposed_amount = invertAuction.auction_bids.proposed_amount;
    const user = invertAuction.auction_bids.UserId; 
    const target_quantity = invertAuction.target_quantity;

    //si el precio propuesto es el menor es el ganador hay que comparar, 
    //el precio menor, y ver si la cantidad propuesta es igual a 
    //el target quantity. Como hago para que queden relacionados todos los 
    //id de cada cosa, debería hacer un for y que sea por las pocisiones?


  }

  throw Error("No se pudo encontrar ese tipo de subasta.");
};

module.exports = {
  handle_finish_auction
};
