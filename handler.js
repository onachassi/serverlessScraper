'use strict';
const { getPage, parsePage, saveRatingsToDDB, deployScrapers } = require('./utils');


module.exports.scrape = async (event, context) => {

	await getPage(event)
		.then(page => parsePage(page))
		.then(yelpData => saveRatingsToDDB(yelpData, event))


	return {
		statusCode: 200,
		body: JSON.stringify({
			message: `Scraped ${event}`,
		}),
	};

// Use this code if you don't use the http event with the LAMBDA-PROXY integration
// return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.launch_scrapers = async (event, context) => {

	// List business names

	const list = [
		'in-n-out-burger-encinitas',
		'punch-bowl-social-san-diego-san-diego',
		'pamplemousse-grille-solana-beach',
		'cucina-enoteca-del-mar-del-mar-2'
	]

	list.forEach(business => {
		deployScrapers(business);
	})


	return {
		statusCode: 200,
		body: JSON.stringify({
			message: `Scraped ${event}`,
		}),
	};

// Use this code if you don't use the http event with the LAMBDA-PROXY integration
// return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};