var gulp = require('gulp'),
    fileinclude = require('gulp-file-include'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    path = require('path');

var paths = {
    templates: './templates',
    sass: './assets/sass',
    dist: './docs'
}

gulp.task('fileinclude', function() {
    return gulp.src(path.join(paths.templates, '**/*.tpl.html'))
        .pipe(fileinclude({indent: true}))
        .pipe(rename({
            extname: ""
        }))
        .pipe(rename({
            extname: ".html"
        }))
        .pipe(gulp.dest(paths.dist));
});

gulp.task("watch", function(){
    gulp.watch(path.join(paths.templates, '**/*.html'), gulp.series('fileinclude'));
    gulp.watch(path.join(paths.sass, '**/*.scss'), gulp.series('sass'));

})

gulp.task('sass', function () {
  return gulp.src(path.join(paths.sass, '/assets/sass/**/*.scss'))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(path.join(paths.dist, '/assets/css')));
});
