const { put_user_controller } = require("../put/put_user_controller.js");


const handle_finish_auction = (type, user_id, auction_id) => {
  //hacer un winners que se relacione con interaction_history del usuario
  console.log("hola");
  
  if (type === "AU") {
    //put_user_controller(interaction_history) le agrego la subasta ganada al usuario

  }
};

module.exports = {
  handle_finish_auction
};
