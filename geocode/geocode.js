const request = require('request');

var geocodeAddress = (address, callback) => {

	const geoAPIurl = 'http://maps.googleapis.com/maps/api/geocode/json?address=';
	address = encodeURIComponent(address);
	request({
		url: geoAPIurl + address,
		json: true
	}, (error, response, body) => {
		if (error) {
			callback('Error: ' + error);
		} else if (body.status != 'OK') {
			callback('Error: ' + body.status);
		} else {
			callback(undefined, {
				Address: body.results[0].formatted_address,
				Latitude: body.results[0].geometry.location.lat,
				Longitude: body.results[0].geometry.location.lng
			});
		}
	});
};

module.exports = {
	geocodeAddress
};