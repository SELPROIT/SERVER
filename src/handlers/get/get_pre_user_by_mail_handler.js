const { get_preuserByMail } = require('../../controllers/get/get_pre_user_by_mail_controller');

const get_PreUserByMail = async (req, res) => {
    try {
        const { email } = req.body;

        if (!email) throw new Error("Missing data")

        const response = await get_preuserByMail(email);
        if (!response) throw new Error(`There was a problem acquiring user ${email}`)
        res.status(200).json(("Data acquire successfully", response));

    } catch (error) {
        if (error.message === 'Missing data') {
            return res.status(400).json((error.message));
        }
        res.status(500).json((error.message));
    }
};

module.exports = { get_PreUserByMail };
