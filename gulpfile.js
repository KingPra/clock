const gulp = require('gulp');
const sass = require('gulp-sass');
const browser = require('gulp-browser');
const strip = require('gulp-strip-comments');

gulp.task('default', ['html', 'css', 'js']);

gulp.task('html', () => {
  gulp.src('index.html')
  .pipe(strip())
  .pipe(gulp.dest('public/'))
});

gulp.task('css', () => {
  gulp.src('style.scss')
  .pipe(sass())
  .pipe(strip.text())
  .pipe(gulp.dest('public/'))
});

gulp.task('js', () => {
  .pipe(strip())
  .pipe(gulp.dest('public/'))
});

gulp.task('watch', ['default'] () => {
  gulp.watch('*.html', ['html']);
})
