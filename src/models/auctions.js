const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Auction', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        // product_name: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // },
        initial_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        final_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    },
        {
            timestamps: false,
        }
    );
};





