'use strict';

////////////////////////////////////////////////////////////////
// int
////////////////////////////////////////////////////////////////
var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var Notifier = require('node-notifier');
var babel = require('gulp-babel');
var $ = require('gulp-load-plugins')({
  pattern: [
    'gulp-*',
    'gulp-notify',
    'gulp.spritesmith',
    'browser-sync',
    'run-sequence',
    'gulp-plumber'
  ]
});

////////////////////////////////////////////////////////////////
// tasks
////////////////////////////////////////////////////////////////
gulp.task('js_babel:dev', function() {
  return gulp.src(config.src +'js_es6/{**/,}*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(uglify()) 
    .pipe(gulp.dest(config.dist + 'assets/js/'));
});


/**
 * Config
*/
var config = {
  src: 'src/',
  dist: 'html/',
  browserSupport: ['last 3 versions', 'ie >= 9', 'android >= 4']
};

gulp.task('bs:dev', function() {
  $.browserSync({
    baseDir: "/html",
    proxy: "namplate.localhost"
  });
});

gulp.task('scss_pc:dev', function() {
  return gulp.src(config.src + 'scss_pc/{**/,}*.scss')
    .pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
    .pipe($.sass({
      // outputStyle: 'compressed',
      errLogToConsole: true
    }))
    .pipe($.autoprefixer({
      browsers: config.browserSupport
    }))
    .pipe(gulp.dest(config.dist + 'assets/css/'))
    .pipe($.browserSync.stream())
    .pipe(notify('scss_pc done'));
});

gulp.task('scss_sp:dev', function() {
  return gulp.src(config.src + 'scss_sp/{**/,}*.scss')
    .pipe(plumber({errorHandler: onError}))
    .pipe($.sass({
       // outputStyle: 'compressed',
      errLogToConsole: true
    }))
    .pipe($.autoprefixer({
      browsers: config.browserSupport
    }))
    .pipe(gulp.dest(config.dist + 'assets-sp/css/'))
    .pipe($.browserSync.stream())
    .pipe(notify('scss_sp done'));
});

gulp.task('watch:dev', function() {
 gulp.watch(
    config.src + 'scss_pc/{**/,}*.scss',
    ['scss_pc:dev']
  );
  gulp.watch(
    config.src + 'scss_sp/{**/,}*.scss',
    ['scss_sp:dev']
  );
  gulp.watch(
    config.src + 'js_es6/{**/,}*.js',
    ['js_babel:dev']
  );
  gulp.watch([config.dist + '{**/,}*.html', config.dist + '*.php'])
    .on("change", $.browserSync.reload);
});

gulp.task('default', function() {
  $.runSequence(
    'bs:dev',
    'watch:dev'
  );  
});

