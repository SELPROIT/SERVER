const { handle_date } = require("./handle_date.js");
const { handle_finish_auction } = require("./handle_finish_auction.js");

const handle_status = (auction_id, estados, types, close_date) => {

    switch (estados) {
        case "Activa":
            //Una vez se crea la invert auction o se aprueba una actuion, se actualiza el status a activa 
            //y se llama a la función para que maneje el timer.
            // console.log(auction_id, status, types, close_date);
            const handleDate = handle_date(auction_id, close_date, types);

            if (!handleDate) return "Termine handle date";

            return handleDate;

        case "Terminada":
            //una vez terminada, llamar al manejo de finalización de auctions y relacionar a los users ganadores
            handle_finish_auction(auction_id, types);
            break;

        default:
        //devolver algún error
        throw newError("Error en el estado de la subasta")
    }

};

// handle_status("Activa", "2023-09-01T23:53:00.000Z", "AU", null, false);
// console.log("se sigue ejecutando");

module.exports = {
    handle_status
};
