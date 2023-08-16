const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Shop', {
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
    },
        {
            timestamps: false,
        }
    );
};





