'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var scsslint = require('gulp-scss-lint');

var config = {
  paths: {
    styles: {
      sass: 'scss/',
      css: 'css/'
    }
  }
};

gulp.task('sass', ['scss-lint'], function() {

  return gulp.src('**/*.scss', {cwd: config.paths.styles.sass})
    .pipe(sass({
      outputStyle: 'nested',
      precision: 9
    }))
    .pipe(autoprefixer({
      browsers: [
        'last 2 versions',
        'ie >= 8',
        '> 1%'
      ],
      cascade: false
    }))
    .pipe(minifyCSS())
    .pipe(gulp.dest(config.paths.styles.css));

});


gulp.task('scss-lint', function() {

  return gulp.src(['**/*.scss', '!**/vendor/**/*.scss'], {cwd: config.paths.styles.sass})
    .pipe(scsslint({
      config: '.scss-lint.yml'
    }));

});


gulp.task('watch', function() {

  gulp.watch(config.paths.styles.sass + '**/*.scss', [
    'sass'
  ]);

});


gulp.task('default', ['sass']);
