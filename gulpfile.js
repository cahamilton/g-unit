'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var sassLint = require('gulp-sass-lint');

var config = {
  paths: {
    styles: {
      sass: 'scss/',
      css: 'css/'
    }
  },
  autoprefixer: {
    options: {
      browsers: [
        'last 2 versions',
        'ie >= 8',
        '> 1%'
      ],
      cascade: false
    }
  },
  sass: {
    options: {
      outputStyle: 'nested',
      precision: 9
    }
  }
};

gulp.task('sass', function() {
  return gulp.src(['**/*.scss', '!**/vendor/**/*.scss'], {cwd: config.paths.styles.sass})
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
    .pipe(sass(config.sass.options))
    .pipe(autoprefixer(config.autoprefixer.options))
    .pipe(minifyCSS())
    .pipe(gulp.dest(config.paths.styles.css));
});

gulp.task('watch', function() {
  gulp.watch(config.paths.styles.sass + '**/*.scss', ['sass']);
});

gulp.task('default', ['sass']);
