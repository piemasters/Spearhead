'use strict';

exports.config = {

  baseUrl: 'http://localhost:3000',

  framework: 'jasmine',

  // Capabilities to be passed to the webdriver instance.
  /*multiCapabilities: [{
    'browserName': 'phantomjs'
  }, {
    'browserName': 'chrome'
  }],*/

  capabilities: {
    'browserName': 'chrome'
  },

  // Spec patterns are relative to the current working directory
  specs: [
    'e2e/**/*.spec.js'
  ],

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
  }
};
