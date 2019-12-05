const {src, dest, watch} = require('gulp');
const browserSync =require('browser-sync').create();
const sass = require ('gulp-sass');
// Static server
function bs() {
  serveSass();
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  watch("./*.html").on('change', browserSync.reload);
  watch("./sass/**/*.sass").on('change', serveSass);
  watch("./sass/**/*.scss").on('change', serveSass);
  watch("./js/*.js").on('change', browserSync.reload);
};
function serveSass() {
  return src("./sass/*.sass", "./sass/**/*.scss")
      .pipe(sass())
      .pipe(dest("./css"))
      .pipe(browserSync.stream());
};
exports.serve = bs;
// or...