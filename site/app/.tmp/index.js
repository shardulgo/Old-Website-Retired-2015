/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	__webpack_require__(2);

	__webpack_require__(3);

	// import './blog/blog.controller';

	__webpack_require__(4);

	__webpack_require__(5);

	__webpack_require__(6);

	__webpack_require__(7);

	__webpack_require__(8);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	(function () {
		'use strict';

		angular.module('shardulGo', [
		//Angular dependencies
		'ngCookies', 'ngResource', 'ngSanitize', 'ngRoute',
		//3rd Party dependencies
		'tmixCaching', 'ui.bootstrap', 'ui.materialize', 'uiGmapgoogle-maps'
		//Custom dependencies
		]).config(config);

		/* ngInject */
		function config($routeProvider) {
			$routeProvider.when('/', {
				templateUrl: 'home/home.html',
				controller: 'HomeController',
				controllerAs: 'vm',
				activeTab: 'home'
			}).when('/about', {
				templateUrl: 'about/about.html',
				controller: 'AboutController',
				controllerAs: 'vm',
				activeTab: 'about'
			}).when('/education', {
				templateUrl: 'education/education.html',
				controller: 'EducationController',
				controllerAs: 'vm',
				activeTab: 'education'
			}).when('/blog', {
				templateUrl: 'blog/blog.html',
				controller: 'BlogController',
				controllerAs: 'vm',
				activeTab: 'blog'
			}).when('/experience', {
				templateUrl: 'experience/experience.html',
				controller: 'ExperienceController',
				controllerAs: 'vm',
				activeTab: 'experience'
			}).when('/contact', {
				templateUrl: 'contact/contact.html',
				controller: 'ContactController',
				controllerAs: 'vm',
				activeTab: 'contact'
			}).otherwise({
				redirectTo: '/'
			});
		}
	})();

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	(function () {
		'use strict';

		/**
	  * @ngdoc module
	  * @name starterAngularFractal.module:starterAngularFractal
	  * @description Gets some squirrels on the scope.
	  */
		angular.module('shardulGo').controller('HomeController', Home);

		/* @ngInject */
		function Home($scope, $window, $location, $route, preloader) {
			var vm = this;
			vm.route = route;
			vm.triggerAnimations = triggerAnimations;
			vm.sendEventTracker = sendEventTracker;

			vm.imageLocations = ["images/Picture3.png", "images/desk.jpg", "images/mopar.jpg", "images/parkway2.jpg", "images/me.jpg", "images/az.jpg", "images/asu.jpg"];
			// Preload the images; then, update display when returned.
			preloader.preloadImages(vm.imageLocations);

			init();
			function init() {
				$window.ga('send', 'pageview', { page: $location.url() });
			}

			vm.currentRoute = $route;

			function route(url) {
				$location.path(url);
			}

			function sendEventTracker(clicked) {
				ga('send', 'event', clicked, 'clicked');
			}

			function triggerAnimations() {
				return "animate fadeIn";
			}
		}
	})();

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	(function () {
		'use strict';

		/**
	  * @ngdoc module
	  * @name starterAngularFractal.module:starterAngularFractal
	  * @description Gets some squirrels on the scope.
	  */
		angular.module('shardulGo').controller('AboutController', AboutController);

		/* @ngInject */
		function AboutController($scope, $window, $location, $route, preloader) {
			var vm = this;
			vm.route = route;
			vm.sendEventTracker = sendEventTracker;
			vm.currentRoute = $route;

			function route(url) {
				$location.path(url);
			}

			init();
			function init() {
				$window.ga('send', 'pageview', { page: $location.url() });
			}

			function sendEventTracker(clicked) {
				ga('send', 'event', clicked, 'clicked');
			}
		}
	})();

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	(function () {
		'use strict';

		/**
	  * @ngdoc module
	  * @name starterAngularFractal.module:starterAngularFractal
	  * @description Gets some squirrels on the scope.
	  */
		angular.module('shardulGo').controller('EducationController', EducationController);

		/* @ngInject */
		function EducationController($scope, $window, $location, $route) {
			var vm = this;
			vm.route = route;
			vm.currentRoute = $route;

			function route(url) {
				$location.path(url);
			}

			init();
			function init() {
				$window.ga('send', 'pageview', { page: $location.url() });
			}
		}
	})();

/***/ },
/* 5 */
/***/ function(module, exports) {

	/**
	 * Created by Krys on 9/17/2016.
	 */
	'use strict';

	(function () {
		'use strict';

		/**
	  * @ngdoc module
	  * @name starterAngularFractal.module:starterAngularFractal
	  * @description Gets some squirrels on the scope.
	  */
		angular.module('shardulGo').controller('ExperienceController', ExperienceController);

		/* @ngInject */
		function ExperienceController($scope, $window, $location, $route, preloader) {
			var vm = this;
			var player;
			// var $ = function(id) { return document.getElementById(id); }
			var youTubeFunc = function youTubeFunc(tagname) {
				return document.getElementsByTagName(tagname);
			};

			vm.route = route;
			vm.triggerAnimations = triggerAnimations;

			vm.currentRoute = $route;

			function route(url) {
				$location.path(url);
			}

			init();
			function init() {
				$window.ga('send', 'pageview', { page: $location.url() });
			}

			function triggerAnimations() {
				return "animate fadeIn";
			}

			// 	function onYouTubeIframeAPIReady() {
			//     var videos = youTubeFunc('iframe'), // the iframes elements
			//         players = [], // an array where we stock each videos youtube instances class
			//         playingID = null; // stock the current playing video
			//     for (var i = 0; i < videos.length; i++) // for each iframes
			//     {
			//         var currentIframeID = videos[i].id; // we get the iframe ID
			//         players[currentIframeID] = new YT.Player(currentIframeID); // we stock in the array the instance
			//         // note, the key of each array element will be the iframe ID
			//
			//         videos[i].onmouseover = function(e) { // assigning a callback for this event
			//             var currentHoveredElement = e.target;
			//             if (playingID) // if a video is currently played
			//             {
			//                 players[playingID].pauseVideo();
			//             }
			//             players[currentHoveredElement.id].playVideo();
			//             playingID = currentHoveredElement.id;
			//         };
			//     }
			//
			// }
			// onYouTubeIframeAPIReady();
		}
	})();

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	(function () {
		angular.module('shardulGo').factory("preloader", function ($q, $rootScope) {
			// I manage the preloading of image objects. Accepts an array of image URLs.
			function Preloader(imageLocations) {
				// I am the image SRC values to preload.
				this.imageLocations = imageLocations;
				// As the images load, we'll need to keep track of the load/error
				// counts when announing the progress on the loading.
				this.imageCount = this.imageLocations.length;
				this.loadCount = 0;
				this.errorCount = 0;
				// I am the possible states that the preloader can be in.
				this.states = {
					PENDING: 1,
					LOADING: 2,
					RESOLVED: 3,
					REJECTED: 4
				};
				// I keep track of the current state of the preloader.
				this.state = this.states.PENDING;
				// When loading the images, a promise will be returned to indicate
				// when the loading has completed (and / or progressed).
				this.deferred = $q.defer();
				this.promise = this.deferred.promise;
			}
			// ---
			// STATIC METHODS.
			// ---
			// I reload the given images [Array] and return a promise. The promise
			// will be resolved with the array of image locations.
			Preloader.preloadImages = function (imageLocations) {
				var preloader = new Preloader(imageLocations);
				return preloader.load();
			};
			// ---
			// INSTANCE METHODS.
			// ---
			Preloader.prototype = {
				// Best practice for "instnceof" operator.
				constructor: Preloader,
				// ---
				// PUBLIC METHODS.
				// ---
				// I determine if the preloader has started loading images yet.
				isInitiated: function isInitiated() {
					return this.state !== this.states.PENDING;
				},
				// I determine if the preloader has failed to load all of the images.
				isRejected: function isRejected() {
					return this.state === this.states.REJECTED;
				},
				// I determine if the preloader has successfully loaded all of the images.
				isResolved: function isResolved() {
					return this.state === this.states.RESOLVED;
				},
				// I initiate the preload of the images. Returns a promise.
				load: function load() {
					// If the images are already loading, return the existing promise.
					if (this.isInitiated()) {
						return this.promise;
					}
					this.state = this.states.LOADING;
					for (var i = 0; i < this.imageCount; i++) {
						this.loadImageLocation(this.imageLocations[i]);
					}
					// Return the deferred promise for the load event.
					return this.promise;
				},
				// ---
				// PRIVATE METHODS.
				// ---
				// I handle the load-failure of the given image location.
				handleImageError: function handleImageError(imageLocation) {
					this.errorCount++;
					// If the preload action has already failed, ignore further action.
					if (this.isRejected()) {
						return;
					}
					this.state = this.states.REJECTED;
					this.deferred.reject(imageLocation);
				},
				// I handle the load-success of the given image location.
				handleImageLoad: function handleImageLoad(imageLocation) {
					this.loadCount++;
					// If the preload action has already failed, ignore further action.
					if (this.isRejected()) {
						return;
					}
					// Notify the progress of the overall deferred. This is different
					// than Resolving the deferred - you can call notify many times
					// before the ultimate resolution (or rejection) of the deferred.
					this.deferred.notify({
						percent: Math.ceil(this.loadCount / this.imageCount * 100),
						imageLocation: imageLocation
					});
					// If all of the images have loaded, we can resolve the deferred
					// value that we returned to the calling context.
					if (this.loadCount === this.imageCount) {
						this.state = this.states.RESOLVED;
						this.deferred.resolve(this.imageLocations);
					}
				},
				// I load the given image location and then wire the load / error
				// events back into the preloader instance.
				// --
				// NOTE: The load/error events trigger a $digest.
				loadImageLocation: function loadImageLocation(imageLocation) {
					var preloader = this;
					// When it comes to creating the image object, it is critical that
					// we bind the event handlers BEFORE we actually set the image
					// source. Failure to do so will prevent the events from proper
					// triggering in some browsers.
					var image = $(new Image()).load(function (event) {
						// Since the load event is asynchronous, we have to
						// tell AngularJS that something changed.
						$rootScope.$apply(function () {
							preloader.handleImageLoad(event.target.src);
							// Clean up object reference to help with the
							// garbage collection in the closure.
							preloader = image = event = null;
						});
					}).error(function (event) {
						// Since the load event is asynchronous, we have to
						// tell AngularJS that something changed.
						$rootScope.$apply(function () {
							preloader.handleImageError(event.target.src);
							// Clean up object reference to help with the
							// garbage collection in the closure.
							preloader = image = event = null;
						});
					}).prop("src", imageLocation);
				}
			};
			// Return the factory instance.
			return Preloader;
		});
	})();

/***/ },
/* 7 */
/***/ function(module, exports) {

	/**
	 * Created by Krys on 9/30/2016.
	 */
	'use strict';

	(function () {
		'use strict';

		/**
	  * @ngdoc module
	  * @name starterAngularFractal.module:starterAngularFractal
	  * @description Gets some squirrels on the scope.
	  */
		angular.module('shardulGo').controller('ContactController', ContactController);

		/* @ngInject */
		function ContactController($scope, $timeout, $window, $location, $route, preloader) {
			var vm = this;
			vm.route = route;
			vm.triggerAnimations = triggerAnimations;
			vm.sendEventTracker = sendEventTracker;

			vm.delay = false;
			$timeout(function () {
				vm.delay = true;
			}, 1000);

			vm.currentRoute = $route;

			function route(url) {
				$location.path(url);
			}

			vm.collapsibleElements = [{
				icon: 'fa fa-envelope-o',
				title: 'Gmail',
				linkText: 'shardul.golwalkar@gmail.com',
				link: 'mailto:shardul.golwalkar@gmail.com',
				text: "Email me at: "
			}, {
				icon: 'fa fa-linkedin',
				title: 'Linkedin',
				linkText: 'Linkedin Profile',
				link: 'https://www.linkedin.com/in/shardulgolwalkar',
				text: "Checkout my "
			}, {
				icon: 'fa fa-github',
				title: 'Github',
				link: 'https://github.com/sgolwalkar',
				linkText: ' Github',
				text: "View my side projects on"
			}];

			vm.options = {
				scrollwheel: false,
				control: false,
				draggable: false,
				disableDoubleClickZoom: true,
				disableDefaultUI: true
			};

			vm.map = { center: { latitude: 45.53, longitude: -122.64 }, zoom: 9 };

			init();
			function init() {
				$window.ga('send', 'pageview', { page: $location.url() });
			}

			function triggerAnimations() {
				return "animate fadeIn";
			}

			function sendEventTracker(clicked) {
				ga('send', 'event', clicked, 'clicked');
			}
		}
	})();

/***/ },
/* 8 */
/***/ function(module, exports) {

	/**
	 * Created by Krys on 10/25/2016.
	 */
	'use strict';

	(function () {
		'use strict';

		angular.module('shardulGo').directive('krysFooter', Footer);

		/* @ngInject */
		function Footer() {
			return {
				restrict: 'EA',
				templateUrl: 'common/footer/footer.html',
				transclude: true
			};
		}
	})();

/***/ }
/******/ ]);