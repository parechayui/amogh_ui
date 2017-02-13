'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')(); 
var protractor = require('gulp-protractor').protractor; 
var taskListing = require('gulp-task-listing');
require('@propel/jumpstart-angular-test').testTasks(); 

gulp.task('help', taskListing);

gulp.task('e2e', function () {
  return gulp.src('./test/e2e/**/*_test.js')
    .pipe(protractor({
      configFile: './test/protractor.config.js'
    }));
}); 

gulp.task('jshint:ui', function() {
  return gulp.src('**app/**/*.js')
    .pipe($.jshint('.jshintrc'))
    .pipe($.jshint.reporter('jshint-stylish', { verbose: true }))
    .pipe($.jshint.reporter('fail'))
    .pipe($.size());
});

gulp.task('beautify:ui', function () {
  return gulp.src([
      '**app/**/*.js',
      '**test/ui/**/*.js',
      '**templates/**/*.html',
      '**app/locales/**/*.json'
    ])
    .pipe($.jsbeautifier({
      config: '.jsbeautifyrc'
    }))
    .pipe(gulp.dest('.'))
    .pipe($.size());
}); 

gulp.task('default', ["beautify:ui","jshint:ui","test.ui"]);
