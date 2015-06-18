var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var livereload = require('gulp-livereload');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    gulp.src('./public/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('watch', function () {
    gulp.watch('./public/scss/*.scss', ['sass']);
});

gulp.task('develop', function () {
    livereload.listen();
    nodemon({
        "verbose": true,
        script: 'app.js',
        ext: 'js',
        env: {'NODE_ENV': 'development'}
    }).on('restart', function () {
        setTimeout(function () {
            livereload.changed(__dirname);
        }, 500);
    });
});

gulp.task('default', [
    'sass',
    'develop',
    'watch'
]);
