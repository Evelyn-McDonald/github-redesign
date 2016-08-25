var gulp        = require('gulp');
var browserify  = require('browserify');
var babelify    = require('babelify');
var sass    	= require('gulp-sass');
var source      = require('vinyl-source-stream');
var uglify      = require('gulp-uglify');
var rename      = require('gulp-rename');
var runSequence = require('run-sequence');
var nodemon     = require('gulp-nodemon');


gulp.task('build:redux', function () {
    return browserify({
        entries: 'app.js',
        extensions: ['.jsx'],
        debug: true
    })
    .transform(babelify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('build:sass', function () {
    return gulp.src('./styles/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist'));
});

gulp.task('compress', function() {
    return gulp.src('./dist/bundle.js')
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist'));
});


gulp.task('watch:redux', function() {
    return gulp.watch(['./app.js'], ['restart:redux']);
});


gulp.task('start:redux', function () {
    nodemon({
        script: './app.js',
        verbose: true,
        watch: './',
        ext: 'js jsx scss'
    })
    .on('restart', 'build:redux')
})


gulp.task('default', function(cb) {
  runSequence(['build:redux', 'build:sass', 'compress'], cb );
});
gulp.task('watch', function(cb) {
    runSequence(['build:redux', 'build:sass', 'compress'], 'stop:all', ['start:redux'], ['watch:redux', 'watch:sass'], cb);
});