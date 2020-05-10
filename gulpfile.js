let gulp = require('gulp');
let rename = require('gulp-rename');
let sass = require('gulp-sass');
let concat = require('gulp-concat');

// final tasks 
gulp.task('sass', () => {
    return gulp.src('./src/css/style.scss')
      .pipe(sass())
      .pipe(rename('style.css'))
      .pipe(gulp.dest('./src/css/'));
  });

  gulp.task('sass-watch', () => {
    return gulp.watch('src/css/**/*.scss', gulp.task('sass'));
  }) // double asterisk means anything within any file under scss
