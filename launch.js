const requests = require('request-promise');
const AWS = require('aws-sdk');
// scrape: yelp-scraper-dev-scrape

const list = [
	'in-n-out-burger-encinitas',
	'punch-bowl-social-san-diego-san-diego',
	'pamplemousse-grille-solana-beach',
	'cucina-enoteca-del-mar-del-mar-2'
]

function deployScraper(businessName) {
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

function swarm(arr) {
	arr.forEach(business => {
		deployScraper(business);
	})

}

swarm(list);