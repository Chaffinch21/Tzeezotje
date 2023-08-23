const {src, dest} = require('gulp');
const htmlMin = require('gulp-htmlmin');
const gulpif = require('gulp-if');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const webpHtml = require('gulp-webp-html');

const path = require("../config/path.js");

const html = () => {
  return src(path.html.src)
  .pipe(plumber({
    errorHandler: notify.onError(error => ({
      title: "HTML",
      message: error.message
    }))
  }))
  .pipe(webpHtml())
  // .pipe(gulpif(app.isProd, htmlMin(app.htmlMin)))
  .pipe(dest(path.html.dest))
}

module.exports = html;