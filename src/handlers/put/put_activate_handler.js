const { put_activate } = require("../../controllers/put/put_activate_controller");


const put_activate_handler = async (req, res) => {
    try {
        const { id, status } = req.query

        if (!id || !status) throw new Error ("Missing data");
        if (status !== "Activa" ) throw new Error ("Missing data");
        const response = await put_activate(id, status);
        if (!response) throw new Error("There was a problem updating the status")
        res.status(200).json(("Status updated successfully", response));

    } catch (error) {
        if (error.message === 'Missing data') {
            return res.status(400).json((error.message));
        }
        res.status(500).json((error.message));
    }
}

module.exports = {
    put_activate_handler,
}