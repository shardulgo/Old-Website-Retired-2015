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

		function sendEventTracker(clicked){
			ga('send', 'event', clicked, 'clicked');
		}

	}
})();
