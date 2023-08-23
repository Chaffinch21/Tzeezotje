const {src, dest} = require('gulp');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');

const path = require('../config/path');


const favicon = () => {
  return src(path.favicon.src)
  .pipe(plumber({
    errorHandler: notify.onError(error => ({
      title: "Favicon",
      message: error.message
    }))
  }))
  .pipe(dest(path.favicon.dest))
}

module.exports = favicon;