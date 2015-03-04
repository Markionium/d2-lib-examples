var gulp = require('gulp');

gulp.task('d2-up', function () {
    return gulp.src('../d2/build/**')
        .pipe(gulp.dest('d2'));
});

gulp.task('copy', function () {
    gulp.src('./**/*.*', { base: './' }).pipe(gulp.dest('/usr/local/apache-tomcat-8.0.5/webapps/dhis/apps/d2-test/'));
});
