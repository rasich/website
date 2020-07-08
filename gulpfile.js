var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');
var tinypng = require('gulp-tinypng-compress');
var webp = require('gulp-webp');

gulp.task('minify-css', function(done) {
  return gulp.src('./src/css/*.css')
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(gulp.dest('dist/css/'))

  done();
});

gulp.task('move-js', function(done) {
  return gulp.src('./src/js/*.js')
  .pipe(gulp.dest('dist/js/'))

  done();
});

gulp.task('htmlmin', function(done) {
  return gulp.src('./src/*.html')
  .pipe(htmlmin({ 
    collapseWhitespace: true,
    removeComments: true
  }))
  .pipe(gulp.dest('dist/'))

  done();
});

gulp.task('fonts', function(done) {
  return gulp.src('./src/fonts/**/*')
  .pipe(gulp.dest('dist/fonts'))

  done();
});

gulp.task('tinypng', function (done) {
  gulp.src('./src/img/**/*.{png,jpg,jpeg}')
  .pipe(tinypng({
    key: '3860TJtZJ54bjdnr2x9pf255LF5cvl8Z'
  }))
  .pipe(gulp.dest('dist/img'));
  
  done();
});

gulp.task('jpg', function (done) {
  gulp.src('src/img/**/*.{jpg,jpeg,png}')
  .pipe(webp())
  .pipe(gulp.dest('dist/images'))

  done();
});


gulp.task('default', gulp.parallel('minify-css', 'move-js', 'fonts', 'htmlmin', 'tinypng', function(done) {
  done();
}))

// function defaultTask(cb) {
//   // place code for your default task here
//   // console.log('Задача выполнена');
  
//   cb();
// }
// exports.default = defaultTask;