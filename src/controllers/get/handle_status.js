const { put_activate } = require("../put/put_activate_controller.js");
const {put_auc_controller} = require("../put/put_auction_controller.js");
const {put_inv_auc_controller} = require("../put/put_inv_auction_controller.js");
const { put_user_controller } = require("../put/put_user_controller.js");
const { handle_date } = require("./handle_date.js");
const { handle_finish_auction } = require("./handle_finish_auction.js");

const handle_status = (auction_id, estados, types, close_date) => {
    
    switch (estados) {
        case "Pendiente": //llamar al admin para que la acepte o no, en caso de ser una AU
            break;

        case "Activa":
            //Una vez se crea la invert auction o se aprueba una actuion, se actualiza el status a activa 
            //y se llama a la función para que maneje el timer.
            // console.log(auction_id, status, types, close_date);
            const handleDate = handle_date(auction_id, close_date, types);
    
            if(!handleDate) return "Termine handle date";

            console.log(handleDate);
           
            console.log("despues de la recursion");
           
            return handleDate;

        case "Terminada":
            //una vez terminada, llamar al manejo de finalización de auctions y relacionar a los users ganadores
            handle_finish_auction(auction_id, types);
            break;
        case "Eliminada":
            //se guarda con el delete flag?
          break;
    
        default:
            //devolver algún error
      }

};

// handle_status("Activa", "2023-09-01T23:53:00.000Z", "AU", null, false);
// console.log("se sigue ejecutando");

module.exports = {
    handle_status
};
