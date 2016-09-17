/**
 * Watch is used to list files and indicate which tasks to
 * launch on a change. To gain performance the function version
 * is used, enabling a function to be called on every change.
 * As there is an event object that describes the change, we
 * can be more specific.
 */

'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var browserSync = require('browser-sync');

/*
 * Detects if a file has been changed or if a new file has
 * been created to determine whether to reload or inject.
 */
function isOnlyChange(event) {
  return event.type === 'changed';
}

/**
 * Called from: [server > serve]
 * Root HTML files and the bower.json are watched to trigger
 * injection in order to react on modification in the index.html
 * or an modification of the list of the dependencies.
 * All HTML modifications trigger a Browser Sync.
 */
gulp.task('watch', ['scripts:watch', 'inject'], function () {

  gulp.watch([path.join(conf.paths.src, '/*.html'), 'bower.json'], ['inject-reload']);

  gulp.watch([
    path.join(conf.paths.src, '/assets/css/**/*.css'),
    path.join(conf.paths.src, '/assets/css/**/*.scss')
  ], function(event) {
    if(isOnlyChange(event)) {
      gulp.start('styles-reload');
    } else {
      gulp.start('inject-reload');
    }
  });

  gulp.watch(path.join(conf.paths.src, '/app/**/*.html'), function(event) {
    browserSync.reload(event.path);
  });
});
