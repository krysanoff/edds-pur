'use strict';

var gulp       = require('gulp'),
    sass       = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify     = require('gulp-uglify'),
    rename     = require('gulp-rename'),
    assets_dir  = 'themes/zanor-zanor-mdb-loaded/assets/';

// SCSS compiled
gulp.task('sass', function () {
    console.log(assets_dir + 'sass/**/*.scss');
    return gulp.src(assets_dir + 'sass/**/*.scss')

    // Для генераии style.css.map
        .pipe(sourcemaps.init())

        // Собственно компиляция
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))

        // Куда положить .map
        .pipe(sourcemaps.write('./'))

        // Путь компиляции
        .pipe(gulp.dest(assets_dir + 'css'));
});

gulp.task('sass:watch', function () {
    console.log(assets_dir + 'sass/**/*.scss');
    gulp.watch(assets_dir + 'sass/**/*.scss', ['sass']);
});