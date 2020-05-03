const gulp                      = require('gulp'),
      del                       = require('del'),
      sourcemaps                = require('gulp-sourcemaps'),
      plumber                   = require('gulp-plumber'),
      sass                      = require('gulp-sass'),
      autoprefixer              = require('gulp-autoprefixer'),
      babel                     = require('gulp-babel'),
      minifyCss                 = require('gulp-clean-css'),
      uglify                    = require('gulp-uglify'),
      concat                    = require('gulp-concat'),
      imagemin                  = require('gulp-imagemin'),
      dependents                = require('gulp-dependents'),
      webpack                   = require('webpack-stream'),
      src_folder                = './assets/',
      dist_folder               = './_site/',
      dist_assets_folder        = dist_folder + 'assets/';

gulp.task('sass', () => {
  return gulp.src([
    src_folder + 'scss/**/*.scss'
  ], { since: gulp.lastRun('sass') })
    .pipe(sourcemaps.init())
      .pipe(plumber())
      .pipe(dependents())
      .pipe(sass())
      .pipe(autoprefixer())
      .pipe(minifyCss())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(dist_assets_folder + 'css'))
});

gulp.task('images', () => {
  return gulp.src([ src_folder + 'img/**/*.+(png|jpg|jpeg|gif|svg|ico)' ], { since: gulp.lastRun('images') })
    .pipe(plumber())
    .pipe(imagemin())
    .pipe(gulp.dest(dist_assets_folder + 'img'))
});

gulp.task('js', () => {
  return gulp.src([ src_folder + 'js/**/*.js' ], { since: gulp.lastRun('js') })
    .pipe(plumber())
    .pipe(webpack({
      watch: true,
      module: {
        mode:'development'
      }
    }))
    .pipe(sourcemaps.init())
      .pipe(babel({
        presets: [ '@babel/env' ]
      }))
      .pipe(concat('all.js'))
      // .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(dist_assets_folder + 'js'))
});

gulp.task('watch', () => {
  const watchSCSS = [
    src_folder + 'scss/**/*.scss'
  ];

  const watchJS = [
    src_folder + 'js/**/*.js'
  ]

  const watchImages = [
    src_folder + 'images/**/*.+(png|jpg|jpeg|gif|svg|ico)'
  ];

  gulp.watch(watchSCSS, gulp.series('sass'));
  gulp.watch(watchJS, gulp.series('js'))
  gulp.watch(watchImages, gulp.series('images'));
});