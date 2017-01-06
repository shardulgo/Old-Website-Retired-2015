// 'use strict';
//
// var gulp = require('gulp'),
// 	_ = require('lodash'),
// // icap-publish deploys your application to Intel Cloud Application Portal: https://apps.intelcloud.intel.com/
// // for icap-publish documentation, see: https://github.intel.com/intc/icap-publish
// 	icapPublish = require('icap-publish');
//
// var buildDist = require('./build').buildDist,
// 	config = require('./config'),
// 	paths = config.paths;
//
//
// // development config is default config and properties are overridden for test and prod
// var icapConfig = {
// 	appName: config.projectName + '-dev',
// 	org: 'YourOrg',
// 	space: 'YourDevelopmentSpace',
// 	deployFolder: paths.dist,
// 	buildpack: 'staticfile_buildpack',
// 	iCloudApiUrl: 'https://api.apps1-fm-int.icloud.intel.com',
// 	iCloudUrl: 'apps1-fm-int.icloud.intel.com'
// };
//
// var deployDev = gulp.series(
// 	buildDist,
// 	function pushDev(done) {
// 		icapPublish.push(icapConfig);
// 		done();
// 	}
// );
//
// var deployTest = gulp.series(
// 	buildDist,
// 	function pushTest(done) {
// 		icapPublish.push(_.merge(_.clone(icapConfig), {
// 			appName: config.projectName + '-test',
// 			space: 'YourTestSpace'
// 		}));
// 		done();
// 	}
// );
//
// var deployProd = gulp.series(
// 	buildDist,
// 	function pushProd(done) {
// 		icapPublish.push(_.merge(_.clone(icapConfig), {
// 			appName: config.projectName,
// 			space: 'YourProductionSpace'
// 		}));
// 		done();
// 	}
// );
//
//
// module.exports = {
// 	deployDev: deployDev,
// 	deployTest: deployTest,
// 	deployProd: deployProd
// };
