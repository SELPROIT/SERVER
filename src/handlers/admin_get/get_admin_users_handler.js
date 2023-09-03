const { get_admin_users_controller } = require("../../controllers/admin_get/get_admin_users_controller")


const get_admin_users_handler = async (req, res) => {
    try {
        const response = await get_admin_users_controller()
        res.status(200).json(response)
    } catch (error) {
        res.status(400).send('Error al traer usuarios')
    }
}

module.exports = { get_admin_users_handler }