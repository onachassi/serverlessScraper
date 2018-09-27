'use strict';
const { getPage, parsePage, saveRatingsToDDB } = require('./utils');


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
