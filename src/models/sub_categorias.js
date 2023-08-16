const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Sub_category', {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        // sub_categoria: {
        //     type: DataTypes.REAL,
        //     allowNull: false,
        // },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
        {
            timestamps: false,
        }
    );
};