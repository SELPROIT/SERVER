const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Product', {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,

        },
        ref_products: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        ref_final: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        brand: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        // favorite: {
        //     type: DataTypes.BOLEAN,
        //     allowNull: false,
        // },
        num_items: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        stock: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        

    },
        {
            timestamps: false,
        }
    );
};