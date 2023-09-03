const { get_preuserByMail } = require('../../controllers/get/get_pre_user_by_mail_controller');

const get_PreUserByMail = async (req, res) => {
    try {
        const { email } = req.body;

        if (!email) throw new Error("Falta data.")

        const response = await get_preuserByMail(email);
        if (!response) throw new Error(`Hubo un problema al adquirir al usuario: ${email}`)
        res.status(200).json(("Adquisición de datos exitosa.", response));

    } catch (error) {
        if (error.message === 'Falta data.') {
            return res.status(400).json((error.message));
        }
        res.status(500).json((error.message));
    }
};

module.exports = { get_PreUserByMail };
