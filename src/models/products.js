const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Products', {
        id: {       //id unico de cada producto creado a partir del id de la subcategoria mas el numero de producto
            type: DataTypes.STRING,
            primaryKey: true,
        }, 
        ref_category: {
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