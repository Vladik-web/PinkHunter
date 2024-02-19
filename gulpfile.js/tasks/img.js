// Плагины
const imagemin = require('gulp-imagemin')
const newer = require('gulp-newer')

// Обработка JavaScript
const img = () => {
  return $.gulp
    .src($.path.img.src)
    .pipe(newer($.path.img.dest))
    .pipe($.gulp.dest($.path.img.dest))
    .pipe($.gulp.src($.path.img.src))
    .pipe(newer($.path.img.dest))
    .pipe(
      imagemin(
        [
          imagemin.mozjpeg({ quality: 70, progressive: true }),
          imagemin.optipng({ optimizationLevel: 5 })
        ],
        { verbose: true }
      )
    )
    .pipe($.gulp.dest($.path.img.dest))
    .pipe($.browserSync.stream())
}

module.exports = img
