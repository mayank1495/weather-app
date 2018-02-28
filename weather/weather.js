const request = require('request');

const weatherURL = 'https://api.darksky.net/forecast';
const APIkey = 'd087458df0d4a8c2c58b7c62f8708782';

var weatherRequest = (lat, lng, callback) => {

	request({
		url: `${weatherURL}/${APIkey}/${lat},${lng}`,
		json: true
	}, (error, response, body) => {
		if (error) {
			callback('Error: ' + error);
		} else {
			callback(undefined, {
				temp: body.currently.temperature
			});
		}
	});
};

module.exports = {
	weatherRequest
};