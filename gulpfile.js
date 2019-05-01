/*
Gulp task - define task
gulp.src - points to files/folders
gulp.dest - compile to
gulp.watch - watch changes
*/

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
	return gulp.src(['./sass/*.scss'])
		.pipe(sass())
		.pipe(gulp.dest('./css/custom'))
    //.pipe(browserSync.stream());
		.pipe(browserSync.reload({stream: true}));

		//.pipe(sass().on('error', sass.logError))
});

//gulp.task('serve', function() {
gulp.task('serve', ['sass'], function() {

	browserSync.init({
		server: './'
	});

	gulp.watch('./scss/*.scss', ['sass']);
	gulp.watch('./*.html').on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
