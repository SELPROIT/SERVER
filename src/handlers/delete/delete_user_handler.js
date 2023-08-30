const { delete_user } = require('../../controllers/delete/delete_user_controller.js');
const { validate: validateUUID } = require('uuid');

async function delete_user_handler(req, res) {
    try {
        const { user_id } = req.query

        if (!user_id) throw new Error("Missing data")
        if (!validateUUID(user_id)) throw new Error("Invalid id")

        const response = await delete_user(user_id);
        if (!response[0]) throw new Error("There was a problem erasing this user")
        res.status(200).json(("User deleted successfully", response[0]));

    } catch (error) {
        if (error.message === 'Missing data') {
            return res.status(400).json((error.message));
        }
        res.status(500).json((error.message));
    }
}

module.exports = {
    delete_user_handler
}