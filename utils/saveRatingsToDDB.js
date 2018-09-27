const uuid = require("uuid");
const AWS = require("aws-sdk");

const dynamoDB = new AWS.DynamoDB.DocumentClient();

module.exports = (yelpData, businessName) => {
	const date = JSON.stringify(new Date());
	const params = {
		TableName: process.env.DYNAMODB_TABLE,
		Item: {
			id: uuid.v1(),
			businessName: yelpData.businessName,
			rating: yelpData.rating,
			reviewCount: yelpData.reviewCount,
			searchName: businessName,
			scrapedAt: date
		}
	};
	dynamoDB.put(params, error => {
		if (error) {
			console.log(`Error saving to DynamoDB: ${JSON.stringify(error)}`)
			return Promise.reject(`Error saving to DynamoDB: ${JSON.stringify(error)}`)
		} else {
			return Promise.resolve(params.Item)
		}
	})
};