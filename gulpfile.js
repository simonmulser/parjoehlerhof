var gulp = require('gulp'),
    fileinclude = require('gulp-file-include'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    i18n = require('gulp-html-i18n'),
    clean = require('gulp-clean'),
    deleteLines = require('gulp-delete-lines'),
    merge = require('merge-stream'),
    joinPath = require('path.join'),
    filter = require('gulp-filter')
rev = require('gulp-rev'),
    revReplace = require('gulp-rev-replace'),
    cleanCSS = require('gulp-clean-css'),
    pump = require('pump'),
    uglify = require('gulp-uglify');

var paths = {
    templates: './templates',
    sass: './assets/sass',
    css: './assets/css',
    defaultskin: './assets/default-skin',
    js: './assets/js',
    fonts: './assets/fonts',
    favicon: './assets/favicon',
    images: './images',
    dist: './dist',
    languages: './languages'
}

var task = {};

gulp.task('html', task.html = function () {

    return gulp.src(joinPath(paths.templates, '**/*.tpl.html'))
        .pipe(fileinclude({ indent: true }))
        .pipe(rename({
            extname: ""
        }))
        .pipe(rename({
            extname: ".html"
        }))
        .pipe(i18n({
            langDir: './languages',
            createLangDirs: true,
            trace: true
        }))
        .pipe(gulp.dest(paths.dist));
});

gulp.task('deletelanguagemenuitem', task.deletelanguagemenuitem = function () {
    var german = gulp.src(joinPath(paths.dist, 'de/**/*.html'))
        .pipe(deleteLines({
            'filters': [
                />DEU<\/a><\/li>/i
            ]
        }))
        .pipe(gulp.dest(joinPath(paths.dist, 'de')));

    var italian = gulp.src(joinPath(paths.dist, 'it/**/*.html'))
        .pipe(deleteLines({
            'filters': [
                />ITA<\/a><\/li>/i
            ]
        }))
        .pipe(gulp.dest(joinPath(paths.dist, 'it')));
    return merge(german, italian);
});

gulp.task('css', task.sass = function () {

    const cssFilter = filter('**/*.css', { restore: true });
    const scssFilter = filter('**/*.scss', { restore: true });

    return gulp.src(joinPath(paths.css, '**/*'))
        .pipe(scssFilter)
        .pipe(sass().on('error', sass.logError))
        .pipe(scssFilter.restore)
        .pipe(cssFilter)
        .pipe(cleanCSS())
        .pipe(rev())
        .pipe(cssFilter.restore)
        .pipe(gulp.dest(joinPath(paths.dist, '/assets/css')))
        .pipe(rev.manifest())
        .pipe(gulp.dest(paths.dist));
});

gulp.task("revReplace", task.revReplace = function () {
    var manifest = gulp.src(joinPath(paths.dist, 'rev-manifest.json'));

    return gulp.src(joinPath(paths.dist, '**/*.html'))
        .pipe(revReplace({ manifest: manifest }))
        .pipe(gulp.dest(paths.dist));
});

gulp.task('images', task.images = function () {
    return gulp.src(joinPath(paths.images, '**/*'))
        .pipe(gulp.dest(joinPath(paths.dist, 'images')));
})

gulp.task('favicon', task.favicon = function () {
    return gulp.src(joinPath(paths.favicon, '**/*'))
        .pipe(gulp.dest(paths.dist));
})

gulp.task('js', function (cb) {
    pump([
        gulp.src(joinPath(paths.js, '**/*.js')),
        uglify(),
        gulp.dest(joinPath(paths.dist, paths.js))
    ],
        cb
    );
});

gulp.task('htc', task.htc = function () {
    return gulp.src(joinPath(paths.js, '**/*.htc'))
        .pipe(gulp.dest(joinPath(paths.dist, paths.js)));
})

gulp.task('fonts', task.fonts = function () {
    return gulp.src(joinPath(paths.fonts, '**/*'))
        .pipe(gulp.dest(joinPath(paths.dist, paths.fonts)));
});

gulp.task('clean', task.clean = function () {
    return gulp.src(joinPath(paths.dist, '*'))
        .pipe(clean());
});

gulp.task('pages', task.pages = gulp.series('html', 'deletelanguagemenuitem'));

gulp.task('default', task.default = gulp.series('pages', 'css', 'images', 'favicon', 'js', 'htc', 'fonts', 'revReplace'));

gulp.task('build', task.build = gulp.series(task.clean, task.default));

gulp.task("watch", function () {
    gulp.watch(joinPath(paths.templates, '**/*.html'), gulp.series('pages'));
    gulp.watch(joinPath(paths.sass, '**/*.scss'), gulp.series('css'));
    gulp.watch(joinPath(paths.languages, '**/*.yaml'), gulp.series('deletelanguagemenuitem'));
    gulp.watch(joinPath(paths.js, '**/*.js'), gulp.series('js'));
})
