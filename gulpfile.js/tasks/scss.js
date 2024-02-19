// Плагины
const autoprefixer = require('gulp-autoprefixer')
const cleanCSS = require('gulp-clean-css')
const rename = require('gulp-rename')
const size = require('gulp-size')
const queries = require('gulp-group-css-media-queries')
const sass = require('gulp-sass')(require('sass'))

// Обработка SCSS
const scss = () => {
  return $.gulp
    .src($.path.scss.src)
    .pipe(sass({ style: 'compact', sourcemap: true, includePaths: ['node_modules'] }))
    .pipe(autoprefixer())
    .pipe(queries())
    .pipe(size({ title: 'SCSS Без сжатия' }))
    .pipe($.gulp.dest($.path.scss.dest))
    .pipe(rename({ suffix: '.min' }))
    .pipe(cleanCSS({ debug: true, compatibility: 'ie8' }))
    .pipe(size({ title: 'SCSS После сжатия' }))
    .pipe($.gulp.dest($.path.scss.dest))
    .pipe($.browserSync.stream())
}

module.exports = scss
