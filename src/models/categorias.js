
//categorias

const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Categorias', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    },
  {
    timestamps: false,
  }
);
};


// sub-categorias

const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Sub-categorias', {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        sub_categoria: {
            type: DataTypes.REAL,
            allowNull: false,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
        {
            timestamps: false,
        }
    );
};


// productos

const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Productos', {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,

        },
        ref_producto: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        marca: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    },
        {
            timestamps: false,
        }
    );
};