const { put_user_controller } = require("../put/put_user_controller.js");


const handle_finish_auction = (idClient, type, status, price) => {
  //hacer un winners que se relacione con interaction_history del usuario
  if (type === "AU") {
    //put_user_controller(interaction_history) le agrego la subasta ganada al usuario

  }
};

module.exports = {
  handle_finish_auction
};
