require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/selpro`, {
    logging: false,
    native: false,
});
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

const { Category, Product, Sub_category, Auction, Auction_bid, User, Invert_auction} = sequelize.models;
// Relaciones n*1

Category.hasMany(Sub_category);
Sub_category.hasMany(Product);
Sub_category.belongsTo(Category);
Product.belongsTo(Sub_category);
Auction.hasMany(Product);
Product.belongsTo(Auction);


//Relaciones n*m
Product.belongsToMany(Invert_auction, { through: 'main_auction' });
Invert_auction.belongsToMany(Product, { through: 'main_auction' });
Product.belongsToMany(User, { through: 'favorites' });
User.belongsToMany(Product, { through: 'favorites' });
Auction_bid.belongsToMany(Auction, { through: 'auction_offer' });
Auction.belongsToMany(Auction_bid, { through: 'auction_offer' });
Auction_bid.belongsToMany(Invert_auction, { through: 'invert_auction_offer' });
Invert_auction.belongsToMany(Auction_bid, { through: 'invert_auction_offer' });



module.exports = {
	...sequelize.models,
	conn: sequelize,
};
