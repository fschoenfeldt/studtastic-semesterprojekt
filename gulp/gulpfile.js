'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const cleanCSS = require('gulp-clean-css');
const cowsay = require("cowsay");

const paths = {
    src: '../scss',
    dest: '../web/css'
};

const styles = () => {
    return gulp
        .src(`${paths.src}/studtastic.scss`)
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compact'
        }).on('error', sass.logError))
        .pipe(
            autoprefixer({
                cascade: false,
                grid: "autoplace"
            }),
        )
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.dest));
}

const minifyCSS = () => {
    return gulp
        .src(`${paths.dest}/studtastic.css`)
        .pipe(
            cleanCSS({
                debug: false
            }, function (details) {
                console.log();
                console.log();
                console.log(cowsay.say({
                    text: "*Gulp*",
                    e: "oo",
                    T: "U "
                }));
                console.log('=============== minifyCSS ===============');
                console.log(`       Before: ${details.name}: ${Math.round(details.stats.originalSize/1000)}KB`);
                console.log(`        After: ${details.name}: ${Math.round(details.stats.minifiedSize/1000)}KB`);
                console.log('=========================================');
                console.log();
                console.log();
                console.log(`--> ${paths.dest}${details.name}`);
                console.log();
                console.log();
            }),
        )
        .pipe(gulp.dest(paths.dest));
}

const watch = () => {
    gulp.watch(paths.src, gulp.series(gulp.series(styles, minifyCSS)));
}

const dist = gulp.series(gulp.series(styles, minifyCSS));

exports.styles = styles;
exports.watch = watch;
exports.dist = dist;
exports.default = dist;