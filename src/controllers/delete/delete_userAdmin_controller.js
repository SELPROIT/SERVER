const { User_admin } = require('../../db');

const delete_userAdmin = async (id) => {

    const erase = await User_admin.update(
        { deleteFlag: true },
        {
            where: {
                id: id,
                deleteFlag: false
            }
        }
    );

    return erase

}

module.exports = {
    delete_userAdmin,
}