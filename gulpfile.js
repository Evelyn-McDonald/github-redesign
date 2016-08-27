var gulp        = require('gulp');
var browserify  = require('browserify');
var watchify    = require('watchify');
var babelify    = require('babelify');
var sass    	= require('gulp-sass');
var source      = require('vinyl-source-stream');
var rename      = require('gulp-rename');
var runSequence = require('run-sequence');
var nodemon     = require('gulp-nodemon');

var watching = false;

/* Build Functions */
gulp.task('build:redux', function () {
    return makeBundle(watching);
});

gulp.task('build:sass', function () {
    return gulp.src('./styles/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist'));
});


/* Watch Functions */
gulp.task('watching', function() {
    watching = true;
});

gulp.task('watch:sass', function () {   
    return gulp.watch('./styles/**/*.scss', ['build:sass']);
});


/* Start server */
gulp.task('start:redux', function () {
    nodemon({
        script: './app.js',
        verbose: true,
        watch: './',
        ext: 'js jsx scss'
    })
    //.on('restart', 'build:redux', 'build:sass')
})


/* Gulp Tasks */
gulp.task('default', function(cb) {
    runSequence(['build:redux', 'build:sass'], 'start:redux', cb );
});

gulp.task('watch', function(cb) {
    runSequence(['watching', 'build:redux', 'build:sass'], 'start:redux', ['watch:sass'], cb);
});


/* Browserify and Watchify functions */
function makeBundle(watching) {
    var props = {
        entries: ['app.js', 'index.js'],
        transform: [babelify],
        extensions: ['.js', '.jsx'],
        debug: true,
        cache: {},
        packageCache: {}
    }
    if (watching)
        props.plugin = [watchify];

    var bundler = browserify(props);

    function rebundle() {
        var stream = bundler.bundle();
        return stream.on('error', function(err) {
            console.log(err.message);
        })
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('dist'));
    }

    bundler.on('update', function() {
        rebundle();
        console.log('Rebundling bundle of abundant bundt...');
    });

    return rebundle();
}
