// Плагины
const fileInclude = require('gulp-file-include')
const htmlmin = require('gulp-htmlmin')
const size = require('gulp-size')
const typograph = require('gulp-typograf')
// Обработка HTML
const html = () => {
  return $.gulp
    .src($.path.html.src)
    .pipe(fileInclude())
    // .pipe(typograph({ locale: ['ru', 'en-US'] }))
    .pipe(size({ title: 'HTML Без сжатия' }))
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(size({ title: 'HTML После сжатия' }))
    .pipe($.gulp.dest($.path.html.dest))
    .pipe($.browserSync.stream())
}

module.exports = html
