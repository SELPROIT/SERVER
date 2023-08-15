const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Category', {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        category: {
            type: DataTypes.ARRAY(DataTypes.JSONB),
            allowNull: false,
        },
    },
        {
            timestamps: false,
        }
    );
};
