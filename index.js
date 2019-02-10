module.exports = function(sails) {
    
    var getCryptoCurrency = require('./lib/getCryptoCurrency.js');
    
    return {
		getCryptoCurrency: getCryptoCurrency
    };
    
};