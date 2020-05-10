let gulp = require('gulp');
let rename = require('gulp-rename');
let sass = require('gulp-sass');
let concat = require('gulp-concat');
let uglify = require('gulp-uglify-es').default;
let htmlmin = require('gulp-htmlmin');
let cleanCSS = require('gulp-clean-css');

// js files array 
let jsArray = [];

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

gulp.task('js-minify', () => {
    return gulp.src(jsArray)
      .pipe(concat('main.js')) // file you are concatinating the three js files into
      .pipe(uglify()) // minimize (make ugly - uglify) everything
      .pipe(gulp.dest('dist/js/')) // destination folder
  })

gulp.task('html-minify', () => {
return gulp.src('src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
});

gulp.task('minify-css', () => {
    return gulp.src('./src/css/style.css')
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('dist/css/'));
  });

