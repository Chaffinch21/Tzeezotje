const {src, dest} = require('gulp');
const connect = require('gulp-connect-php');
const path = require("../config/path.js");
let server = new connect();

const mail = () => {
  return src(path.mail.src)
  .pipe(connect.server({
    base: 'dist',
    port: 3000,
    keepalive: true
  })
)
}

module.exports = mail;