const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass')); // compilaSass
const sourcemaps = require('gulp-sourcemaps'); //compilaSass
const uglify = require('gulp-uglify'); // compilaJS
const obfuscate = require('gulp-obfuscate'); // compilaJS
const imagemin = require('gulp-imagemin'); // compilaImage

function compilaSass() {
    return gulp.src('./sources/styles/*.scss')
            .pipe(sourcemaps.init())
            .pipe(sass({
                outputStyles: "compressed"
            }))
            .pipe(sourcemaps.write('./map'))
            .pipe(gulp.dest('./build/styles'));
}

function compilaJS(){
    return gulp.src('./sources/scripts/*.js')
            .pipe(uglify())
            .pipe(obfuscate())
            .pipe(gulp.dest('./build/scripts'));
}

function compilaImage(){
    return gulp.src('./sources/images/*')
            .pipe(imagemin())
            .pipe(gulp.dest('./build/images'));
}

exports.watch = function(){
    gulp.watch('./sources/styles/*.scss', {ignoreInitial:false}, gulp.series(compilaSass));
    gulp.watch('./sources/scripts/*.js', {ignoreInitial:false}, gulp.series(compilaJS));
    gulp.watch('./sources/images/*', {ignoreInitial:false}, gulp.series(compilaImage));
}