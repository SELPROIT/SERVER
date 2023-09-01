

const { put_user_controller } = require("../put/put_user_controller.js");
const { handle_date } = require("./handle_date.js");
const { handle_finish_auction } = require("./handle_finish_auction.js");

const handle_status = (status, close_date, type, User) => {

    switch (status) {
        case "Pendiente": //llamar al admin para que la acepte o no, en caso de ser una AU
            break;

        case "Activa":
            //Una vez se crea la invert auction o se aprueba una actuion, se actualiza el status a activa 
            //y se llama a la función para que maneje el timer.
            
            const newState = handle_date(status, close_date);

            status = "Terminada"; //es correcto hacerlo así?

            return newState; //el objeto que me devolvio la función handle date tiene: 
            // months,
            // days,
            // hours, la fecha o timer para mostrar en el front
            // minutes,
            // seconds

        case "Terminada":
            //una vez terminada, llamar al manejo de finalización de auctions y relacionar a los users ganadores
            handle_finish_auction(type);
            break;
        case "Eliminada":
            //se guarda con el delete flag?
          break;
    
        default:
            //devolver algún error
      }

};

module.exports = {
    handle_status
};
