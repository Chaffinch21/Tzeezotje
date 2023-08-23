const del = require('del');

const path = require("../config/path.js");

const clean = () => {
  return del(path.root);
}

module.exports = clean;