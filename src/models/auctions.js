const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Auction', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        base_price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        close_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    },
        {
            timestamps: false,
        }
    );
};





