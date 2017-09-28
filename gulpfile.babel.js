import gulp from 'gulp'
import gulpSequence from 'gulp-sequence'
import autoprefixer from 'gulp-autoprefixer'
import del from 'del'
import ejs from 'gulp-ejs'
import less from 'gulp-less'
import plumber from 'gulp-plumber'
import gulpWebpack from 'gulp-webpack'
import webpack from 'webpack'
import config from './webpack.config'
import browserSync from 'browser-sync'

gulp.task('clean', () => {
  return del('build/**/*')
})

gulp.task('resources', () => {
  return gulp.src('resources/*')
    .pipe(gulp.dest('build'))
})

gulp.task('js', () => {
  return gulp.src('js/*.js')
    .pipe(plumber())
    .pipe(gulpWebpack(config, webpack))
    .pipe(gulp.dest('build/js'))
    .pipe(browserSync.stream())
})

gulp.task('less', () => {
  return gulp.src('less/main.less')
    .pipe(plumber())
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(gulp.dest('build/css'))
    .pipe(browserSync.stream())
})

gulp.task('pages', () => {
  return gulp.src('pages/views/**/*.ejs')
    .pipe(plumber())
    .pipe(ejs({}, {}, {
      ext: '.html'
    }))
    .pipe(gulp.dest('build'))
    .pipe(browserSync.stream())
})

gulp.task('build', gulpSequence('clean', ['js', 'less', 'pages', 'resources']))

gulp.task('watch', () => {
  browserSync.init({
    server: 'build'
  })

  gulp.watch('js/**/*.js', ['js'])

  gulp.watch('less/**/*.less', ['less'])

  gulp.watch('pages/**/*.ejs', ['pages'])

  gulp.watch('build/**/*.html', browserSync.reload)
})

gulp.task('default', gulpSequence('build', 'watch'))
