'use strict';

var gulp = require('gulp');
var plugins = {
	util: require('gulp-util'),
	webpack: require('webpack-stream')
};

var browserSync = require('browser-sync');

var config = require('./config'),
	paths = config.paths,
	files = config.files;

function transpileScripts(sourceMaps, done) {

	var webpackOptions = {
		watch: false,
		module: {
			preLoaders: [{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'eslint-loader'
			}],
			loaders: [{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel'
			}]
		},
		output: {filename: 'index.js'}
	};

	if (sourceMaps) {
		webpackOptions.devtool = 'inline-source-map';
	}

	var webpackChangeHandler = function (err, stats) {
		if (err) {
			config.errorHandler('webpack')(err);
		}
		plugins.util.log(stats.toString({
			colors: plugins.util.colors.supportsColor,
			chunks: false,
			hash: false,
			version: true
		}));
		done();
	};

	return gulp.src(files.indexJs)
		.pipe(plugins.webpack(webpackOptions, null, webpackChangeHandler))
		.pipe(gulp.dest(paths.tmp));
}

function transpile(done) {
	return transpileScripts(false, done);
}

function transpileWithSourcemaps(done) {
	return transpileScripts(true, done);
}


module.exports = {
	transpile: transpile,
	transpileWithSourcemaps: transpileWithSourcemaps
};
