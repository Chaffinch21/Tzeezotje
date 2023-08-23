const {series, parallel, watch} = require('gulp');
const browserSync = require('browser-sync').create();
var url = require('url');
const proxyMiddleware = require('proxy-middleware');
const clean = require('./task/clean.js');
const html = require('./task/html.js');
const scss = require('./task/scss.js');
const css = require('./task/css.js');
const scripts = require('./task/scripts.js');
const img = require('./task/img.js');
const font = require('./task/font.js');
const svgSprites = require('./task/svgSprites');
const favicon = require("./task/favicon.js");
const resources = require("./task/resources.js");
const json = require("./task/json.js");
let proxy = proxyMiddleware('/ajax', {target: '127.0.0.1'});

const path = require('./config/path.js');
const app = require('./config/app.js');

const watchFiles = () => {
  browserSync.init({
    // server: {
    //   baseDir: path.root
    // },
    open: true,
    port: 3000,
    startPath: './index.html',
    server: {
      baseDir: path.root,
      directory: true
    }
  })

}

const watcher = () => {
  watch(path.html.watch, html).on("all", browserSync.reload);
  watch(path.scss.watch, scss).on("all", browserSync.reload);
  watch(path.css.watch, css).on("all", browserSync.reload);
  watch(path.js.watch, scripts).on("all", browserSync.reload);
  watch(path.img.watch, img).on("all", browserSync.reload);
  watch(path.font.watch, font).on("all", browserSync.reload);
  watch(path.svg.watch, svgSprites).on("all", browserSync.reload);
  watch(path.favicon.watch, favicon).on("all", browserSync.reload);
  watch(path.resources.watch, resources).on("all", browserSync.reload);
  watch(path.json.watch, json).on("all", browserSync.reload);
}

const build = series(
  clean,
  parallel(html, css, scss, scripts, img, svgSprites, font, favicon, resources, json)
);

const dev = series(
  build,
  parallel(watcher, watchFiles)
)

exports.scripts = scripts;
exports.html = html;
exports.scss = scss;
exports.css = css;
exports.img = img;
exports.font = font;
exports.svgSprites = svgSprites;
exports.favicon = favicon;
exports.resources = resources;
exports.json = json;

exports.default = app.isProd ? build : dev;