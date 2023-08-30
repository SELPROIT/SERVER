const { User } = require('../../db.js');

const delete_user = async (id) => {

    const erase = await User.update(
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
    delete_user,
}
