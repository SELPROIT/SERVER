const { handle_date } = require("./handle_date");
const { handle_finish_auction } = require("./handle_finish_auction");

const handle_status = (status, close_date, type) => {

    switch (status) {
        case "Activa":
            status = handle_date(status, close_date);
            return status;
            //que vaya al timer, y devuelva un status terminado una vez que finaliza el timer
        case "Terminada":
            //una vez terminada, llamar al manejo de finalización de auctions y relacionar a los users ganadores
            handle_finish_auction(type);
            break;
        case "Eliminada":
            //se guarda con el delete flag?
          break;
    
        default:
            return status = "Pendiente"; //llamar al admin para que la acepte o no
      }

};

module.exports = {
    handle_status
};