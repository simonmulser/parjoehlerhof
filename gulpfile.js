var gulp = require('gulp'),
    fileinclude = require('gulp-file-include'),
    rename = require('gulp-rename'),
    path = require("path");

var paths = {
    templates: './templates'
}

gulp.task('fileinclude', function() {
    return gulp.src(path.join(paths.templates, '*.tpl.html'))
        .pipe(fileinclude({indent: true}))
        .pipe(rename({
            extname: ""
        }))
        .pipe(rename({
            extname: ".html"
        }))
        .pipe(gulp.dest('./'))
});
