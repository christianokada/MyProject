var config = require('./config.js');

deployTests = ["./spam1_spec.js"];

exports.config = {
// The address of a running selenium server.
seleniumAddress: 'http://localhost:4444/wd/hub',
// Capabilities to be passed to the webdriver instance.
capabilities: {
    'browserName': 'chrome', //firefox, internet explorer, safari 
},

baseUrl: config.url,

specs: runTests(),

jasmineNodeOpts: {
    showColors: true,
    isVerbose: true,
    defaultTimeoutInterval: 600000
  }
};

function runTests() {
	return deployTests;
}