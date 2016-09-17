/**
 * The protractor task handles the downloading and
 * the launching of an embedded Webdriver with
 * Protractor for end-to-end automated testing.
 */

'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

/**
 * Called from: [e2e-tests > protractor:src],
 *              [e2e-tests > protractor:dist]
 * Updates the Selenium Webdriver.
 */
gulp.task('webdriver-update', $.protractor.webdriver_update);

/**
 * Start the Selenium Webdriver.
 */
gulp.task('webdriver-standalone', $.protractor.webdriver_standalone);

/* Runs Protractor tests in specified path.  */
function runProtractor (done) {
  var params = process.argv;
  var args = params.length > 3 ? [params[3], params[4]] : [];

  /* Run tests in defined path. */
  gulp.src(path.join(conf.paths.e2e, '/**/*.spec.js'))
    .pipe($.protractor.protractor({
      configFile: 'test/protractor.conf.js',
      args: args
    }))
    .on('error', function (err) {
      /* Make sure failed tests cause Gulp to exit non-zero. */
      throw err;
    })
    .on('end', function () {
      /* Close browser sync server. */
      browserSync.exit();
      done();
    });
}

/**
 * Updates the webdriver and previews the application
 * executing all protractor end-to-end tests.
 */
gulp.task('protractor', ['protractor:src']);

/**
 * Called from: [e2e-tests > protractor]
 * Updates the webdriver and previews the application
 * executing all protractor end-to-end tests.
 */
gulp.task('protractor:src', ['serve:e2e', 'webdriver-update'], runProtractor);

/**
 * Updates the webdriver and executes all protractor
 * end-to-end tests on the distributable.
 */
gulp.task('protractor:dist', ['serve:e2e-dist', 'webdriver-update'], runProtractor);
