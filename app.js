const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');

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

// console.log(argv);

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
	if (errorMessage) {
		console.log(errorMessage);
	} else {
		console.log(JSON.stringify(results, undefined, 2));
	} 

});


// const googleAPIurl = 'http://maps.googleapis.com/maps/api/geocode/json?address=';
// var add = encodeURIComponent('68 jessore road');
// // console.log(add);
// // add = googleAPIurl + add;
// // console.log(add);
// request({
// 	url: `${googleAPIurl}${add}`,
// 	json: true
// }, (error, response, body) => {
// 	console.log(`Address: ${body.results[0].formatted_address}`);
// 	console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
// 	console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
// });