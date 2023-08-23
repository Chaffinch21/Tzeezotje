const {src, dest} = require('gulp');
const autoprefixes = require('gulp-autoprefixer');
const cleanCss = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const gulpif = require('gulp-if');
const argv = require('yargs').argv;
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const shorthand = require("gulp-shorthand");
const groupCssMediaQueries = require("gulp-group-css-media-queries");
const sass = require('sass');
const gulpSass = require('gulp-sass');
const mainSass = gulpSass(sass);
const sassGlob = require('gulp-sass-glob');
const webpCss = require('gulp-webp-css');

const path = require('../config/path.js');
const app = require('../config/app.js');
const { isProd } = require('../config/app.js');

const scss = () => {
  return src(path.scss.src, { sourcemaps: app.isDev})
  .pipe(plumber({
    errorHandler: notify.onError(error => ({
      title: "SCSS",
      message: error.message
    }))
  }))
  .pipe(sassGlob())
  .pipe(mainSass())
  .pipe(webpCss())
  .pipe(autoprefixes({
    cascade: false,
    grid: true
  }))
  .pipe(shorthand())
  .pipe(groupCssMediaQueries())
  .pipe(gulpif(app.isProd, cleanCss({
    level: 2,
  })))
  .pipe(dest(path.scss.dest, {sourcemaps: app.isDev}))
}

module.exports = scss;