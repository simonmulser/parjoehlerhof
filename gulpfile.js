var gulp = require('gulp'),
    fileinclude = require('gulp-file-include'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    i18n = require('gulp-html-i18n'),
    path = require('path');

var paths = {
    templates: './templates',
    sass: './assets/sass',
    dist: './docs',
    tmp: './tmp'
}

var task = {};

gulp.task('fileinclude', function() {
    return gulp.src(path.join(paths.templates, '**/*.tpl.html'))
        .pipe(fileinclude({indent: true}))
        .pipe(rename({
            extname: ""
        }))
        .pipe(rename({
            extname: ".html"
        }))
        .pipe(gulp.dest(paths.tmp));
});

gulp.task('localize', function() {
  return gulp.src(path.join(paths.tmp, '**/*.html'))
    .pipe(i18n({
      langDir: './languages',
      createLangDirs: true,
      trace: true
    }))
    .pipe(gulp.dest(paths.dist));
});

gulp.task('pages', task.pages = gulp.series('fileinclude', 'localize'));

gulp.task('sass', function () {
  return gulp.src(path.join(paths.sass, '**/*.scss'))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(path.join(paths.dist, '/assets/css')));
});

gulp.task("watch", function(){
    gulp.watch(path.join(paths.templates, '**/*.html'), gulp.series('pages'));
    gulp.watch(path.join(paths.sass, '**/*.scss'), gulp.series('sass'));

})
