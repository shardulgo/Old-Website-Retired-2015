/**
 * Created by Krys on 10/25/2016.
 */
(function () {
	'use strict';

	angular.module('shardulGo').directive('krysFooter', Footer);

	/* @ngInject */
	function Footer() {
		return {
			restrict: 'EA',
			templateUrl: 'common/footer/footer.html',
			transclude : true
		};
	}
})();
