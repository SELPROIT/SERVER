const {put_auc_controller} = require("../put/put_auction_controller.js");
const {put_inv_auc_controller} = require("../put/put_inv_auction_controller.js");
const { put_user_controller } = require("../put/put_user_controller.js");
const { handle_date } = require("./handle_date.js");
const { handle_finish_auction } = require("./handle_finish_auction.js");

const handle_status = (status, close_date, type, user_id, buyNow, auction_id) => {
    

    switch (status) {
        case "Pendiente": //llamar al admin para que la acepte o no, en caso de ser una AU
            break;

        case "Activa":
            //Una vez se crea la invert auction o se aprueba una actuion, se actualiza el status a activa 
            //y se llama a la función para que maneje el timer.
            
            const date = handle_date(close_date, buyNow);

            status = "Terminada";

            if(type === "AU"){
                put_auc_controller(auction_id, status, close_date);
            }
            else if(type === "IA"){
                put_inv_auc_controller(auction_id, status, close_date);
            }


            return date; //el objeto que me devolvio la función handle date tiene: 
            // months,
            // days,
            // hours, 
            // minutes,
            // seconds

        case "Terminada":
            //una vez terminada, llamar al manejo de finalización de auctions y relacionar a los users ganadores
            handle_finish_auction(type, user_id);
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
