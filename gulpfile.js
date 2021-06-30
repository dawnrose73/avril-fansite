const {src, dest, series, watch} = require('gulp');
const sync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const del = require('del');


function html() {
    return src('src/**.html')
    .pipe(dest('dist'))
};

function scss() {
    return src('src/sass/**.scss')
    .pipe(sass())
    .pipe(concat('index.css'))
    .pipe(dest('dist/css'))
};

function img() {
    return src('src/img/**')
    .pipe(dest('dist/img'))
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
    watch('src/sass/**.scss', series(scss)).on('change', sync.reload);
    watch('src/img/**', series(img)).on('change', sync.reload);
    watch('src/**.js', series(scripts)).on('change', sync.reload);
}

exports.html = html;
exports.scss = scss;
exports.clear = clear;
exports.img = img;
exports.serve = series(clear, html, scss, img, scripts, serve);


