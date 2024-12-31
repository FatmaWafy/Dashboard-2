let gulp = require("gulp"),
  concat = require("gulp-concat");

gulp.task("htmlHandler", () => {
  return gulp
    .src("./HTML/*.html")
    .pipe(concat("allHTML"))
    .pipe(gulp.dest("client-file"));
});

gulp.task("cssHandler", () => {
  return gulp
    .src("./CSS/*.css")
    .pipe(concat("allCSS"))
    .pipe(gulp.dest("client-file"));
});

gulp.task("jsHandler", () => {
  return gulp
    .src("./JS/*.js")
    .pipe(concat("allJS"))
    .pipe(gulp.dest("client-file"));
});
