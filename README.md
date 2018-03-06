
# Weather App
 A Node.js command line app for querying weather info for a location.

## Usage
App has two versions, one uses the request library and the other uses promises for querying.
In any case you need to register and get the API key from  [Forecast.io](https://darksky.net/dev) and add it to the respective js file.
#### Without promise:
##### Add API key to weather/weather.js
```
node app.js -a <address>
```

#### With promise:
  ##### Add API key to app-promise.js
```
node app-promise.js -a <address>
```
### Pass address in place of \<address>

#### For command line help:
```
node app.js --help
node app-promise.js --help
```

## Dependencies

1. [Yargs](https://www.npmjs.com/package/yargs "Yargs" ) : To parse command line arguments.
2.[Request](https://www.npmjs.com/package/request "Request"): To make http calls.
3.[Axios](https://www.npmjs.com/package/axios "Axios" ): Promise based http client