'use strict';
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    livereload = require('gulp-livereload'),
    imagemin = require('gulp-imagemin'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    prefix = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    jshint = require('gulp-jshint');

/* test path
gulp.task('test', function(){
    return gutil.log(gutil.colors.yellow("test"))
    
})
*/

var resources = './app/';
var sassDir = resources + 'sass/';


//compiled css
gulp.task('styles', function () {
    return gulp.src(sassDir + '/main.scss')
        .pipe(sass({
            outputStyle: 'compressed' //nested , expanded , compact, compressed
        }).on('error', sass.logError))  
    	.pipe(sourcemaps.init())    
        .pipe(prefix(['last 2 version']))        
        .pipe(rename('main.min.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist/css/')) 
        .pipe(livereload());
});

//compiled html
gulp.task('html', function () {
   return gulp.src(resources+ '/html/**/*.html') 
   .pipe(gulp.dest('./dist/'))
});

//compiled icon/fonts
gulp.task('icons', function () {
   return gulp.src([resources+ 'bower_components/bootstrap-sass/assets/fonts/bootstrap/**.*', resources+ 'fonts/**.*'])
   .pipe(gulp.dest('./dist/fonts/'))
});


//compiled livereload
gulp.task('watch', function () {
  livereload.listen();
    gulp.watch([sassDir+ '/*.scss', sassDir+ "/*.sass"], ['styles']);
});


// Compress images
gulp.task('compress', function() {
  return gulp.src(resources+ 'img/**.*')
  .pipe(imagemin())
  .pipe(gulp.dest('./dist/img'))
});


// jade
/*
gulp.src(['./assets/template/*.jade', '!./assets/template/_*.jade'])
    .pipe(jade())
    .pipe(gulp.dest('./build/'))
*/

// js
gulp.task('js', function () {
  return gulp.src([resources+ 'js/*.js', resources+ 'bower_components/bootstrap-sass/assets/javascripts/**/*.js' , resources+ 'bower_components/jquery/dist/jquery.min.js'])
    //.pipe(jshint())
    //.pipe(jshint.reporter('default'))
    .pipe(gulp.dest('./dist/js'))
});
//gulp.src([resources + '/js/**/*.js', '!./assets/js/vendor/**/*.js'])
//    .pipe(concat('index.js'))
//    .pipe(uglify())
//    .pipe(gulp.dest('./build/js'));



//compiled web
gulp.task('prod', function () {
    gulp.start('styles', 'html', 'icons', 'compress', 'js');
});












