const request = require('request');
var Promise = require('bluebird');

/**
 * 
 * https://alternative.me/crypto/api/
 * 
 */

module.exports = function getCryptoCurrency(cryptoCode) {
    return new Promise(function(resolve, reject) {
		const options = {
            method: 'GET',
            uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/info',
            qs: {
                start: 1,
                limit: 5000,
                convert: 'USD',
                symbol:cryptoCode
            },
            headers: {
                'X-CMC_PRO_API_KEY': '7f94f05a-624b-4c67-849b-e63841e684a9'
            },
            json: true,
            gzip: true
        }

        options = {
            method: 'GET',
            uri: 'https://api.alternative.me/v2/ticker/bitcoin/'
        }
        ​
        request(options)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (err) {
            console.log(err);
        })
		
		// if something fails, reject(new Error('bad bad'));
	});
};