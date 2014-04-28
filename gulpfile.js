var gulp = require('gulp');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');
var watch = require('gulp-watch');
var notify = require('gulp-notify');
var concatCSS = require('gulp-concat-css');
var coffee = require('gulp-coffee');
var gutil = require('gulp-util');
var stylish = require('jshint-stylish');

var paths = {

  coffee: {
    src: 'src/coffee/*.coffee',
    dest: 'src/js/'
  },

  scripts: {
    src: [
      'src/components/jquery/dist/jquery.js',
      'src/components/bootstrap-sass/vendor/assets/javascripts/bootstrap.js',
      'src/js/app.js'
    ],
    fullDir: 'app/assets/js/scripts.js',
    dir: 'app/assets/js',
    dest: 'scripts.js',
    jsHint: [
      'src/js/app.js',
      'src/js/**/*.js'
    ]
  },
  images: {
    src: 'app/assets/img/**/*',
    dest: 'app/assets/img'
  },

  scss: {
    src: [
      'src/scss/style.scss',
      'src/components/bootstrap-sass/vendor/assets/stylesheets/bootstrap.scss'
    ],
    dest: 'app/assets/components/css',
    finalDest: 'app/assets/css'
  },

  watch: {
    styles: [
      'src/scss/style.scss',
      'src/scss/**/*.scss'
    ],
    js: [
      'src/js/app.js',
      'src/js/**/*.js'
    ],
    coffee: [
      'src/coffee/app.coffee',
      'src/coffee/**/*.coffee'
    ]
  }
};

/**
 * Stylesheets one time task
 */
gulp.task('styles', function () {
  return gulp.src(paths.scss.src).pipe(sass())
    .pipe(gulp.dest(paths.scss.dest))
    .pipe(concatCSS("styles.css"))
    .pipe(gulp.dest(paths.scss.finalDest))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifyCSS())
    .pipe(gulp.dest(paths.scss.finalDest));
});

/**
 * Coffee tasks
 */
gulp.task('coffee', function () {
  return gulp.src(paths.coffee.src)
    .pipe(coffee({
      bare: true
    }).on('error', gutil.log))
    .pipe(gulp.dest(paths.coffee.dest));
});

/**
 * Javascript tasks
 */
gulp.task('js', function () {
  gulp.src(paths.scripts.src)
    .pipe(concat(paths.scripts.dest))
    .pipe(gulp.dest(paths.scripts.dir));

  gulp.src(paths.scripts.fullDir)
    .pipe(uglify({outSourceMap: false}))
    .pipe(concat("scripts.min.js"))
    .pipe(gulp.dest(paths.scripts.dir));
});

/**
 * Watch JS
 */
gulp.task('watch', function () {
  gulp.watch(paths.watch.js, ['js']);
  gulp.watch(paths.watch.coffee, ['coffee']);
  gulp.watch(paths.watch.styles, ['styles']);
});

/**
 * Imagemin task
 */
gulp.task('images', function () {
  return gulp.src(paths.images.src)
    // Pass in options to the task
    .pipe(imagemin({optimizationLevel: 5}))
    .pipe(gulp.dest(paths.images.dest));
});

/**
 * JSHint task
 */
gulp.task('lint', function () {
  gulp.src(paths.scripts.jsHint)
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});


gulp.task('default', ['watch']);

gulp.task('lint', ['lint']);

gulp.task('prod', ['styles', 'coffee', 'js', 'images']);