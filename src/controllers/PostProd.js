const { Product, Sub_category } = require('../db');
const productCloudinaryConfig = require('../utils/productCloudinaryConfig');

const postProductC = async ({
	// id,
	name,
	brand,
	image,
	description,
	datasheet,
	rating,
	stock,
	price,
	ref_subCategory,
}) => {
	const cloudImage = await productCloudinaryConfig(image);
	const cloudDatasheet = await productCloudinaryConfig(datasheet);
	let product = {
		id: null,
		name,
		brand,
		image: cloudImage,
		description,
		datasheet: cloudDatasheet,
		rating,
		stock,
		price,
	};
	const foundProd = await Product.findAll({
		where: { SubCategoryId: ref_subCategory },
	});
	const prodLen = foundProd.length;
	console.log('prodLen', prodLen);
	console.log('foundProd', foundProd);

	if (prodLen === 0) {
		product.id = `${ref_subCategory}1`;
	} else {
		const newID = prodLen + 1;
		product.id = `${ref_subCategory}${newID}`;
	}

	const foundRef = await Sub_category.findOne({
		where: { id: ref_subCategory },
	});

	if (foundRef.id) {
		const newProd = await Product.create(product);
		await newProd.setSub_category(foundRef);

		console.log('newProd', newProd);
		return newProd;
	} else {
		console.error('Could not find Category');
		return null;
	}
};

module.exports = { postProductC };
