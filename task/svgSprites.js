const {src, dest} = require('gulp');
const svgSprite = require('gulp-svg-sprite');

const path = require('../config/path.js')

const svgSprites = () => {
  return src(path.svg.src)
  .pipe(svgSprite({
    mode: {
      stack: {
        sprite: '../sprite.svg'
      }
    }
  }))
  .pipe(dest(path.svg.dest))
}

module.exports = svgSprites;