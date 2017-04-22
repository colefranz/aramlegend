'use strict';

var gulp = require('gulp'),
    babel = require('gulp-babel'),
    express = require('gulp-express'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    stylus = require('gulp-stylus'),
    nib = require('nib'),
    path = require('path');

function babelizedSource() {
  return gulp.src(['app/**/*.js', 'app/jsx/**/*.jsx', 'app/app.jsx', '!app/bower_components/**'])
    .pipe(babel({
      presets: ['react', 'es2015']
    }))
    .pipe(concat('aramlegend.min.js'));
}

function bowerSource() {
  var base = path.join('app', 'bower_components');

  return gulp.src([
    path.join(base, 'react', 'react.js'),
    path.join(base, 'react', 'react-dom.js')
  ]);
}

gulp.task('dev', function () {
  babelizedSource().pipe(gulp.dest('dev'));
  bowerSource().pipe(gulp.dest('dev'));
});

gulp.task('server', function() {
  express.run(['index.js']);
});

gulp.task('style', function() {
  return gulp.src('app/style/**')
    .pipe(stylus({use: nib()}))
    .pipe(gulp.dest('dev'));
})

gulp.task('serve', ['dev', 'server', 'style'], function () {
   gulp.watch('app/**', ['dev']);
   gulp.watch(['index.js', 'server/**'], ['server']);
   gulp.watch('app/style/**', ['style']);

   console.log('Ready.');
});