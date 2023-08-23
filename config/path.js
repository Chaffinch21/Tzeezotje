const pathSrc = "./src";
const pathDest = "./dist";

module.exports ={
  root: pathDest,

  html: {
    src: pathSrc + "/html/*.html",
    watch: pathSrc + "/html/**/*.html",
    dest: pathDest
  },

  pug: {
    src: pathSrc + "/pug/*.pug",
    watch: pathSrc + "/pug/**/*.pug",
    dest: pathDest
  },

  css: {
    src: pathSrc + "/sass/*.css",
    watch: pathSrc + "/sass/**/*.css",
    dest: pathDest +"/css"
  },

  scss: {
    src: pathSrc + "/sass/*.scss",
    watch: pathSrc + "/sass/**/*.scss",
    dest: pathDest +"/css"
  },

  js: {
    src: pathSrc + "/js/*.js",
    watch: pathSrc + "/js/**/*.js",
    dest: pathDest
  },

  resources: {
    src: pathSrc + "/resources/**",
    watch: pathSrc + "/resources/**",
    dest: pathDest +"/resources"
  },

  mail: {
    src: pathSrc + "/mail/*.php",
    watch: pathSrc + "/mail/*.php",
    dest: pathDest
  },

  img: {
    src: [
      pathSrc + '/img/**/*.jpg',
      pathSrc + '/img/**/*.png',
      pathSrc + '/img/**/*.jpeg',
      pathSrc + '/img/**/*.gif',
      pathSrc + '/img/**/*.svg'
    ],
    watch: [
      pathSrc + '/img/**/*.jpg',
      pathSrc + '/img/**/*.png',
      pathSrc + '/img/**/*.jpeg',
      pathSrc + '/img/**/*.gif',
      pathSrc + '/img/**/*.svg'
    ],
    dest: pathDest +"/img"
  },

  font: {
    src: [
      pathSrc + '/font/**/*.eot',
      pathSrc + '/font/**/*.ttf',
      pathSrc + '/font/**/*.woff',
      pathSrc + '/font/**/*.woff2',
      pathSrc + '/font/**/*.svg'
    ],
    watch: [
      pathSrc + '/font/**/*.eot',
      pathSrc + '/font/**/*.ttf',
      pathSrc + '/font/**/*.woff',
      pathSrc + '/font/**/*.woff2',
      pathSrc + '/font/**/*.svg'
    ],
    dest: pathDest +"/font"
  },

  svg: {
    src: pathSrc + "/img/svg/*.svg",
    watch: pathSrc + "/img/svg/**/*.svg",
    dest: pathDest +"/img"
  },

  favicon: {
    src: pathSrc + "/img/favicon/favicon.png",
    watch: pathSrc + "/img/favicon/favicon.png",
    dest: pathDest +"/img/favicon/"
  },

  json: {
    src: pathSrc + "/data/**/*.json",
    watch: pathSrc + "/data/**/*.json",
    dest: pathDest +"/data"
  }
}