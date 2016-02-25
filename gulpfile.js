var gulp = require('gulp');
var karma = require('karma');

gulp.task('test', function(done) {
	new karma.Server({
		configFile: __dirname + '/spec/karma.conf.js',
		singleRun: true,
		autoWatch: false
	}, done).start();
});
