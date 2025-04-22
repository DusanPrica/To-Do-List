const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');

gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });

    gulp.watch('*.html').on('change', browserSync.reload);
    gulp.watch('*.js').on('change', browserSync.reload);
    gulp.watch('*.css').on('change', browserSync.reload);
});

gulp.task('scripts', function () {
    return gulp.src('js/*.js')              
        .pipe(concat('app.min.js'))          
        .pipe(uglify())                      
        .pipe(gulp.dest('dist/js'));         
});

gulp.task('styles', function () {
    return gulp.src('css/*.css')
        .pipe(concat('style.min.css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist/css'));         
});

gulp.task('html', function () {
    return gulp.src('*.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('default', gulp.series('scripts', 'styles', 'html', 'serve'));