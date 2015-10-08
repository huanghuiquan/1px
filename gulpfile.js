var gulp = require('gulp');
var stylus = require('gulp-stylus');
var connect = require('gulp-connect');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('dev', function () {
    connect.server({
        root: ['./'],
        port: 8000,
        livereload: true,
        middleware: function () {
            return [function (req, res, next) {
                if (/\.ico$/.test(req.url)) {
                    return res.end('no found.');
                }
                next();
            }];
        }
    });
});

gulp.task('stylus', function () {
    gulp.src('./src/*.styl')
        .pipe(stylus())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./dist'))
        .pipe(connect.reload());
});

gulp.task('html', function () {
    gulp.src('./*.html')
        .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./*.html'], ['html']);
  gulp.watch(['./src/*.styl'], ['stylus']);
});

gulp.task('default', ['dev', 'watch']);