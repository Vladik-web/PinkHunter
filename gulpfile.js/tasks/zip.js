// Плагины
const gulpzip = require('gulp-zip')

// Обработка JavaScript
const zip = () => {
  return $.gulp.src($.path.zip.src).pipe(gulpzip(`Project.zip`)).pipe($.gulp.dest($.path.zip.dest))
}

module.exports = zip
