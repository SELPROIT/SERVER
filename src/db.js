require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');

// const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;

// const sequelize = new Sequelize(`postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?options=project%3D${ENDPOINT_ID}`, {
// 	logging: false,
// 	native: false,
// 	dialectOptions: {
// 		ssl: {
// 			rejectUnauthorized: false,
// 		},
// 	}
// });
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
	`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/selpro`,
	{
		logging: false,
		native: false,
	}
);

const basename = path.basename(__filename);
const modelDefiners = [];
fs.readdirSync(path.join(__dirname, '/models'))
	.filter(
		(file) =>
			file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
	)
	.forEach((file) => {
		modelDefiners.push(require(path.join(__dirname, '/models', file)));
	});

modelDefiners.forEach((model) => model(sequelize));
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
	entry[0][0].toUpperCase() + entry[0].slice(1),
	entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const { Category, Product, Sub_category, Auction, Auction_bid, User, Invert_auction } = sequelize.models;
// Relaciones n*1

Category.hasMany(Sub_category);
Sub_category.hasMany(Product);

Sub_category.belongsTo(Category);
Product.belongsTo(Sub_category);

Product.hasMany(Auction);
Auction.belongsTo(Product);

Product.hasOne(Invert_auction);
Invert_auction.belongsTo(Product);

Auction.hasMany(Auction_bid);
Auction_bid.belongsTo(Auction);

Invert_auction.hasMany(Auction_bid);
Auction_bid.belongsTo(Invert_auction);

// User.hasMany(Auction);

// User.hasMany(Invert_auction);

User.hasMany(Auction_bid);
Auction_bid.belongsTo(User);


//Relaciones n*m
// User.belongsToMany(Auction, { through: 'favorites' });

// Invert_auction.belongsToMany(User, { through: 'favorites' });

Auction.belongsToMany(User, {through: 'UserAuctions'});
Auction.belongsToMany(User, { through: 'UserAuctions' });

Invert_auction.belongsToMany(User, {through: 'UserInvAuctions'});
User.belongsToMany(Invert_auction, { through: 'UserInvAuctions' });



module.exports = {
	...sequelize.models,
	conn: sequelize,
};
