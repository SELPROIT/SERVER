const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('User', {
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		image: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		num_ident: {
			type: DataTypes.FLOAT,
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
			type: DataTypes.FLOAT,
			allowNull: true,
		},
		RUT_image: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		commerce_chamber: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		legal_ident: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		commercial_references: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		sector: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		CIIU: {
			type: DataTypes.FLOAT,
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
			type: DataTypes.ARRAY(DataTypes.STRING),
			allowNull: false,
		},
		adress: {
			type: DataTypes.ARRAY(DataTypes.STRING),
			allowNull: false,
		},
		interaction_history: {
			type: DataTypes.ARRAY(DataTypes.JSONB),
			allowNull: true,
		},
		buy_history: {
			type: DataTypes.ARRAY(DataTypes.JSONB),
			allowNull: true,
		},
		offers_history: {
			type: DataTypes.ARRAY(DataTypes.JSONB),
			allowNull: true,
		},
		win_history: {
			type: DataTypes.ARRAY(DataTypes.JSONB),
			allowNull: true,
		},
		curr_auc: {
			type: DataTypes.ARRAY(DataTypes.JSONB), //Array de objetos sujeto a cambios
			allowNull: true,
		},
		deleteFlag: {
			// no "delete" porque es palabra reservada.
			type: DataTypes.BOOLEAN,
			defaultValue: false,
		},

	}, { timestamps: false, });
};
