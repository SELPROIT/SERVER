const { delete_invertAuction } = require('../../controllers/delete/delete_invertAuction_controller.js');

async function delete_invertAuction_handler(req, res) {
    const { id } = req.query
    try {
        if (!id) throw new Error("Missing data")
        const response = await delete_invertAuction(id);
        if (!response) throw new Error("There was a problem erasing this invert auction")
        res.status(200).send(('Soft-delete successfull'));
    } catch (error) { 
        res.status(500).json((error.message));
    }
}

module.exports = {
    delete_invertAuction_handler,
}