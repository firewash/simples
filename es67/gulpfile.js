var gulp = require("gulp");
var babel = require('gulp-babel');


var dirs = {
    src:"src",
    dest:"build"
};

var es6Path = {
    src:`${dirs.src}/*.js`,
    dest:`${dirs.dest}`
};

gulp.task("babel_trans",function(){
   console.log("hello , gulp");
    return gulp.src(es6Path.src)
         .pipe(babel({presets: ['es2015']}))
        // .on("error",function(e){console.log(e);this.emit('end');})
         .pipe(gulp.dest(es6Path.dest));
});

gulp.task("watch",function(){
    //return false;
   gulp.watch(es6Path.src, ["babel_trans"]);
});

gulp.task("default",["babel_trans","watch"])