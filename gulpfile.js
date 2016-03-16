'use strict';

/**
 * load plugins
*/
var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var $ = require('gulp-load-plugins')({
  pattern: [
    'gulp-*',
    'gulp.spritesmith',
    'browser-sync',
    'run-sequence'
  ]
});

// JS
gulp.task('js_pc:dev', function() {
  return gulp.src(config.src +'js_pc/{**/,}*.js')
    .pipe(uglify({
      mangle: false,
      compress: false,
      output: { beautify: true }
    }))
    // .pipe(uglify()) public
    .pipe(gulp.dest(config.dist + 'assets/js/'));
});
gulp.task('js_sp:dev', function() {
  return gulp.src(config.src +'js_sp/{**/,}*.js')
    .pipe(uglify({
      mangle: false,
      compress: false,
      output: { beautify: true }
    }))
     // .pipe(uglify()) public
    .pipe(gulp.dest(config.dist + 'assets-sp/js/'));
});

/**
 * Config
*/
var config = {
  src: 'src/',
  dist: 'html/',
  browserSupport: ['last 3 versions', 'ie >= 9', 'android >= 4'],
  sprite: {
    src: 'src/img/common/sprite/',// Sprite画像読み込み先
    distSCSS: 'src/scss_sprite/',
    distImg: 'html/assets/img/common/sprite/', // Sprite画像出力先
    maps: [
    'sprite'
    ]
    //Sprite画像の名前リスト（sprite-xxx.png）
  }
};

//Sprite
gulp.task('sprite:dev', function() {
  var spriteMaps = config.sprite.maps;
  for(var i = 0; i < spriteMaps.length; i++) {
    var spriteName = config.sprite.maps[i];
    var spriteData = gulp.src(config.sprite.src + '*.png')
      .pipe(spritesmith({
        imgName: 'sprite-' +  spriteName + '.png',
        imgPath: '../img/common/sprite/sprite-' +  spriteName + '.png',
        cssName: '_' + spriteName + '.scss',
        algorithm: 'binary-tree',
        // algorithm:'left-right',
        padding: 2,
        cssTemplate: config.src + '/sprite/scss.template.mustache'
      }));
    spriteData.img.pipe(gulp.dest(config.sprite.distImg));
    spriteData.css.pipe(gulp.dest(config.sprite.distSCSS));
  }
});

gulp.task('sprite_sp', function() {
  var spriteMaps = config.sprite.maps;
  for(var i = 0; i < spriteMaps.length; i++) {
    var spriteName = config.sprite.maps[i];
    var spriteData = gulp.src('src/img-sp/common/sprite/*.png') //スプライトにする画像
      .pipe(spritesmith({
        imgName: 'sprite-' +  spriteName + '.png',
        imgPath: '../img/common/sprite/sprite-' +  spriteName + '.png', //生成されるCSSに記載されるパス
        cssName: '_' + spriteName + '.scss',
        algorithm: 'binary-tree',
        padding: 2,
        cssTemplate: config.src + '/sprite/scss.template.mustache'
      }));
    spriteData.img.pipe(gulp.dest('html/assets-sp/img/common/sprite/'));
    spriteData.css.pipe(gulp.dest('src/scss_sprite_sp/'));
  }
});

gulp.task('bs:dev', function() {
  $.browserSync({
    baseDir: "/html",
    proxy: "namplate.localhost" // 任意のローカルホストを記載
  });
});

gulp.task('scss_pc:dev', function() {
  return gulp.src(config.src + 'scss_pc/{**/,}*.scss')
    .pipe($.sass({
      // outputStyle: 'compressed',
      errLogToConsole: true
    }))
    .pipe($.autoprefixer({
      browsers: config.browserSupport
    }))
    .pipe(gulp.dest(config.dist + 'assets/css/'))
    .pipe($.browserSync.stream());

});

gulp.task('scss_sp:dev', function() {
  return gulp.src(config.src + 'scss_sp/{**/,}*.scss')
    .pipe($.sass({
       // outputStyle: 'compressed',
      errLogToConsole: true
    }))
    .pipe($.autoprefixer({
      browsers: config.browserSupport
    }))
    .pipe(gulp.dest(config.dist + 'assets-sp/css/'))
    .pipe($.browserSync.stream());
});


// img compress(NOT USED)
gulp.task('imagemin', function() {
  var srcGlob = '/src/img' + '/**/*.+(jpg|jpeg|png|gif|svg)';
  var dstGlob = '/html/assets/img';
  var imageminOptions = {
    optimizationLevel: 7
  };
  gulp.src( srcGlob )
    .pipe(imagemin( imageminOptions ))
    .pipe(gulp.dest( dstGlob ));
});

gulp.task('imagemin_sp', function() {
  var srcGlob = './src/img-sp' + '/**/*.+(jpg|jpeg|png|gif|svg)';
  var dstGlob = './html/assets-sp/img';
  var imageminOptions = {
    optimizationLevel: 7
  };
  gulp.src( srcGlob )
    .pipe(imagemin( imageminOptions ))
    .pipe(gulp.dest( dstGlob ));
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
    config.src + 'js_pc/{**/,}*.js',
    ['js_pc:dev']
  );
  gulp.watch(
    config.src + 'js_sp/{**/,}*.js',
    ['js_sp:dev']
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

gulp.task('sprite', function() {
  $.runSequence(
    'sprite:dev',
    'sprite_sp'
  );
});

