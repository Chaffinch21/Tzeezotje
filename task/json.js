const {src, dest} = require('gulp');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const jeditor = require('gulp-json-editor');
const path = require('../config/path');


const json = () => {
  return src(path.json.src)
  .pipe(plumber({
    errorHandler: notify.onError(error => ({
      title: "json",
      message: error.message
    }))
  }))
  .pipe(jeditor({
  }))
  .pipe(dest(path.json.dest))
}

module.exports = json;