# starter-angular-fractal Changelog

## 2.4.1

- updated: html minification switched from gulp-minify-html to gulp-htmlmin.  This brought performance improvements and us back to a supported html minification library.   
- fix: added jquery as dependency to fix issue with bootstrap-sass pulling in jquery 3.0 which is not compatible with bootstrap.
- fix: IE8 template did not minify properly due to not copying over the IE8 only bower_component javascript files that are reference in the < IE9 html comment in the index.html file.  
- removed: No longer is jquery excluded from the bower js inject for the IE8 template. 


## 2.4.0

- fix: changed stage to space due to a change in ICAP API change
- fix: removed proxy setting in .bowerrc as it was causing issues for some devs. This should be set in the user's global configuration files as [documented on ITDZ](https://itdz.intel.com/#/content/setup-proxies).
- chore: updated intcAppFrame to v4.0.2


## 2.3.0

Even though there are no new or breaking features there were significant updates to several dependencies so this will be considered a minor release.

- chore: update dependencies
- chore: add karma as a dependency
- chore: add .vscode to ignore list
- chore: eslint angular plugin and associated rule names
- fix: remove custom rule; causing babel template to fail
- fix: excluded angular-mocks and angular-scenario when running in browser
- fix: issue with babel eslint not returning lint correctly
- fix: babel needed to load angular-scenario before loading bard.js
- refactor: injectCSS that it ran all of the needed functions for moveVendorCssFiles and compileStyle before calling gulp-inject

## 2.2.6

- Working to resolve an issue on windows os where **es5** generates a `gulp.js` file.  When running `gulp serve` the `gulp.js` opens in notepad.  Found an instance of `gulp.js` in this project in `.deploy`.
- [Issue 38](https://github.intel.com/intc/starterbot-9000/issues/38)

## 2.2.5

Implement the unit testing and continuous integration items listed in [Unit-Testing with Angular Chai Karma Mocha and Sinon](https://soco.intel.com/people/jdmcgrew/blog/2015/10/30/unit-testing-with-mocha-angularjs-sinon-chai)

- added `eslint` folder for reports and custom rules
- added `eslint\reports\teamcity-lite-reporter.js` for reporting lint results in TeamCity; also added `eslint-html-reporter` dependency to package.json
- added `eslint\rules\angular-scope-watch.js` as an example custom eslint rule; also modified `.eslintrc` to configure rule as warning.
- updated `README.md` to include note about what the target names are; also fixed a type as sermaster should have been master.
- updated bower dependencies to include `sinon-as-promised` for testing with promises.
- update node.js dependencies with test modules including sinon, chai, angular-mocks and for running them under karma.
- updated gulp unit-test config for reporting results for TeamCity
- updated gulp lint config for reporting results for TeamCity
- added `cilint` and `citest` tasks for gulp for TeamCity integration.
- updated karma.conf.js: alphabetized config for ease-of-use; added unit test capabilities for coverage
- updated gulp config script to include test files and folders
- updated gulp inject script to include test files and folders for karma.

## 2.1.5

Related to 2.1.3; was able to get `gulp-natural-sort` module updated in npm.

1. `package.json` updated `gulp-natural-sort` to 0.1.1

## 2.1.4

Replaced `console.log` statements with AngularJS `$log` usage.

1. modified `templates/app/bulletin-board/bulletin-board.controller.js` to use `$log`

## 2.1.3

Found an issue where `gulp-natural-sort` module was failing due to an undefined function on the global `String` object `naturalCompare`.  Fixed the module and hosting it internall.

1. `package.json` to point to internal `gulp-natural-sort`
1. `README.md` updates on usage of this repository.

## 2.1.2

Though `gulp-bump` is included it is not instrumented.  This update adds bump commands for gulp

- added `gulp\bump.js`
- modified `gulpfile.js` to include bump tasks
- modified `package.json` to include semver as dependency
- new gulp commands
	1. `gulp bump:patch`: updated patch version
	1. `gulp bump:minor`: updated minor version
	1. `gulp bump:major`: updated major version

## 2.0.2

Noticed in some versions of Bootstrap CSS a woff2 font is included.  Noticed a 404 when running `gulp serve`

- Modified `gulp\build.js` `moveAndFlattenFonts` function to also include woff2 files

## 2.0.1

The main purpose of this patch release was to split the gulpfile into multiple files so it is more understandable and modular. Along with doing that, some other small changes were made:
- Improved rename-project task to rename kebab-case and camel-case names across the project.
- Added bump tasks.
- Fixed project name typos (was angularStarterFractal in multiple spots, where it should be starterAngularFractal or starter-angular-fractal).
- Removed unused test folder.
- Remove jshint completely.
- Aligned html minification options with starter-bower-component. This required moving the html minification to a different task, now that comments are also being stripped (this broke the injection if we minify before).


## 2.0.0

The purpose of this major release was to align with our newly published [AngularJS Style Guide][ng-styleguide] as well as adhereing to [Semantic Versioning][versioning] (semver) so you may notice some of our assets have gone from a < 0.Y.Z to a 2.0.0 or 3.0.0. We did this in order to get our assets on the semver path.

### No more Grunt

The biggest change to our Angular starter is that Grunt has been replaced by Gulp. We opened the [vote][gulpVote] up to the community and those that voted clearly wanted to switch to Gulp. For those that wanted to stick to Grunt, apologies. Let me just ask that you give Gulp a week and if you are not convinced you can switch back, but you will have to create and maintain the Gruntfile.js yourself. For those that never touched the Gruntfile.js, then the only change for you will be small changes:

* Local server: `grunt serve` is now `gulp serve`
* Local server+build: `grunt serve:dist` is now `gulp serve-dist`
* Build: `grunt build` is now `gulp build`

I'm guessing you have already got the changes memorized. :) And I guarantee you will enjoy the huge performance improvement!

For those that did modify Gruntfile.js you will need to learn how Gulp works. If you are comfortable with Node.js (streams) than Gulp will be a slam dunk. For those not familiar with streams than I highly recommend this Pluralsight course, [JavaScript Build Automation with Gulp.js][gulp].

## No more Ruby/Compass Dependency

This version of the starter uses [MLAF v3.0][mlaf-log] which eliminated the Ruby dependency by making everything compatible with node-sass/libsass and ditching compass. Now we have one fewer dependency (node-sass is just an npm package), and sass compilation is much faster (libsass is written in C). Yeah!

### JavaScript Changes

The other major change in this release is the coding style of JavaScript files. The template now follows our [AngularJS Style Guide][ng-styleguide] and we even have added a gulp lint task that will ensure you are following the style guide's best practices. These _rules_ can be configured in the **.eslintrc** file. The lint task runs for all the core gulp tasks (e.g., `gulp serve`, `gulp build`, ...) or you can run just the lint task: `gulp lint`. In most cases the rules have been set to 0 (ignore) or 1 (warn). If you would rather have any rule cause an error (stop a build) then you can set it to 2 (error). Keep in mind that some rules are not simply a 0, 1, or 2 value but take additional parameters as well.

## intcAnalytics

Now both [Google Analytics and System-Analytics-Usage][metrics] has been integrated via [intcAnalytics][ia].



[gulp]: http://www.pluralsight.com/courses/javascript-build-automation-gulpjs
[gulpVote]: https://soco.intel.com/polls/7647
[ia]: https://github.intel.com/intc/intcAnalytics
[metrics]: http://itdz.intel.com/#/metrics
[mlaf-log]: https://github.intel.com/IT-UI-Assets/it-mlaf-sass/blob/master/CHANGELOG.md
[ng-styleguide]: http://goto.intel.com/ng-styleguide
[versioning]: http://goto.intel.com/versioning
