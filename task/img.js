const {src, dest} = require('gulp');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const image = require('gulp-imagemin');
const gulpif = require('gulp-if');
const path = require('../config/path');
const app = require('../config/app');
const newer = require('gulp-newer');
const webp = require('gulp-webp');

const img = () => {
  return src(path.img.src)
  .pipe(plumber({
    errorHandler: notify.onError(error => ({
      title: "IMG",
      message: error.message
    }))
  }))
  .pipe(newer(path.img.dest))
  .pipe(webp())
  .pipe(dest(path.img.dest))
  .pipe(src(path.img.src))
  .pipe(newer(path.img.dest))
  .pipe(gulpif(app.isProd, image(app.image)))
  .pipe(dest(path.img.dest))
}

module.exports = img;