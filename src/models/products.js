const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Product', {
        id: {       //id unico de cada producto creado a partir del id de la subcategoria mas el numero de producto
            type: DataTypes.STRING,
            primaryKey: true,
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        brand: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        datasheet: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        rating: {///sacar el raiting, eso es para página
            type: DataTypes.FLOAT,
            allowNull: false,
        },

        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        deleteFlag: {
			// no "delete" porque es palabra reservada.
			type: DataTypes.BOOLEAN,
			defaultValue: false,
		},
    },
        {
            timestamps: false,
        }
    );
};