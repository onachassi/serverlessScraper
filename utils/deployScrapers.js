// const AWS = require('aws-sdk');

module.exports = businessName => {
	const lambda = new AWS.Lambda({
		region: "us-west-1"
	});

	const params = {
		FunctionName: "yelp-scraper-dev-scrape",
		InvocationType: "RequestResponse",
		LogType: "Tail",
		Payload: JSON.stringify(businessName)
	}

	return lambda.invoke(params, function(error, data) {
		if (error) {
			console.log(JSON.stringify(error));
			return new Error(`Error Scraping: ${JSON.stringify(error)}`)
		} else {
			console.log(data)
			return JSON.stringify(data);
		}
	})
}