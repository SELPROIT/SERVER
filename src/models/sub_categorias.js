const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Sub_category', {
        id: {
            type: DataTypes.REAL,
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
    },
        {
            timestamps: false,
        }
    );
};