const {src, dest, series, watch} = require('gulp');
const sync = require('browser-sync').create();
const htmlmin = require('gulp-htmlmin');
const cssmin = require('gulp-cssmin');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const del = require('del');


function html() {
    return src('src/**.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('dist'))
};

function css() {
    return src('src/sass/**.scss')
    .pipe(sass())
    .pipe(cssmin())
    .pipe(concat('index.min.css'))
    .pipe(dest('dist/css'))
};

function img() {
    return src('src/img/**')
    .pipe(dest('dist/img'))
}

function clearimg() {
    return del('dist/img/**');
}

function scripts() {
    return src('src/**.js')
    .pipe(dest('dist'))
}

function clear() {
    return del('dist');
}

function serve() {
    sync.init({
        server: { baseDir: './dist'},
    })
    watch('src/**.html', series(html)).on('change', sync.reload);
    watch('src/sass/**.scss', series(css)).on('change', sync.reload);
    watch('src/img/**', series(img)).on('change', sync.reload);
    watch('src/**.js', series(scripts)).on('change', sync.reload);
}

exports.html = html;
exports.css = css;
exports.clear = clear;
exports.img = img;
exports.clearimg = clearimg;
exports.serve = series(clear, html, css, img, scripts, serve);


