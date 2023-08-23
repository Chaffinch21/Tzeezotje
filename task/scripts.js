const {src, dest} = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const gulpif = require('gulp-if');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');

const path = require('../config/path.js');
const app = require('../config/app.js');

const scripts = () => {
  return src(path.js.src, { sourcemaps: app.isDev })
  .pipe(plumber({
    errorHandler: notify.onError(error => ({
      title: "JS",
      message: error.message
    }))
  }))
  .pipe(gulpif(app.isProd, babel()))
  .pipe(gulpif(app.isProd, uglify()))
  .pipe(dest(path.js.dest, {sourcemaps: app.isDev}))
}

module.exports = scripts;