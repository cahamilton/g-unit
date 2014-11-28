'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');

var config = {
  paths: {
    styles: {
      sass: 'scss/',
      css: 'css/'
    }
  }
};

gulp.task('sass', function() {

  return gulp.src(config.paths.styles.sass + '**/*.scss')
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

gulp.task('default', ['sass']);
