'use strict';
// generated on 2014-04-30 using generator-gulp-webapp 0.0.8

var gulp = require('gulp'),
        gutil = require('gulp-util'),
        uglify = require('gulp-uglify'),
        concat = require('gulp-concat'),
        yuidoc = require("gulp-yuidoc");



gulp.task('js', function() {
    gulp.src('./src/*.js')
            .pipe(uglify())
            .pipe(concat('inapp-utils.min.js'))
            .pipe(gulp.dest('.'));


    gulp.src('./src/*.js')
            .pipe(yuidoc())
            .pipe(gulp.dest("./doc"));


});

gulp.task('default', function() {
    gulp.run('js');
});