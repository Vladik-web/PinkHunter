// Плагины
const newer = require('gulp-newer')

// Обработка Video
const video = () => {
  return $.gulp
    .src($.path.video.src)
    .pipe(newer($.path.video.dest))
    .pipe($.gulp.dest($.path.video.dest))
}

module.exports = video
