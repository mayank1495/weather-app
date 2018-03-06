const request = require('request');

const weatherURL = 'https://api.darksky.net/forecast';
const APIkey = ''; // ADD API KEY

var weatherRequest = (lat, lng, callback) => {
	
	console.log(`${weatherURL}/${APIkey}/${lat},${lng}`);

	request({
		url: `${weatherURL}/${APIkey}/${lat},${lng}`,
		json: true
	}, (error, response, body) => {
		if (error) {
			callback('Error: ' + error);
		} else {
			// console.log(url);
			callback(undefined, {
				temp: body.currently.temperature
			});
		}
	});
};

module.exports = {
	weatherRequest
};