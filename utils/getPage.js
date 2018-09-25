const request = require('request-promise')

module.exports = (bizName) => {

	// https://www.yelp.com/biz/lofty-coffee-encinitas-6	
	const url = `https://www.yelp.com/biz/${bizName}`


	return request({ method: 'GET', url: url})

}

// const request = require("request-promise");

// module.exports = businessName => {
//   // https://www.yelp.com/biz/the-last-bookstore-los-angeles
//   const url = `https://www.yelp.com/biz/${businessName}`;
//   return request({ method: "GET", url: url });
// };