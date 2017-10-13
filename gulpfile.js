	const gulp = require('gulp'); 
	const concat = require('gulp-concat'); 
	const uglify = require('gulp-uglify');
	const minify = require('gulp-minify-css');
	const browserSync = require('browser-sync').create();
	
	const scripts = require('./scripts'); 
	const styles = require('./styles');



	var devMode = false;

	gulp.task('css', function() {
		gulp.src(styles)
			.pipe(concat('main.css'))
			.pipe(minify())
			.pipe(gulp.dest('./webipts/css'))
			.pipe(browserSync.reload({
				stream: true
		}));
	});


	gulp.task('js', function() {
		gulp.src(scripts)
			.pipe(concat('scripts.js'))
			// .pipe(uglify().on('error', function(e) {
			// 	console.log(e);
			// }))
			.pipe(gulp.dest('./webipts/js'))
			.pipe(browserSync.reload({
				stream: true
		}));
	});

	
	gulp.task('html', function() {
		gulp.src('./src/templates/**/*.html')
			.pipe(gulp.dest('./webipts/'))
			.pipe(browserSync.reload({
				stream: true
		}));
	});

	
	gulp.task('images', function() {
		gulp.src('./src/images/**/*.{png, jpg, jpeg}')
			.pipe(gulp.dest('./webipts/images/'))
			.pipe(browserSync.reload({
				stream: true
		}));
	});


	gulp.task('build', function() {
		gulp.start(['css', 'js', 'html', 'images']);
	});

	gulp.task('browser-sync', function() {
		browserSync.init(null, {
			open: false,
			server: {
				baseDir: 'webipts'
			}
		});
	});


	gulp.task('start', function() {
		devMode = false;
		gulp.start(['build', 'browser-sync']);
		gulp.watch(['./src/css/**/*.css'], ['css']);
		gulp.watch(['./src/js/**/*.js'], ['js']);
		gulp.watch(['./src/templates/**/*.html'], ['html']);
		gulp.watch(['./src/images'], ['images']);
	});