const isProd = process.argv.includes("--production");
const isDev = !isProd;

module.exports = {
  isProd: isProd,
  isDev: isDev,

  htmlMin: {
    collapseWhitespace: isProd,
  },
  
  pug: {
    pretty: isDev
  },

  image: {
    verbose: true
  },
  
  fonter: {
    formats: ["ttf", "woff", "woff2"]
  },

}