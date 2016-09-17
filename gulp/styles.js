/**
 *  The styles task is launched at build, dev and test time
 *  and at the watch of any change on a style file. It's this
 *  task which will trigger a Browser Sync reload when needed.
 */

'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

var wiredep = require('wiredep').stream;
var _ = require('lodash');

/**
 * Called from: [watch > watch]
 * Sends collected css files from the styles gulp task
 * and sends them into browserSync.stream, injecting
 * the css into the page.
 */
gulp.task('styles-reload', ['styles'], function() {
  return buildStyles()
    .pipe(browserSync.stream());
});

/**
 * Called from: [inject > inject], [styles > styles-reload]
 * Calls buildStyles below to inject scss files into index.scss.
 */
gulp.task('styles', function() {
  return buildStyles();
});

var buildStyles = function() {

  var sassOptions = {
    style: 'expanded'
  };

  /* Paths to include & exclude */
  var injectFiles = gulp.src([
    path.join(conf.paths.src, '/assets/css/**/*.scss'),
    path.join('!' + conf.paths.src, '/assets/css/index.scss')
  ], { read: false });

  /* Settings for injecting scss files into index.scss */
  var injectOptions = {
    transform: function(filePath) {
        filePath = filePath.replace(conf.paths.src + '/assets/css/', '');
      return '@import "' + filePath + '";';
    },
    starttag: '// injector',
    endtag: '// endinjector',
    addRootSlash: false
  };

  /* Injects scss files into index.scss */
  return gulp.src([
    path.join(conf.paths.src, '/assets/css/index.scss')
  ])
    .pipe($.inject(injectFiles, injectOptions))                             // Injection with gulp-inject
    .pipe(wiredep(_.extend({}, conf.wiredep)))                              // Injection with Wiredep
    .pipe($.sourcemaps.init())                                              // Start of sourcemap
    .pipe($.sass(sassOptions)).on('error', conf.errorHandler('Sass'))       // Style pre-processing
    .pipe($.autoprefixer()).on('error', conf.errorHandler('Autoprefixer'))  // Autoprefixer with gulp-autoprefixer
    .pipe($.sourcemaps.write())                                             // End of sourcemap
    .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/app/')))              // Writing files in .tmp/serve
    .pipe(browserSync.reload({ stream: true }));                            // Reloading files in Browser Sync if present
};
