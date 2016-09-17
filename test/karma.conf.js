'use strict';

var path = require('path');
var conf = require('../gulp/conf');

var _ = require('lodash');
var wiredep = require('wiredep');

var pathSrcHtml = [
  path.join(conf.paths.src, './**/*.html')
];

function listFiles() {
  var wiredepOptions = _.extend({}, conf.wiredep, {
    dependencies: true,
    devDependencies: true,
    "src/**/*.js": true,
    "test/unit/**/*.spec.js": true
  });

  var patterns = wiredep(wiredepOptions).js
    .concat([
      path.join(conf.paths.tmp, '/serve/app/index.module.js'),
    ])
    .concat(pathSrcHtml);

  var files = patterns.map(function(pattern) {
    return {
      pattern: pattern
    };
  });

  files.push({
    pattern: path.join(conf.paths.src, '/assets/**/*'),
    included: false,
    served: true,
    watched: false
  });
  return files;
}

module.exports = function(config) {

  var configuration = {

    files: listFiles(),

	// Continuous Integration mode
	// if true, Karma captures browsers, runs the tests and exits
	singleRun: true,

	// enable / disable watching file and executing tests whenever any file changes
	autoWatch: false,

	ngHtml2JsPreprocessor: {
	  // strip this from the file path
	  stripPrefix: conf.paths.src + '/',
	  moduleName: 'gulp'
	},

	// level of logging
	// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
	logLevel: config.LOG_INFO,

	// test framework to use
	frameworks: ['phantomjs-shim', 'jasmine'],

	// start these browsers
	// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    //browsers: ['PhantomJS', 'Chrome'],
	browsers: ['Chrome'],

	plugins : [
	  'karma-phantomjs-launcher',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-ie-launcher',
	  'karma-phantomjs-shim',
	  'karma-coverage',
	  'karma-jasmine',
	  'karma-ng-html2js-preprocessor'
	],

	coverageReporter: {
	  type : 'html',
	  dir : 'coverage/'
	},

	// test results reporter to use
	// possible values: 'dots', 'progress'
	// available reporters: https://npmjs.org/browse/keyword/karma-reporter
	reporters: ['progress'],

	proxies: {
	  '/assets/': path.join('/base/', conf.paths.src, '/assets/')
	},

	// enable / disable colors in the output (reporters and logs)
	colors: true,

	// base path to directory root, meaning all files will be loaded relative to the root directory.
    basePath: '../',
  };

  // This is the default preprocessors configuration for a usage with Karma cli
  // The coverage preprocessor is added in gulp/unit-test.js only for single tests
  // It was not possible to do it there because karma doesn't let us now if we are
  // running a single test or not
  configuration.preprocessors = {};
  pathSrcHtml.forEach(function(path) {
    configuration.preprocessors[path] = ['ng-html2js'];
  });

  // This block is needed to execute Chrome on Travis
  // If you ever plan to use Chrome and Travis, you can keep it
  // If not, you can safely remove it
  // https://github.com/karma-runner/karma/issues/1144#issuecomment-53633076
  if(configuration.browsers[0] === 'Chrome' && process.env.TRAVIS) {
    configuration.customLaunchers = {
      'chrome-travis-ci': {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    };
    configuration.browsers = ['chrome-travis-ci'];
  }

  config.set(configuration);
};
