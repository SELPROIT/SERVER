const { notifEmail } = require("../../controllers/post/notification_email")


const emailNotif = async (req, res) => {
    const { name, auction_id } = req.body
    try {
        await notifEmail(name, auction_id)
        res.send('Email enviado exitosamente!')
    } catch (error) {
        throw new Error({ error: error.message })
    }
}

module.exports = { emailNotif }