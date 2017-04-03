var gulp = require('gulp'),
    fileinclude = require('gulp-file-include'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    i18n = require('gulp-html-i18n'),
    clean = require('gulp-clean'),
    deleteLines = require('gulp-delete-lines'),
    merge = require('merge-stream'),
    path = require('path');

var paths = {
    templates: './templates',
    sass: './assets/sass',
    js: './assets/js',
    fonts: './assets/fonts',
    images: './images',
    dist: './dist',
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

gulp.task('deletelanguagemenuitem', task.deletelanguagemenuitem = function () {
    var german = gulp.src(path.join(paths.dist, 'de/**/*.html'))
                    .pipe(deleteLines({
                        'filters': [
                        /DEU<\/a><\/li>/i
                        ]
                    }))
                    .pipe(gulp.dest(path.join(paths.dist, 'de')));

    var italian = gulp.src(path.join(paths.dist, 'it/**/*.html'))
                    .pipe(deleteLines({
                        'filters': [
                        /ITA<\/a><\/li>/i
                        ]
                    }))
                    .pipe(gulp.dest(path.join(paths.dist, 'it')));
    return merge(german, italian);
});

gulp.task('sass', task.sass = function () {
  return gulp.src(path.join(paths.sass, '**/*.scss'))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(path.join(paths.dist, '/assets/css')));
});

gulp.task('images', task.images = function(){
    return gulp.src(path.join(paths.images, '**/*'))
    .pipe(gulp.dest(path.join(paths.dist, 'images')));
})

gulp.task('js', task.js = function(){
    return gulp.src(path.join(paths.js, '**/*'))
    .pipe(gulp.dest(path.join(paths.dist, paths.fonts)));
});

gulp.task('fonts', task.fonts = function(){
    return gulp.src(path.join(paths.fonts, '**/*'))
    .pipe(gulp.dest(path.join(paths.dist, paths.fonts)));
});

gulp.task('clean', task.clean = function(){
    return gulp.src([path.join(paths.tmp, '*'), path.join(paths.dist, '*')])
    .pipe(clean());
});

gulp.task('pages', task.pages = gulp.series('fileinclude', 'localize', 'deletelanguagemenuitem'));

gulp.task('default', task.default = gulp.parallel('pages', 'sass', 'images', 'js', 'fonts'));

gulp.task('build', task.build = gulp.series(task.clean, task.default));

gulp.task("watch", function(){
    gulp.watch(path.join(paths.templates, '**/*.html'), gulp.series('pages'));
    gulp.watch(path.join(paths.sass, '**/*.scss'), gulp.series('sass'));

})
