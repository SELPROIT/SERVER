const { Invert_auction } = require('../../db')

const put_inv_auc_controller = async (
    id,
    base_price,
    target_quantity,
    total,
    close_date,
    deleteFlag,
    authorize
) => {
    const inv_auction = await Invert_auction.findOne({ where: { id: id } })
    if (!inv_auction) 'Inverted auction not found'

    const changed_inv_auction = {}
    if (!!base_price) {
        changed_inv_auction.base_price = base_price
    }
    if (!!target_quantity) {
        changed_inv_auction.target_quantity = target_quantity
    }
    if (!!total) {
        changed_inv_auction.total = total
    }
    if (close_date !== undefined) {
        const parsedCloseDate = new Date(close_date);
        if (isNaN(parsedCloseDate)) {
            throw new Error('Invalid date format for close_date');
        }
        changed_inv_auction.close_date = parsedCloseDate;
    }
    if (deleteFlag !== undefined || deleteFlag !== null) {
        changed_inv_auction.deleteFlag = deleteFlag
    }
    if (authorize !== undefined || authorize !== null) {
        changed_inv_auction.authorize = authorize
    }

    const [updatedRows] = await Invert_auction.update(changed_inv_auction, {
        where: {
            id: id
        }
    });

    if (updatedRows > 0) {
        await inv_auction.reload()
        return inv_auction;
    }
    return 'Unable to update inverted auction'

}

module.exports = {
    put_inv_auc_controller,
}