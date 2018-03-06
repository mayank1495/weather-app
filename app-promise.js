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
var weatherURL = `${weatherURL}/${APIkey}/`;