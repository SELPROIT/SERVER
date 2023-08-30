
const { delete_invertAuction } = require('../../controllers/delete/delete_invertAuction_controller.js');
const { validate: validateUUID } = require('uuid');

async function delete_invertAuction_handler(req, res) {
    try {
        const { invertAuction_id } = req.query

        if (!invertAuction_id) throw new Error("Missing data")
        if (!validateUUID(invertAuction_id)) throw new Error("Invalid id")

        const response = await delete_invertAuction(invertAuction_id);
        if (!response[0]) throw new Error("There was a problem erasing this invert auction")
        res.status(200).json(("Invert auction deleted successfully", response[0]));

    } catch (error) {
        if (error.message === 'Missing data') {
            return res.status(400).json((error.message));
        }
        res.status(500).json((error.message));
    }
}

module.exports = {
    delete_invertAuction_handler,
}