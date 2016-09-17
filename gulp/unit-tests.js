/**
 * This test task is targeted to launch a fully configured
 * Karma / Jasmine / PhantomJS configuration.
 */

'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var karma = require('karma');

var pathSrcHtml = [
  path.join(conf.paths.src, '/**/*.html')
];

var pathSrcJs = [
  path.join(conf.paths.tmp, '/serve/app/index.module.js')
];

/*  */
function runTests (singleRun, done) {

  var reporters = ['progress'];
  var preprocessors = {};

  /* Allows templates to be loaded inside tests which
   * is needed in directive tests especially. */
  pathSrcHtml.forEach(function(path) {
    preprocessors[path] = ['ng-html2js'];
  });

  /* Initialize code coverage to display results. */
  if (singleRun) {
    pathSrcJs.forEach(function(path) {
      preprocessors[path] = ['coverage'];
    });
    reporters.push('coverage');
  }

  /* Configure settings for testing. */
  var localConfig = {
    configFile: path.join(__dirname, '/../test/karma.conf.js'),
    singleRun: singleRun,
    autoWatch: !singleRun,
    reporters: reporters,
    preprocessors: preprocessors
  };

  /* Start Karma test server. */
  var server = new karma.Server(localConfig, function(failCount) {
    done(failCount ? new Error("Failed " + failCount + " tests.") : null);
  });
  server.start();
}

/**
 * Execute unit tests and close browser once complete.
 */
gulp.task('test', ['scripts:test'], function(done) {
  runTests(true, done);
});

/**
 * Execute unit tests and rerun on code changes.
 */
gulp.task('test:auto', ['scripts:test-watch'], function(done) {
  runTests(false, done);
});
