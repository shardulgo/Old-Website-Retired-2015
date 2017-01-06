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
