'use strict';
// generated on 2014-04-30 using generator-gulp-webapp 0.0.8

var gulp = require('gulp'),
        gutil = require('gulp-util'),
        uglify = require('gulp-uglify'),
        concat = require('gulp-concat');



gulp.task('js', function() {
    gulp.src('./js/*.js')
            .pipe(uglify())
            .pipe(concat('build.js'))
            .pipe(gulp.dest('.'));
});

gulp.task('default', function(){
    gulp.run('js'); 
});