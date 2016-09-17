/**
 * The inject task is intended to centralize all modifications
 * on the index.html in the development phase.
 */

'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var $ = require('gulp-load-plugins')();

var wiredep = require('wiredep').stream;
var _ = require('lodash');

var browserSync = require('browser-sync');

/**
 * Called from: [watch > watch]
 * Reloads browser synchronization.
 */
gulp.task('inject-reload', ['inject'], function() {
  browserSync.reload();
});

/**
 * Called from: [watch > watch], [inject > inject-reload],
 *              [build > html], [server > serve:e2e]
 * Lists all the CSS files in the head of the page and all
 * the JS files in the body of the page below the app.
 */
gulp.task('inject', ['scripts', 'styles'], function () {

  /* Inject CSS files, ignoring third party styles that
   * should not be modified.
   */
  var injectStyles = gulp.src([
    path.join(conf.paths.tmp, '/serve/app/**/*.css'),
    path.join('!' + conf.paths.tmp, '/serve/app/vendor.css')
  ], { read: false });

  /* Inject all Angular modules. */
  var injectScripts = gulp.src([
    path.join(conf.paths.tmp, '/serve/app/**/*.module.js')
  ], { read: false });

  /* Set paths to ignore. */
  var injectOptions = {
    ignorePath: [conf.paths.src, path.join(conf.paths.tmp, '/serve')],
    addRootSlash: false
  };

  /* Inject CSS & JS, using wiredep for Bower dependencies */
  return gulp.src(path.join(conf.paths.src, '/*.html'))
    .pipe($.inject(injectStyles, injectOptions))
    .pipe($.inject(injectScripts, injectOptions))
    .pipe(wiredep(_.extend({}, conf.wiredep)))
    .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve')));
});
