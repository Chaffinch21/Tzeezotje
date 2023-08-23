const {src, dest} = require('gulp');
const path = require('../config/path');
const newer = require('gulp-newer');

const font = () => {
  return src(path.font.src)
  .pipe(dest(path.font.dest))
}

module.exports = font;