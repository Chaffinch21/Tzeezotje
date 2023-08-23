const {src, dest} = require('gulp');
const concat = require('gulp-concat');
const cssimport = require('gulp-cssimport')
const autoprefixes = require('gulp-autoprefixer');
const cleanCss = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const gulpif = require('gulp-if');
const argv = require('yargs').argv;
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const shorthand = require("gulp-shorthand");
const groupCssMediaQueries = require("gulp-group-css-media-queries");
const webpCss = require('gulp-webp-css');

const path = require("../config/path.js");
const app = require('../config/app.js');

const css = () => {
  return src(path.css.src, { sourcemaps: app.isDev})
  .pipe(plumber({
    errorHandler: notify.onError(error => ({
      title: "CSS",
      message: error.message
    }))
  }))
  .pipe(concat('vendor.css'))
  .pipe(cssimport())
  // .pipe(webpCss())
  .pipe(autoprefixes())
  // .pipe(shorthand())
  // .pipe(groupCssMediaQueries())
  .pipe(gulpif(app.isProd, cleanCss({
    level: 2,
  })))
  .pipe(dest(path.css.dest, {sourcemaps: app.isDev}))
}

module.exports = css;