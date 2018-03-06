const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
	.options({
		a: {
			demand: true,
			alias: 'address',
			describe: 'Address to fetch weather.',
			string: true
		}
	})
	.help()
	.alias('help', 'h')
	.argv;

var geoAPIurl = 'http://maps.googleapis.com/maps/api/geocode/json?address=';
var passedAdd = encodeURIComponent(argv.address);
var geoURL = geoAPIurl + passedAdd;
var weatherAPIurl = 'https://api.darksky.net/forecast';
var APIkey = 'd087458df0d4a8c2c58b7c62f8708782';
var weatherURL = `${weatherAPIurl}/${APIkey}/`;

axios.get(geoURL).then((response) => {
	if (response.data.status != 'OK') {
		throw new Error('Some Error..');
	}
	var lat = response.data.results[0].geometry.location.lat;
	var lng = response.data.results[0].geometry.location.lng;
	weatherURL = `${weatherURL}${lat},${lng}`;
	console.log(response.data.results[0].formatted_address);
	return axios.get(weatherURL);
}).then((response) => {
	var temp = response.data.currently.temperature;
	console.log('Temperature: ', temp);
}).catch((e) => {
	console.log(e.message);
});