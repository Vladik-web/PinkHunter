// Плагины
const babel = require('gulp-babel')
const webpack = require('webpack-stream')

// Обработка JavaScript
const js = () => {
  return $.gulp
    .src($.path.js.src)
    .pipe(babel())
    .pipe(webpack({ mode: 'development' }))
    .pipe($.gulp.dest($.path.js.dest))
    .pipe($.browserSync.stream())
}

module.exports = js
