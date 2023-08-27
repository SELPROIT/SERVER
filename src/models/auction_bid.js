const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Auction_bid', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        proposed_price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        total: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        deleteFlag: {
			// no "delete" porque es palabra reservada.
			type: DataTypes.BOOLEAN,
			defaultValue: false,
		}
    },
        {
            timestamps: false,
        }
    );
};





