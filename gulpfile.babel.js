import gulp from 'gulp';
import postcss from 'gulp-postcss';
import sourcemaps from 'gulp-sourcemaps';
import cssnext from 'postcss-cssnext';
import rename from 'gulp-rename';
import atimport from 'postcss-import';
import babel from 'gulp-babel';
import concat from 'gulp-concat';

const stylesheets = ['_css/*.css']; 
const scripts = ['_js/vendor/*.js', '_js/main.js'];
const targetCss = 'dist/';

gulp.task('css', () => {
    let processors = [
        atimport,
        cssnext
    ];

    gulp.src('_css/main.css')
        .pipe(sourcemaps.init())
        .pipe(postcss(processors))
        .pipe(sourcemaps.write('dist'))
        .pipe(rename('app.css'))
        .pipe(gulp.dest(targetCss))
});

gulp.task('js', () => {
    gulp.src(['_js/vendor/*.js', '_js/main.js'])
        .pipe(sourcemaps.init())
        .pipe(concat('main.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/'));
});

gulp.task('watch', () => {
    gulp.watch(stylesheets, ['css']);
    gulp.watch(scripts, ['js']);
});

gulp.task('default', ['watch']);
