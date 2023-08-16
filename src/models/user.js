const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define(
		'User',
		{
			id: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
				primaryKey: true,
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
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
			legal_ident: {
				type: DataTypes.STRING,
				allowNull: false, //DNI => cambiado x julita
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
				allowNull: true,
			},
			adress: {
				type: DataTypes.ARRAY(DataTypes.STRING),
			},
			interaction_history: {
				type: DataTypes.ARRAY(DataTypes.JSONB),
				allowNull: false,
			},
			buy_history: {
				type: DataTypes.ARRAY(DataTypes.JSONB),
				allowNull: false,
			},
			offers_history: {
				type: DataTypes.ARRAY(DataTypes.JSONB),
			},
			win_history: {
				type: DataTypes.ARRAY(DataTypes.JSONB),
				allowNull: false,
			},
			sub_part: {
				type: DataTypes.ARRAY(DataTypes.JSONB), //Array de objetos sujeto a cambios
				allowNull: false,
			},
			favorites: {
				type: DataTypes.ARRAY(DataTypes.JSONB),
				allowNull: false,
			},
		},
		{
			timestamps: false,
		}
	);
};
