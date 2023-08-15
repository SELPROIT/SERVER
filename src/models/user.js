const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Users', {
        id: {
            type: DataTypes.UUIDV4,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        num_ident: {
            type: DataTypes.REAL,
            allowNull: false,
        },
        user_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        supplier: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        RUT: {
            type: DataTypes.REAL,
            allowNull: false,
        },
        RUT_image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        commerce_chamber: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        DNI: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        commercial_references: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        sector: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        CIIU: {
            type: DataTypes.REAL,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        id_subcat: {
            type: DataTypes.ARRAY,
            allowNull: true,
        },
        adress: {
            type: DataTypes.ARRAY,
            allowNull: false,
        },
        interaction_history: {
            type: DataTypes.ARRAY,
            allowNull: false,
        },
        buy_history: {
            type: DataTypes.ARRAY,
            allowNull: false,
        },
        offers_history: {
            type: DataTypes.ARRAY,
            allowNull: false,
        },
        win_history: {
            type: DataTypes.ARRAY,
            allowNull: false,
        },
        sub_part: {
            type: DataTypes.ARRAY,
            allowNull: false,
        },
        favorites: {
            type: DataTypes.ARRAY,
            allowNull: false,
        },
    },
        {
            timestamps: false,
        }
    );
};