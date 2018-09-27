const cheerio = require ('cheerio')

module.exports = page => {
	try {
		const $ = cheerio.load(page);
		const businessName = $(".biz-page-title").text().trim();
		const rating = $(".rating-info .i-stars")
			.attr('title')
			.trim()
			.split(" ")[0];
		const reviewCount = $(".rating-info .review-count")
			.text()
			.trim()
			.split(" ")[0];

		const yelpData = {
			businessName,
			rating,
			reviewCount
		};

		return Promise.resolve(yelpData);	
	} catch (err) {
		return Promise.reject(`Error Parsing: ${JSON.stringify(err)}`)
	}
}