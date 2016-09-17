/**
 *  This file contains the variables used in other gulp files
 *  which defines tasks.
 */

var gutil = require('gulp-util');

/**
 *  The main paths of the project, handle these with care.
 */
exports.paths = {
  src: 'src',
  dist: 'dist',
  tmp: '.tmp',
  e2e: 'test/e2e'
};

/**
 *  Wiredep is the lib which injects bower dependencies into
 *  the project. Mainly used to inject script tags in the
 *  index.html, but also used to inject css preprocessor deps
 *  and js files in karma.
 */
exports.wiredep = {
  /* exclude: [/\/bootstrap\.js$/, /\/bootstrap-sass\/.*\.js/, /\/bootstrap\.css/], */
  directory: 'bower_components'
};

/**
 *  Common implementation for an error handler of a Gulp plugin.
 */
exports.errorHandler = function(title) {
  'use strict';

  return function(err) {
    gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
    this.emit('end');
  };
};
