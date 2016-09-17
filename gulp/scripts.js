/**
 * The scripts task is launched at build, dev and test
 * time and at the change of any script file being
 * watched. It's this task that will trigger a Browser
 * Sync reload when needed.
 */

'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var browserSync = require('browser-sync');
var webpack = require('webpack-stream');

var $ = require('gulp-load-plugins')();

/* Defines JS files under development, detects errors
 * and  deploys to .tmp and updates the browser. */
function webpackWrapper(watch, test, callback) {

  /* Transpiles ES2015 to ES5 using ES2015 preset. */
  var webpackOptions = {
    watch: watch,
    module: {
      preLoaders: [{ test: /\.js$/, exclude: /node_modules/, loader: 'eslint-loader'}],
      loaders: [{ test: /\.js$/, exclude: /node_modules/, loaders: ['ng-annotate', 'babel-loader?presets[]=es2015']}]
    },
    output: { filename: 'index.module.js' }
  };

  /* When watching for file changes use a source-map to
   * translate compressed code back to source to detect
   * code changes. */
  if(watch) {
    webpackOptions.devtool = 'inline-source-map';
  }

  /* Logs errors in command window, triggers a browser
   * sync reload and stops watching for file changes. */
  var webpackChangeHandler = function(err, stats) {
    if(err) {
      conf.errorHandler('Webpack')(err);
    }
    $.util.log(stats.toString({
      colors: $.util.colors.supportsColor,
      chunks: true,
      hash: false,
      version: false
    }));
    browserSync.reload();
    if(watch) {
      watch = false;
      callback();
    }
  };

  /* JS files being developed, including test files
   * when required. */
  var sources = [
      path.join(conf.paths.src, '/app/index.module.js'),
      path.join(conf.paths.src, '/assets/js/*.js')
  ];
  if (test) {
    sources.push(path.join(conf.paths.src, '../test/unit/**/*.spec.js'));
  }

  /* Checks then moves JS files to .tmp for viewing. */
  return gulp.src(sources)
    .pipe(webpack(webpackOptions, null, webpackChangeHandler))
    .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/app')));
}

/**
 * Called from: [scripts > scripts:watch], [inject > inject]
 *              [scripts > scripts:test-watch]
 * Updates JS src files with watching disabled.
 */
gulp.task('scripts', function () {
  return webpackWrapper(false, false);
});

/**
 * Called from: [watch > watch]
 * Updates JS src files with watching enabled.
 */
gulp.task('scripts:watch', ['scripts'], function (callback) {
  return webpackWrapper(true, false, callback);
});

/**
 * Called from: [unit-tests > test]
 * Updates JS src and test files with watching disabled.
 */
gulp.task('scripts:test', function () {
  return webpackWrapper(false, true);
});

/**
 * Called from: [unit-tests > test:auto]
 * Updates JS src and test files with watching enabled.
 */
gulp.task('scripts:test-watch', ['scripts'], function (callback) {
  return webpackWrapper(true, true, callback);
});
