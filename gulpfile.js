var gulpfile = require("gulp");
var babel = require("gulp-babel");

gulpfile.task("default", function () {
	return gulpfile.src("foo/foo.js")
		.pipe(babel())
		.pipe(gulpfile.dest("dist"));
});
