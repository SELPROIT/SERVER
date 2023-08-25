const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Invert_auction', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    image: { //del producto
      type: DataTypes.STRING,
      allowNull: false
    },
    brand: { //del producto
      type: DataTypes.STRING,
      allowNull: false
    },
    description: { //del producto
      type: DataTypes.STRING,
      allowNull: false
    },
    datasheet: { //del producto
      type: DataTypes.STRING,
      allowNull: false
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    total: { 
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price: {//precio actual, el más bajo
      type: DataTypes.INTEGER,
      allowNull: false
    },
    base_price: { //precio base 
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    close_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    subCategory: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true
    },
    status:{
      type: DataTypes.ENUM("Pendiente", "Activa", "Eliminada", "Terminada"), //pendiente es cuando el admin tiene que aceptar la subasta propuesta
      defaultValue: "Pendiente"
    },
    deleteFlag: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    authorize: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    }, 
    target_quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    invert: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    }
  },
    {
      timestamps: false,
    }
  );
};