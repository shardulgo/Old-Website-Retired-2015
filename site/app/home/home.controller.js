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

		vm.imageLocations = [
			"images/Picture3.png",
			"images/desk.jpg",
			"images/mopar.jpg",
			"images/parkway2.jpg",
			"images/me.jpg",
			"images/az.jpg",
			"images/asu.jpg"
		];
		// Preload the images; then, update display when returned.
		preloader.preloadImages(vm.imageLocations);

		init();
		function init() {
			$window.ga('send', 'pageview', { page: $location.url() });
			console.log();
		}

		vm.currentRoute = $route;

		function route(url) {
			$location.path(url);
		}

		function sendEventTracker(clicked){
			ga('send', 'event', clicked, 'clicked');
		}

		function triggerAnimations() {
			return "animate fadeIn";
		}
	}
})();
