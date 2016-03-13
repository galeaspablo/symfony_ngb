'use strict';

var gulp = require('gulp');

var runSequence = require('run-sequence');

var bower = require('gulp-bower');

var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');


gulp.task('bower:sass', function(){
    return bower('.libraries')
        .pipe(gulp.dest('./web_src/sass/bowerimports'))
});

gulp.task('bower:js',function(){
    return bower('./libraries')
        .pipe(gulp.dest('./web_src/js/bowerimports'))
});

gulp.task('sass:prod', function () {
    gulp.src('./web_src/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 version']
        }))
        .pipe(gulp.dest('./web/dist/css'));
});

gulp.task('sass:dev', function () {
    gulp.src('./web_src/sass/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 version']
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./web/dist/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./web_src/sass/**/*.scss', ['sass:dev']);
});

gulp.task('sass:devwatch', ['sass:dev','sass:watch']);



gulp.task('js:prodVendor', function(){
    return gulp.src([
            'web_src/js/bowerimports/jquery/dist/jquery.min.js'
        ])
        .pipe(concat('vendor.concat.js'))
        //.pipe(gulp.dest('dist/js_min'))//uncomment this line to also have a concatenated file (not minified)
        .pipe(rename('vendor.min.js'))
        //.pipe(uglify())//vendor files should already be minified
        .pipe(gulp.dest('web/dist/js_min'));
});

gulp.task('js:prodApp', function(){
    return gulp.src([
            'web_src/js/variables/variables.js',
            'web_src/js/components/components.js'
        ])
        .pipe(concat('app.concat.js'))
        //.pipe(gulp.dest('dist/js_min'))//uncomment this line to also have a concatenated file (not minified)
        .pipe(rename('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('web/dist/js_min'));
});

gulp.task('js:prod', function(callback) {
    runSequence(
        'js:prodVendor',
        'js:prodApp',
        callback
    );
});

/**
 * Full Compilation - Below
 */

gulp.task('default', function(callback) {
    runSequence(
        'bower:sass',
        'bower:js',
        ['sass:prod', 'js:prod'],
        callback
    );
});

