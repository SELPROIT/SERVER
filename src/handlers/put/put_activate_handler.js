const { put_activate } = require("../../controllers/put/put_activate_controller");


const put_activate_handler = async (req, res) => {
    try {
        const { id, status } = req.query

        if (!id || !status) throw new Error ("Falta data.");
        if (status !== "Activa" ) throw new Error ("Falta data.");
        const response = await put_activate(id, status);
        if (!response) throw new Error("Hubo un problema actualizando ese status.")
        res.status(200).json(("El estatus se actualizó correctamente.", response));

    } catch (error) {
        if (error.message === 'Falta data.') {
            return res.status(400).json((error.message));
        }
        res.status(500).json((error.message));
    }
}

module.exports = {
    put_activate_handler,
}