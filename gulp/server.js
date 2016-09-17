/**
 * Used to deploy a fully featured development server
 * through the use of Browser Sync.
 */

'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var browserSync = require('browser-sync');
var browserSyncSpa = require('browser-sync-spa');

var util = require('util');

/*
 * Starts a browser synchronization session on
 * a set base directory across defined browsers.
 */
function browserSyncInit(baseDir, browser) {

  browser = browser === undefined ? 'default' : browser;

  /* Determines location of bower libraries. */
  var routes = null;
  if(baseDir === conf.paths.src || (util.isArray(baseDir) && baseDir.indexOf(conf.paths.src) !== -1)) {
    routes = {
      '/bower_components': 'bower_components'
    };
  }

  /* Defines server details. */
  var server = {
    baseDir: baseDir,
    routes: routes
  };

  /* Starts a browser synchronization session on
   * a set base directory across defined browsers. */
  browserSync.instance = browserSync.init({
    startPath: '/',
    server: server,
    browser: browser
  });
}

/* Needed for angular apps. */
browserSync.use(browserSyncSpa({
  selector: '[ng-app]'
}));

/**
 * Preview application and watches for file changes.
 */
gulp.task('serve', ['watch'], function () {
  browserSyncInit([path.join(conf.paths.tmp, '/serve'), conf.paths.src]);
});

/**
 * Build distributable and preview application.
 */
gulp.task('serve:dist', ['build'], function () {
  browserSyncInit(conf.paths.dist);
});

/**
 * Called from: [e2e-tests > protractor:src]
 * Preview application with end-to-end testing
 * after injecting all styles and scripts.
 */
gulp.task('serve:e2e', ['inject'], function () {
  browserSyncInit([conf.paths.tmp + '/serve', conf.paths.src], []);
});

/**
 * Called from: [e2e-tests > protractor:dist]
 * Build distributable and preview application
 * with end-to-end testing.
 */
gulp.task('serve:e2e-dist', ['build'], function () {
  browserSyncInit(conf.paths.dist, []);
});
