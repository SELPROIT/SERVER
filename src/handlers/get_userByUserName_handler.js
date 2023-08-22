const { get_usersByName } = require('../controllers/get_userByUserName_controller');
const { responseObj } = require('./response');

const get_UserByName = async (req, res) => {
    try {
        const { name } = req.params;

        if (!name) throw new Error("Missing data")

        const response = await get_usersByName(name);
        if (!response) throw new Error(`There was a problem acquiring user ${name}`)
        res.status(200).json(responseObj("Data acquire successfully", response));

    } catch (error) {
        if (error.message === 'Missing data') {
            return res.status(400).json(responseObj(error.message));
        }
        res.status(500).json(responseObj(error.message));
    }
};

module.exports = { get_UserByName };
