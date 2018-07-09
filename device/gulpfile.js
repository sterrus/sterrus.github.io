var gulp = require('gulp');
var server = require('browser-sync').create();
var pump = require('pump');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var minify = require('gulp-csso');

gulp.task('serve', function() {
  server.init({
    server: './',
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch('*.html').on('change', server.reload);
  gulp.watch('css/*.css').on('change', server.reload);
});


gulp.task('minjs', function () {
  pump([
    gulp.src('js/main.js'),
    uglify(),
    rename('main.min.js'),
    gulp.dest('js')
  ]);
});

gulp.task("style", function () {
  gulp.src('css/style.css')
    .pipe(plumber())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(minify())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('css'))
});
