const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Invert_auction', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    datasheet: {
      type: DataTypes.STRING,
      allowNull: false
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    base_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    target_quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    close_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    invert: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    subCategory: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true
    },
    deleteFlag: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    authorize: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    }
  },
    {
      timestamps: false,
    }
  );
};